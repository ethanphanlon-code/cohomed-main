#!/usr/bin/env python3
"""
Generates the supporting pages from one shared shell.

The output is plain static HTML — Vercel serves it directly and no build step
runs on deploy. This script exists so the nav, footer and head tags stay
identical across pages; re-run it after editing SHELL or any PAGE body.

    python3 build.py
"""

import hashlib
import re
from pathlib import Path

HERE = Path(__file__).parent


def css_version() -> str:
    """Short content hash of styles.css, used to bust the CDN and browser cache.

    HTML is revalidated on every request but styles.css carries a one-hour
    max-age, so without this a visitor can hold new markup against an old
    stylesheet for up to an hour. That combination renders incorrectly rather
    than merely looking dated, which is far worse than a stale cache.
    Appending the content hash means the two can never disagree: change the
    CSS and the URL changes with it.
    """
    return hashlib.sha256((HERE / 'styles.css').read_bytes()).hexdigest()[:8]


CSS_VER = css_version()

MARK = (
    '<svg viewBox="0 0 64 64" aria-hidden="true">'
    '<rect x="5" y="5" width="54" height="54" rx="12" fill="none" stroke="currentColor" stroke-width="5"/>'
    '<path d="M18 34 32 21l14 13v14H18V34Z" fill="currentColor"/>'
    '</svg>'
)

MARK_LIGHT = MARK.replace('currentColor', '#FBF6EE')

NAV_ITEMS = [
    ('/how-it-works.html', 'How it works'),
    ('/#schemes', 'Schemes'),
    ('/#pricing', 'Pricing'),
    ('/faq.html', 'FAQ'),
    ('/about.html', 'About'),
]


def nav(current: str) -> str:
    def link(href: str, label: str) -> str:
        mark = ' aria-current="page"' if href == current else ''
        return f'<a href="{href}"{mark}>{label}</a>'

    links = ''.join(link(h, l) for h, l in NAV_ITEMS)
    return f"""<header class="nav">
  <nav class="nav-inner" aria-label="Primary">
    <a class="logo" href="/" aria-label="CoHomed home">{MARK}<span>CoHomed</span></a>
    <div class="nav-links">{links}<a class="btn btn-primary btn-sm nav-cta" href="/#get-started">Get the app</a></div>
  </nav>
</header>"""


FOOTER = f"""<footer class="footer">
  <div class="wrap">
    <div class="footer-cols">
      <div style="max-width:26em">
        <a class="logo" href="/" style="font-size:21px">{MARK_LIGHT}<span>CoHomed</span></a>
        <p class="small" style="margin-top:14px">
          Helping Queenslanders buy homes together. Fairly, transparently, and
          without pretending the paperwork isn’t the hard part.
        </p>
      </div>
      <div>
        <h4>Product</h4>
        <div class="footer-links">
          <a href="/how-it-works.html">How it works</a>
          <a href="/#schemes">Queensland schemes</a>
          <a href="/#pricing">Pricing</a>
          <a href="/faq.html">FAQ</a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <div class="footer-links">
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </div>
      </div>
      <div>
        <h4>Legal</h4>
        <div class="footer-links">
          <a href="/privacy.html">Privacy policy</a>
          <a href="/terms.html">Terms of service</a>
        </div>
      </div>
    </div>
    <div class="footer-base">
      <span>© <span id="yr">2026</span> CoHomed Pty Ltd. Queensland, Australia.</span>
      <span>CoHomed prepares documents and provides information. It does not provide legal, financial or credit advice.</span>
    </div>
  </div>
</footer>
<script>
document.getElementById('yr').textContent = new Date().getFullYear();

// Reveal on scroll. Anything already in view on load is revealed immediately,
// so short pages never sit hidden waiting for a scroll that will not come.
(function () {{
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {{
    els.forEach(function (el) {{ el.classList.add('in'); }});
    return;
  }}
  var io = new IntersectionObserver(function (entries) {{
    entries.forEach(function (e) {{
      if (e.isIntersecting) {{ e.target.classList.add('in'); io.unobserve(e.target); }}
    }});
  }}, {{ rootMargin: '0px 0px -60px 0px' }});
  els.forEach(function (el, i) {{
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
    io.observe(el);
  }});
}})();
</script>"""


SHELL = """<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#4E6B54">
<link rel="canonical" href="https://www.cohomed.com{path}">
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://www.cohomed.com{path}">
<meta property="og:site_name" content="CoHomed">
<link rel="icon" href="/assets/cohomed-favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/cohomed-icon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css?v={css_ver}">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
{nav}
<main id="main">
{body}
</main>
{footer}
</body>
</html>
"""


def page_head(eyebrow: str, title: str, lead: str = '') -> str:
    lead_html = f'<p class="lead" style="margin-top:20px;max-width:38em">{lead}</p>' if lead else ''
    return f"""<section style="padding-bottom:clamp(32px,4vw,48px)">
  <div class="wrap" style="max-width:900px">
    <span class="eyebrow">{eyebrow}</span>
    <h1 style="font-size:clamp(36px,5.2vw,60px);margin-top:14px">{title}</h1>
    {lead_html}
  </div>
</section>"""


def prose(*blocks: str) -> str:
    return f"""<section style="padding-top:0">
  <div class="wrap" style="max-width:760px">
    {''.join(blocks)}
  </div>
</section>"""


def h2(t): return f'<h2 style="font-size:clamp(24px,3vw,32px);margin:40px 0 14px">{t}</h2>'
def h3(t): return f'<h3 style="margin:28px 0 10px">{t}</h3>'
def p(t):  return f'<p style="margin-bottom:14px">{t}</p>'
def note(t): return f'<div class="note" style="margin:24px 0">{t}</div>'


def ul(*items):
    lis = ''.join(f'<li style="margin-bottom:10px">{i}</li>' for i in items)
    return f'<ul style="margin:0 0 18px;padding-left:22px;color:var(--body-soft)">{lis}</ul>'


# ── imagery ────────────────────────────────────────────────────────────────
# Photo IDs and alt text carried over from the original CoHomed design pack,
# so these are the photographs the brand was actually designed around rather
# than a fresh guess. Unsplash License: free for commercial use, no
# attribution required. Served from images.unsplash.com — allowed in the CSP
# in vercel.json.

UNSPLASH = 'https://images.unsplash.com'


def photo(pid: str, alt: str, shape: str = 'wide', w: int = 1200,
          over: str = '', cls: str = '') -> str:
    """A photograph on its warm plate, wearing the asymmetric corner."""
    overlay = f'<div class="over">{over}</div>' if over else ''
    return (
        f'<div class="photo {shape} {cls}">'
        f'<img src="{UNSPLASH}/{pid}?auto=format&amp;fit=crop&amp;w={w}&amp;q=70" '
        f'alt="{alt}" loading="lazy" decoding="async">'
        f'{overlay}</div>'
    )


TICK = ('<svg width="17" height="17" viewBox="0 0 24 24" fill="none" '
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" '
        'stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>')


def detail(*items) -> str:
    lis = ''.join(f'<li>{TICK}<span>{i}</span></li>' for i in items)
    return f'<ul class="detail">{lis}</ul>'


def step(n: str, label: str, title: str, body: str, extra: str,
         pid: str = '', alt: str = '', flip: bool = False, media: str = '') -> str:
    """One alternating step row: copy on one side, artwork on the other.

    Most steps use a photograph. The document pack uses drawn artwork instead —
    no stock photo says "six agreements populated from your figures", and the
    living room that used to sit here said nothing at all.
    """
    art = media if media else photo(pid, alt, 'square', 900)
    return f"""<div class="alt-row reveal{' flip' if flip else ''}" style="margin-bottom:clamp(56px,7vw,96px)">
  <div class="alt-media">{art}</div>
  <div>
    <div class="step-big"><span class="n">{n}</span><span class="l">{label}</span></div>
    <h2 style="font-size:clamp(28px,3.6vw,40px)">{title}</h2>
    <p class="lead" style="margin-top:16px">{body}</p>
    {extra}
  </div>
</div>"""


# ══════════════════════════════════════════════════════════ pages ══


# ── sage bands ─────────────────────────────────────────────────────────────
# The supporting pages were entirely cream, like the landing page used to be.
# These give every page at least one solid-sage moment and a closing ask, so
# the colour system carries across the site rather than living on one page.

def figures(*items, eyebrow: str = 'The numbers', note: str = '') -> str:
    """Full-bleed sage band of large figures."""
    figs = ''.join(f'<div class="fig reveal"><b>{v}</b><span>{c}</span></div>' for v, c in items)
    fine = (f'<p class="fine reveal" style="color:var(--on-accent-label);'
            f'margin-top:clamp(24px,3vw,34px)">{note}</p>') if note else ''
    return f"""<section class="field">
  <div class="wrap">
    <span class="eyebrow reveal">{eyebrow}</span>
    <div class="figs" style="margin-top:clamp(26px,3vw,38px)">{figs}</div>
    {fine}
  </div>
</section>"""


def closer(title: str, body: str) -> str:
    """Closing ask, in sage, so every page ends on the same note."""
    return f"""<section class="field" style="text-align:center">
  <div class="wrap">
    <div class="reveal" style="max-width:40em;margin-inline:auto">
      <span class="eyebrow">Get started</span>
      <h2 style="margin:14px 0 16px">{title}</h2>
      <p class="lead" style="max-width:34em;margin-inline:auto">{body}</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:30px">
        <a class="btn btn-on-accent" href="/#get-started">Get the app</a>
        <a class="btn btn-ghost-accent" href="/how-it-works.html">See how it works</a>
      </div>
    </div>
  </div>
</section>"""


CAP_ROWS = [
    ('First Home Owner Grant', True, True, ''),
    ('First home (new home) duty concession', True, True, 'Assessed on each person’s share'),
    ('Boost to Buy', True, False, 'Thresholds stop at two adults'),
    ('First Home Guarantee', True, False, 'Maximum two applicants'),
]

_TICK = ('<span class="cap-y"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
         'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
         '<path d="M20 6 9 17l-5-5"/></svg><em class="sr-only">Available</em></span>')
_CROSS = ('<span class="cap-n"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
          'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
          '<path d="M18 6 6 18M6 6l12 12"/></svg><em class="sr-only">Not available</em></span>')


def cap_table() -> str:
    """Applicant caps by house size — the finding no competitor is publishing."""
    rows = ''.join(
        f'<div class="cap-row"><div class="cap-name"><b>{n}</b>'
        f'{f"<em>{note}</em>" if note else ""}</div>'
        f'<div class="cap-c" data-h="2 people">{_TICK if a else _CROSS}</div>'
        f'<div class="cap-c" data-h="3–4 people">{_TICK if b else _CROSS}</div></div>'
        for n, a, b, note in CAP_ROWS)
    return f"""<div class="cap reveal">
  <div class="cap-head">
    <h3>Half the help stops at two people.</h3>
    <p>Two of the four schemes cap applicants at two. If you are buying as a house
    of three or four they are closed to you, and almost nobody tells you that
    before you have spent money finding out.</p>
  </div>
  <div class="cap-grid">
    <div class="cap-row cap-row--head"><div></div>
      <div class="cap-c">2 people</div><div class="cap-c">3–4 people</div></div>
    {rows}
  </div>
  <p class="fine" style="margin-top:18px">
    Published criteria as at 28 August 2026, and they change without notice. This
    is a comparison of published rules, not a determination of anyone’s
    eligibility — confirm each with the administering body.
  </p>
</div>"""


PACK_ART = """<div class="pack">
  <div class="pack-head"><span class="eyebrow">The pack</span><em>Six documents</em></div>
  <ul class="pack-list"><li style="--i:0"><span class="pack-n">1</span><span class="pack-t"><b>Co-Ownership Agreement</b><em>Tenants in common · 14 pages</em></span></li><li style="--i:1"><span class="pack-n">2</span><span class="pack-t"><b>Household Expense Agreement</b><em>Shared costs and arrears · 6 pages</em></span></li><li style="--i:2"><span class="pack-n">3</span><span class="pack-t"><b>Mortgage Contribution Deed</b><em>Repayment shares · 5 pages</em></span></li><li style="--i:3"><span class="pack-n">4</span><span class="pack-t"><b>Statement of Position</b><em>One per member · 4 documents</em></span></li><li style="--i:4"><span class="pack-n">5</span><span class="pack-t"><b>Lender Presentation Pack</b><em>Factual compilation · 11 pages</em></span></li><li style="--i:5"><span class="pack-n">6</span><span class="pack-t"><b>Grant Application Packs</b><em>Pre-filled per scheme · 3 documents</em></span></li></ul>
  <p class="pack-foot">Prepared from your house’s own figures. Intended for
  independent legal review before anyone signs.</p>
</div>"""

PAGES = {}

# ---------------------------------------------------------------- how it works
PAGES['how-it-works.html'] = dict(
    title='How CoHomed works — CoHomed',
    desc='Five steps from a group chat to a signed set of co-ownership documents. '
         'Set up a house, bring in the others, enter the numbers, check the Queensland '
         'schemes, and get the pack.',
    nav_current='/how-it-works.html',
    body=f"""
<section style="padding-bottom:clamp(28px,3vw,40px)">
  <div class="wrap">
    <div class="rise" style="max-width:760px">
      <span class="eyebrow">How it works</span>
      <h1 style="font-size:clamp(38px,5.6vw,66px);margin-top:14px">
        From a group chat to a signed agreement.
      </h1>
      <p class="lead" style="margin-top:24px;max-width:36em">
        Nobody sets out to be defeated by paperwork. But buying with friends means
        agreements you have never drafted, contributions nobody is tracking, and
        schemes whose rules shift depending on how many of you there are. Here is
        exactly how CoHomed gets a house through it.
      </p>
    </div>
  </div>
</section>

<section style="padding-top:0;padding-bottom:clamp(48px,6vw,80px)">
  <div class="wrap">
    <div class="rise rise-1">
      {photo('photo-1746485838238-cef75c9f02a3',
             'A weatherboard Queenslander with a deep veranda, set among subtropical greenery',
             'band', 1800,
             over='<strong>The part nobody warns you about</strong>'
                  'The finance is rarely the hard bit. The structure is.')}
    </div>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">

    {step('01', 'Set up',
          'One person starts the house.',
          'Name it, set what the group is aiming to spend, and record what you '
          'personally expect to put toward the deposit. Two minutes, and it costs '
          'nothing.',
          detail(
              'Pick a name everyone will recognise — the suburb usually works',
              'A rough target price is fine; it only drives the estimates',
              'You get a six-character code at the end. That is how everyone else gets in',
          ),
          'photo-1632110325927-9db96b3f2e2c',
          'A timber home half hidden by dense subtropical planting')}

    {step('02', 'Invite',
          'Bring in the people you are buying with.',
          'Share the code. Each person makes their own account, joins the house, and '
          'enters their own income and deposit contribution. Nobody enters anybody '
          'else’s numbers.',
          detail(
              'Two to four people per house',
              'Add names before they join so the house shows who you are waiting on',
              'Everyone in the house can see everyone’s figures — that is how a '
              'split gets agreed fairly, and the app says so before you type anything',
          ),
          'photo-1517502884422-41eaead166d4',
          'A small group sitting around a table going through documents together',
          flip=True)}

    {step('03', 'The numbers',
          'The split works itself out.',
          'As contributions come in, ownership shares recalculate in proportion. '
          'Everyone sees the same figures at the same time, which turns an awkward '
          'conversation into a screen you can point at.',
          detail(
              'Shares derive from deposit contributions by default',
              'Pooled deposit and remaining balance update live',
              'Estimates only — not an assessment of what anyone can borrow',
          ),
          'photo-1562564055-71e051d33c19',
          'Two people going through and signing paperwork together at a table')}

    {step('04', 'The schemes',
          'Find out where you actually stand.',
          'Four Queensland schemes, each with its published criteria checked against '
          'what your house has entered, and a link to the official source for every '
          'one.',
          detail(
              'First Home Owner Grant, First Home Concession, Boost to Buy, '
              'First Home Guarantee',
              'Applicant caps flagged against your house size — a scheme capped at '
              'two cannot cover a house of four',
              'A self-assessment against published rules, not a determination',
          ),
          'photo-1635859890085-ec8cb5466806',
          'Printed documents spread across a table, being worked through',
          flip=True)}

    {step('05', 'The pack',
          'Every document, prepared from your own figures.',
          'Once everyone has joined and completed their details, the pack unlocks. '
          'You pay once, six documents are generated from what the house entered, and '
          'every member signs electronically.',
          detail(
              'Regenerate and re-download for the life of the account',
              'One fee per house. Not a subscription',
              'Intended for independent legal review before anyone signs',
          ),
          media=PACK_ART)}

  </div>
</section>

<!-- what is in the pack -->
<section class="tint">
  <div class="wrap">
    <div class="reveal" style="max-width:40em">
      <span class="eyebrow">What you get</span>
      <h2 style="margin-top:14px">Six documents, and a reason for each one.</h2>
    </div>

    <div class="grid" style="margin-top:clamp(32px,4vw,52px)">
      <div class="card reveal">
        <h4>Co-Ownership Agreement</h4>
        <p>The core document. Who owns what share, how decisions get made, what
        happens if someone wants out, and how a departing owner is bought out.</p>
      </div>
      <div class="card reveal">
        <h4>Household Expense Agreement</h4>
        <p>Rates, insurance, repairs, and who pays what. Written down before the
        first bill arrives rather than after the first argument.</p>
      </div>
      <div class="card reveal">
        <h4>Mortgage Contribution Deed</h4>
        <p>Repayment shares, and the position of anyone on the title who is not on
        the loan. Often the gap that causes trouble years later.</p>
      </div>
      <div class="card reveal">
        <h4>Statement of Position</h4>
        <p>One per member. Income, savings and contribution set out in a form a
        lender will recognise.</p>
      </div>
      <div class="card reveal">
        <h4>Lender Presentation Pack</h4>
        <p>The whole house compiled into a single document you take to whichever
        broker or lender you choose. We do not name one.</p>
      </div>
      <div class="card reveal">
        <h4>Grant Application Packs</h4>
        <p>Pre-filled data sheets for each Queensland scheme you self-assess as
        being worth applying for.</p>
      </div>
    </div>
  </div>
</section>

<!-- after -->
<section>
  <div class="wrap" style="max-width:840px">
    <div class="panel-wash reveal">
      <span class="eyebrow">Then what</span>
      <h2 style="font-size:clamp(28px,3.6vw,40px);margin-top:14px">
        Take it to a solicitor. Then a lender.
      </h2>
      <p class="lead" style="margin-top:20px">
        The pack is the start of professional advice, not a substitute for it.
        Co-ownership has consequences that outlast the purchase, and a template
        cannot know your circumstances.
      </p>
      <p style="margin-top:16px">
        Have the agreements reviewed by a Queensland solicitor before anyone
        signs. Take the lender pack to whichever broker or lender you like the
        look of. CoHomed does not recommend either and receives nothing if you
        use one.
      </p>
      <div class="note" style="margin-top:24px;background:rgba(255,255,255,.6)">
        CoHomed prepares documents and sets out published information. It does
        not provide legal, financial or credit advice, and does not determine
        whether you qualify for anything.
      </div>
    </div>
  </div>
</section>

<!-- cta -->
<section class="tint" style="text-align:center">
  <div class="wrap">
    <div class="reveal" style="max-width:38em;margin-inline:auto">
      <span class="eyebrow">Get started</span>
      <h2 class="major" style="margin:14px 0 16px">See where your house stands.</h2>
      <p class="lead">
        Setting up, entering details and checking the schemes are all free. You only
        pay when you want the documents.
      </p>
      <div style="margin-top:28px">
        <a class="btn btn-primary" href="/#get-started">Get the app</a>
      </div>
    </div>
  </div>
</section>""",
)

# ------------------------------------------------------------------------ faq
FAQ_ITEMS = [
    ('Who is CoHomed for?',
     'Groups of two to four people buying a home together in Queensland — friends, '
     'siblings, housemates. It assumes you already trust each other enough to share '
     'financial details, because the whole model depends on that.'),
    ('Is CoHomed a lender or a broker?',
     'Neither. CoHomed does not lend, does not arrange finance, does not recommend '
     'lenders or brokers, and does not receive commission from anyone. It prepares '
     'documents and sets out published information.'),
    ('Do you give financial or legal advice?',
     'No. CoHomed prepares documents from information you provide and presents the '
     'published criteria for government schemes. It does not advise on whether '
     'co-ownership suits you, what you can borrow, or whether you qualify for '
     'anything. Get a Queensland solicitor to review your documents before signing.'),
    ('Does CoHomed handle our money?',
     'No. Deposits, mortgage repayments and shared costs all happen outside the app, '
     'between you and whoever you bank with. CoHomed never sits in the middle of a '
     'payment.'),
    ('How much does it cost?',
     'A single fee of $499 per house, paid once when you generate the document pack. '
     'Setting up the house, entering details and working through the schemes are all '
     'free. There is no subscription.'),
    ('Why Queensland only?',
     'Every state has its own duty regime, grant schemes and governing legislation. '
     'Rather than half-support eight jurisdictions, CoHomed covers Queensland '
     'properly and adds states one at a time.'),
    ('How is the ownership split worked out?',
     'By default, in proportion to what each person contributes to the deposit. The '
     'app shows the calculation to everyone in the house, and the agreed split is '
     'recorded in the co-ownership agreement. What you ultimately agree is your '
     'decision — confirm the structure with your solicitor.'),
    ('Who can see my income?',
     'Every joined member of your house. That is deliberate: a split cannot be '
     'agreed fairly if people cannot see what it is based on. The app tells you this '
     'before you enter anything, and nobody outside your house sees it.'),
    ('What happens if someone wants out later?',
     'The co-ownership agreement is where that gets dealt with — exit terms, notice, '
     'and how a departing owner’s share is valued and bought out. It is one of the '
     'main reasons to have the agreement in place before you buy rather than after '
     'something goes wrong.'),
    ('Can we use the First Home Guarantee as a group of four?',
     'The scheme has a cap on the number of applicants, so a larger house may not be '
     'able to use it. The app flags applicant caps against your house size rather '
     'than letting you plan around something you cannot use. Confirm the current '
     'rules with Housing Australia.'),
]

PAGES['how-it-works.html']['body'] += (
    '<section class="tint"><div class="wrap">' + cap_table() + '</div></section>'
    + closer('Ready to see where your house stands?',
             'Set it up, invite the others, and work through the schemes before you '
             'spend anything.')
)

PAGES['faq.html'] = dict(
    title='Frequently asked questions — CoHomed',
    desc='What CoHomed does, what it costs, why Queensland only, and where you still need a solicitor.',
    nav_current='/faq.html',
    body=page_head('FAQ', 'Questions people actually ask.') + f"""
<section style="padding-top:0">
  <div class="wrap" style="max-width:820px">
    <div class="faq">
      {''.join(
          f'<details><summary>{q}</summary><p>{a}</p></details>'
          for q, a in FAQ_ITEMS
      )}
    </div>
    <p class="fine" style="margin-top:34px">
      Something not covered? <a href="/contact.html">Get in touch</a>.
    </p>
  </div>
</section>""" + closer('Still deciding?',
               'Set up a house for free and work through the Queensland schemes '
               'before you pay for anything.'),
)

# ---------------------------------------------------------------------- about
PAGES['about.html'] = dict(
    title='About CoHomed',
    desc='Why CoHomed exists, what it deliberately does not do, and where it is headed.',
    nav_current='/about.html',
    body=page_head(
        'About',
        'Built for the people the system forgot.',
        'Property law in Australia assumes couples and families. CoHomed is for '
        'everyone else — the four people already splitting rent who could afford a '
        'mortgage together if the paperwork weren’t in the way.',
    ) + prose(
        h2('Why it exists'),
        p('Most young Queenslanders can’t clear a deposit alone. Many could clear one '
          'together. The obstacle isn’t usually the money — it’s that buying with '
          'friends means agreements nobody has drafted before, contribution records '
          'nobody is keeping, and schemes whose rules shift depending on how many of '
          'you there are.'),
        p('That gap is a paperwork problem wearing a finance problem’s clothes. '
          'CoHomed solves the paperwork.'),

        h2('What we deliberately don’t do'),
        p('CoHomed was originally designed to sit in the middle of your payments and '
          'take a percentage, and to connect you with mortgage brokers. Both were cut '
          'before launch.'),
        p('Handling other people’s money and recommending credit are heavily regulated '
          'activities in Australia, and rightly so. Doing them properly requires '
          'licensing we don’t hold. Doing them improperly would put customers at risk. '
          'So the app doesn’t touch payments, doesn’t name a broker, and doesn’t take '
          'a commission from anyone.'),
        p('What’s left is narrower and more honest: we prepare your documents, we show '
          'you the published rules, and you take it from there.'),

        h2('Where it’s going'),
        p('Queensland first, properly. Then other states one at a time, each with its '
          'own duty regime, schemes and legislation verified independently rather than '
          'assumed from a neighbour.'),

        note('CoHomed Pty Ltd is an Australian company operating in Queensland. '
             'CoHomed prepares documents and provides information. It does not provide '
             'legal, financial or credit advice, and is not a lender, broker or '
             'credit assistance provider.'),
    ),
)

# -------------------------------------------------------------------- contact
PAGES['contact.html'] = dict(
    title='Contact CoHomed',
    desc='Get in touch with the CoHomed team.',
    nav_current='/contact.html',
    body=page_head('Contact', 'Get in touch.') + prose(
        p('We read everything that comes in and reply to most of it within a couple of '
          'business days.'),

        h2('Email'),
        p('General questions, feedback and support: '
          '<a href="mailto:hello@cohomed.com">hello@cohomed.com</a>'),
        p('Privacy requests and data access: '
          '<a href="mailto:privacy@cohomed.com">privacy@cohomed.com</a>'),

        h2('Before you write'),
        p('If your question is about whether co-ownership is right for you, what you '
          'can borrow, or whether a particular agreement protects you — we can’t '
          'answer that. Those are questions for a solicitor or a licensed adviser, and '
          'we’d be doing you a disservice by guessing.'),
        p('If it’s about how the app works, what’s in the document pack, or something '
          'that looks broken, we can help with all of that.'),

        note('CoHomed does not provide legal, financial or credit advice. For advice '
             'about your circumstances, speak to a Queensland solicitor or a licensed '
             'adviser.'),
    ),
)

# -------------------------------------------------------------------- privacy
PAGES['privacy.html'] = dict(
    title='Privacy policy — CoHomed',
    desc='How CoHomed collects, uses, stores and shares personal information.',
    nav_current='',
    body=page_head('Legal', 'Privacy policy',
                   'How we handle your personal information, and what rights you have over it.')
    + prose(
        p('<strong>Last updated:</strong> <span id="upd">28 August 2026</span>'),

        note('<strong>Draft for review.</strong> This policy reflects how the product '
             'actually works, but it has not yet been reviewed by a lawyer. Have it '
             'checked against the Privacy Act 1988 (Cth) and the Australian Privacy '
             'Principles before launch.'),

        h2('Who we are'),
        p('CoHomed Pty Ltd (“CoHomed”, “we”, “us”) operates the CoHomed app and this '
          'website. We are bound by the Australian Privacy Principles under the '
          'Privacy Act 1988 (Cth).'),

        h2('What we collect'),
        h3('Information you give us'),
        ul(
            'Account details — your name, email address and password',
            'Financial details — gross annual income, savings, and the amount you are '
            'contributing to a deposit',
            'House details — the name of your house, target purchase price, and the '
            'people you invite',
            'Anything else you type into the app, such as notes on a property',
        ),
        h3('Information collected automatically'),
        ul(
            'Basic device and app version information',
            'Error and crash reports, used to fix faults',
        ),

        h2('Why we collect it'),
        p('To prepare your documents, to calculate ownership splits, to show published '
          'scheme criteria against what you have entered, and to operate your account. '
          'We do not sell personal information, and we do not use it for advertising.'),

        h2('Who can see your information'),
        h3('Other members of your house'),
        p('This is the most important thing to understand. <strong>Every joined member '
          'of a house can see every other member’s income and deposit contribution.</strong> '
          'The ownership split is calculated from those figures, and it cannot be '
          'agreed fairly if people cannot see what it is based on. The app discloses '
          'this before you enter anything. Only join a house with people you trust '
          'with that information.'),
        h3('Service providers'),
        ul(
            'Supabase — database, authentication and file storage',
            'DocuSign — electronic signature, where you use it',
            'Sentry — error and crash reporting',
            'Apple and Google — app distribution and, where applicable, payment processing',
        ),
        p('We do not otherwise disclose your personal information, except where '
          'required by law.'),

        h2('Where it is stored'),
        p('Your data is held in our providers’ Australian regions where those are '
          'available. Some providers may process limited data overseas; where that '
          'happens we take reasonable steps to ensure comparable protection.'),

        h2('How long we keep it'),
        p('For as long as you have an account, plus a reasonable period afterwards for '
          'legal and record-keeping purposes. You can ask us to delete your account and '
          'associated personal information at any time.'),

        h2('Your rights'),
        ul(
            'Access the personal information we hold about you',
            'Ask us to correct anything inaccurate',
            'Ask us to delete your account and personal information',
            'Complain about how we have handled your information',
        ),
        p('Email <a href="mailto:privacy@cohomed.com">privacy@cohomed.com</a> and '
          'we will respond within a reasonable period. If you are not satisfied with our '
          'response, you can complain to the Office of the Australian Information '
          'Commissioner at oaic.gov.au.'),

        h2('Data breaches'),
        p('If a data breach occurs that is likely to result in serious harm, we will '
          'notify affected people and the Office of the Australian Information '
          'Commissioner as required by the Notifiable Data Breaches scheme.'),

        h2('Children'),
        p('CoHomed is not intended for anyone under 18 and we do not knowingly collect '
          'their information.'),

        h2('Changes'),
        p('If we change this policy we will update the date at the top and, for '
          'significant changes, tell you in the app.'),
    ),
)

# ---------------------------------------------------------------------- terms
PAGES['terms.html'] = dict(
    title='Terms of service — CoHomed',
    desc='The terms on which CoHomed provides its document preparation service.',
    nav_current='',
    body=page_head('Legal', 'Terms of service',
                   'The terms you agree to when you use CoHomed.')
    + prose(
        p('<strong>Last updated:</strong> 28 August 2026'),

        note('<strong>Draft for review.</strong> These terms describe how the product '
             'actually works but have not been reviewed by a lawyer. Have them checked '
             'against the Australian Consumer Law before launch — particularly the '
             'limitation of liability and refund sections, which cannot exclude the '
             'consumer guarantees.'),

        h2('1. What CoHomed is'),
        p('CoHomed prepares documents from information you provide, and presents '
          'published information about Queensland government schemes. That is the '
          'entire service.'),

        h2('2. What CoHomed is not'),
        p('CoHomed is <strong>not</strong> a law practice, a lender, a mortgage broker, '
          'a credit assistance provider, or a financial adviser. Nothing in the app or '
          'on this website is legal, financial or credit advice.'),
        ul(
            'We do not advise whether co-ownership is appropriate for you',
            'We do not assess or represent what you are able to borrow',
            'We do not determine whether you qualify for any government scheme',
            'We do not recommend, introduce or refer you to any lender or broker, and '
            'we receive no commission from any of them',
            'We never handle money between you and any other person',
        ),

        h2('3. Documents'),
        p('Documents are generated from professionally drafted templates, populated '
          'with the information your house enters. They are a starting point for '
          'professional review.'),
        p('<strong>You must have your documents reviewed by a qualified Queensland '
          'solicitor before anyone signs them.</strong> Property co-ownership has '
          'serious, long-lasting legal consequences, and a template cannot account for '
          'your specific circumstances.'),
        p('You are responsible for the accuracy of the information you enter. Documents '
          'generated from incorrect information will be incorrect.'),

        h2('4. Government schemes'),
        p('Scheme information reflects criteria published by the relevant authority at '
          'the time of writing. Criteria, caps and availability change without notice. '
          'Any eligibility indication in the app is your own self-assessment against '
          'those published criteria — it is not a determination, and it is not a '
          'promise that you will receive anything. Always confirm against the official '
          'source before relying on it.'),

        h2('5. Your account'),
        ul(
            'You must be at least 18 and an Australian resident',
            'One account per person; keep your password secure',
            'You are responsible for activity under your account',
            'Information you enter in a house is visible to every joined member of that house',
        ),

        h2('6. Fees'),
        p('The document pack is a single fee per house, shown in the app before you '
          'pay. It is not a subscription and does not recur. Where you purchase through '
          'the Apple App Store or Google Play, that platform’s payment terms also apply.'),

        h2('7. Refunds'),
        p('Because documents are generated immediately on purchase, we generally cannot '
          'offer a refund once the pack has been produced. Nothing in these terms '
          'limits your rights under the Australian Consumer Law, including the consumer '
          'guarantees — if the service is faulty or not as described, contact us.'),

        h2('8. Acceptable use'),
        ul(
            'Do not enter information about people without their knowledge',
            'Do not use CoHomed to mislead a lender or a government authority',
            'Do not resell or redistribute generated documents as your own product',
        ),

        h2('9. Liability'),
        p('To the extent permitted by law, CoHomed is not liable for indirect or '
          'consequential loss arising from your use of the service. Nothing in these '
          'terms excludes, restricts or modifies any right or remedy you have under the '
          'Australian Consumer Law that cannot lawfully be excluded.'),

        h2('10. Changes'),
        p('We may update these terms. Material changes will be notified in the app. '
          'Continuing to use CoHomed after a change means you accept the updated terms.'),

        h2('11. Governing law'),
        p('These terms are governed by the laws of Queensland, Australia.'),

        h2('12. Contact'),
        p('<a href="mailto:hello@cohomed.com">hello@cohomed.com</a>'),
    ),
)


# ══════════════════════════════════════════════════════════ write ══

def stamp_index() -> None:
    """Point index.html at the current stylesheet hash.

    index.html is hand-maintained rather than generated, so it would otherwise
    be the one page that could drift out of step with the others.
    """
    path = HERE / 'index.html'
    src = path.read_text(encoding='utf-8')
    out = re.sub(
        r'href="/styles\.css(?:\?v=[^"]*)?"',
        f'href="/styles.css?v={CSS_VER}"',
        src,
    )
    if out != src:
        path.write_text(out, encoding='utf-8')
        print(f'  stamped index.html  (css v={CSS_VER})')
    else:
        print(f'  index.html already at css v={CSS_VER}')


# The legal pages stay plain — a marketing band under a privacy policy reads
# badly — but everything else closes on the same sage ask.
for _pg, _t, _b in [
    ('about.html', 'Buying with people you trust?',
     'Set up a house, see where you stand, and only pay when you want the documents.'),
    ('contact.html', 'Ready when you are.',
     'Set up a house for free and see where your group stands before spending anything.'),
]:
    PAGES[_pg]['body'] += closer(_t, _b)


def main() -> None:
    for filename, cfg in PAGES.items():
        html = SHELL.format(
            title=cfg['title'],
            desc=cfg['desc'],
            path='/' + filename,
            nav=nav(cfg['nav_current']),
            body=cfg['body'],
            footer=FOOTER,
            css_ver=CSS_VER,
        )
        (HERE / filename).write_text(html, encoding='utf-8')
        print(f'  wrote {filename}  ({len(html):,} bytes)')
    stamp_index()


if __name__ == '__main__':
    main()
