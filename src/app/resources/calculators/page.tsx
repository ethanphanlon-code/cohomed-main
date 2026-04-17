'use client';

import { useState } from 'react';

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Calculators
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Free tools to help you understand your finances and plan your co-ownership purchase.
          </p>
        </div>

        {/* Calculators */}
        <div className="grid md:grid-cols-2 gap-8">
          <StampDutyCalculator />
          <BorrowingPowerCalculator />
          <CostSplitCalculator />
        </div>

        {/* Info */}
        <div className="mt-16 bg-teal-50 rounded-lg p-8 border border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use These Calculators
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Stamp Duty:</strong> See how much you'll pay in stamp duty based on property price and first-home status.
            </li>
            <li>
              <strong>Borrowing Power:</strong> Estimate how much you can borrow based on combined income and existing debts.
            </li>
            <li>
              <strong>Cost Split:</strong> Divide property costs fairly among co-owners based on ownership percentages.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            These are estimates for planning purposes. Always consult with professionals (accountant, broker, solicitor) before making decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

function StampDutyCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [isFirstHome, setIsFirstHome] = useState(true);

  const calculateStampDuty = (price: number, firstHome: boolean): number => {
    if (firstHome && price <= 350000) return 0;
    if (firstHome && price <= 500000) return price * 0.015;
    if (firstHome && price <= 750000) return 5250 + (price - 500000) * 0.025;

    if (price <= 350000) return price * 0.015;
    if (price <= 500000) return 5250 + (price - 350000) * 0.025;
    if (price <= 750000) return 9250 + (price - 500000) * 0.035;
    if (price <= 1000000) return 18000 + (price - 750000) * 0.04;

    return 28000 + (price - 1000000) * 0.045;
  };

  const stampDuty = calculateStampDuty(purchasePrice, isFirstHome);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">QLD Stamp Duty</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="purchase-price" className="block text-sm font-medium text-gray-700 mb-2">
            Property Price: ${purchasePrice.toLocaleString()}
          </label>
          <input
            id="purchase-price"
            type="range"
            min="50000"
            max="2000000"
            step="10000"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="mt-2 w-full rounded border border-gray-300 px-3 py-2 text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="first-home"
            type="checkbox"
            checked={isFirstHome}
            onChange={(e) => setIsFirstHome(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-teal-600"
          />
          <label htmlFor="first-home" className="text-sm text-gray-700">
            First home buyer(s)
          </label>
        </div>

        <div className="rounded-lg bg-teal-50 p-4 border border-teal-200">
          <p className="text-sm text-gray-600">Estimated Stamp Duty:</p>
          <p className="text-3xl font-bold text-teal-600">
            ${stampDuty.toFixed(0)}
          </p>
          <p className="text-xs text-gray-500 mt-2">Queensland 2026 rates</p>
        </div>
      </div>
    </div>
  );
}

function BorrowingPowerCalculator() {
  const [annualIncome, setAnnualIncome] = useState(120000);
  const [existingDebt, setExistingDebt] = useState(0);

  const borrowingPower = Math.max(0, annualIncome * 6 - existingDebt);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Borrowing Power</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="annual-income" className="block text-sm font-medium text-gray-700 mb-2">
            Combined Annual Income: ${annualIncome.toLocaleString()}
          </label>
          <input
            id="annual-income"
            type="range"
            min="40000"
            max="500000"
            step="5000"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="existing-debt" className="block text-sm font-medium text-gray-700 mb-2">
            Existing Debt: ${existingDebt.toLocaleString()}
          </label>
          <input
            id="existing-debt"
            type="range"
            min="0"
            max="300000"
            step="5000"
            value={existingDebt}
            onChange={(e) => setExistingDebt(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="rounded-lg bg-teal-50 p-4 border border-teal-200">
          <p className="text-sm text-gray-600">Estimated Borrowing Power:</p>
          <p className="text-3xl font-bold text-teal-600">
            ${borrowingPower.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-2">Based on 6x annual income</p>
        </div>
      </div>
    </div>
  );
}

function CostSplitCalculator() {
  const [totalCost, setTotalCost] = useState(100000);
  const [numOwners, setNumOwners] = useState(2);

  const costPerOwner = totalCost / numOwners;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Split</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="total-cost" className="block text-sm font-medium text-gray-700 mb-2">
            Total Cost: ${totalCost.toLocaleString()}
          </label>
          <input
            id="total-cost"
            type="number"
            value={totalCost}
            onChange={(e) => setTotalCost(Number(e.target.value))}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="num-owners" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Co-owners: {numOwners}
          </label>
          <select
            id="num-owners"
            value={numOwners}
            onChange={(e) => setNumOwners(Number(e.target.value))}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
          >
            {[2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} owners
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-lg bg-teal-50 p-4 border border-teal-200">
          <p className="text-sm text-gray-600">Cost Per Person:</p>
          <p className="text-3xl font-bold text-teal-600">
            ${costPerOwner.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-2">Equal split only</p>
        </div>
      </div>
    </div>
  );
}
