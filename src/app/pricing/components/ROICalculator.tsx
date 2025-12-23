'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSalary, setCurrentSalary] = useState(65000);
  const [targetSalary, setTargetSalary] = useState(85000);
  const [planCost, setPlanCost] = useState(299);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`bg-muted py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-brand-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-text-secondary text-lg">
                Loading calculator...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const salaryIncrease = targetSalary - currentSalary;
  const roi = ((salaryIncrease - planCost) / planCost) * 100;
  const monthsToBreakEven = Math.ceil(planCost / (salaryIncrease / 12));

  return (
    <section className={`bg-muted py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-brand-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-text-secondary text-lg">
              See how quickly your investment pays for itself
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Current Annual Salary
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-semibold">
                  $
                </span>
                <input
                  type="range"
                  min="30000"
                  max="150000"
                  step="5000"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full mb-2"
                />
                <div className="bg-muted border border-border rounded-lg px-4 py-3 pl-8 text-lg font-semibold text-text-primary">
                  {currentSalary.toLocaleString('en-US')}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Target Annual Salary
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-semibold">
                  $
                </span>
                <input
                  type="range"
                  min="40000"
                  max="200000"
                  step="5000"
                  value={targetSalary}
                  onChange={(e) => setTargetSalary(Number(e.target.value))}
                  className="w-full mb-2"
                />
                <div className="bg-muted border border-border rounded-lg px-4 py-3 pl-8 text-lg font-semibold text-text-primary">
                  {targetSalary.toLocaleString('en-US')}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-success/10 to-accent/10 rounded-xl p-8 border-2 border-success/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Icon name="ArrowTrendingUpIcon" size={32} variant="solid" className="text-success" />
                </div>
                <p className="text-sm text-text-secondary mb-1">Salary Increase</p>
                <p className="text-3xl font-bold text-success">
                  ${salaryIncrease.toLocaleString('en-US')}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Icon name="ChartBarIcon" size={32} variant="solid" className="text-brand-primary" />
                </div>
                <p className="text-sm text-text-secondary mb-1">Return on Investment</p>
                <p className="text-3xl font-bold text-brand-primary">
                  {roi.toFixed(0)}%
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Icon name="ClockIcon" size={32} variant="solid" className="text-brand-secondary" />
                </div>
                <p className="text-sm text-text-secondary mb-1">Break-Even Time</p>
                <p className="text-3xl font-bold text-brand-secondary">
                  {monthsToBreakEven} {monthsToBreakEven === 1 ? 'month' : 'months'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-success/20 text-center">
              <p className="text-text-secondary">
                Investment: <span className="font-semibold text-text-primary">${planCost}</span> • 
                First Year Gain: <span className="font-semibold text-success">${(salaryIncrease - planCost).toLocaleString('en-US')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;