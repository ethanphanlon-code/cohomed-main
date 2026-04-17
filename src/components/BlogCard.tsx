import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
    {post.featuredImage && (
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
    )}
    <div className="flex flex-grow flex-col p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
          {post.category}
        </span>
        <span className="text-sm text-gray-600">{post.readTime} min read</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        <Link href={`/blog/${post.slug}`} className="hover:text-teal-600">
          {post.title}
        </Link>
      </h3>
      <p className="mb-4 flex-grow text-gray-600">{post.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>By {post.author}</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-AU')}
        </time>
      </div>
    </div>
  </article>
);
