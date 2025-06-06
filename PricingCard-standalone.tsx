import React from 'react';

// TypeScript interface for PricingCard props
interface PricingCardProps {
  plan: string;          // Required: plan name (e.g., "Basic", "Pro", "Enterprise")
  price: string;         // Required: price display (e.g., "$9.99/month", "Free")
  features: string[];    // Required: list of features included in the plan
  isFeatured?: boolean;  // Optional: flag to highlight this card as "Most Popular"
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features, 
  isFeatured = false 
}) => {
  return (
    <div
      className={`
        relative rounded-lg border p-6 shadow-sm transition-all duration-200
        w-full max-w-sm mx-auto
        sm:max-w-none sm:w-80
        ${isFeatured 
          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-20 scale-105' 
          : 'border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1'
        }
        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
      tabIndex={0}
      role="article"
      aria-label={`${plan} pricing plan${isFeatured ? ' - Most Popular' : ''}`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {plan}
        </h2>
        <div className="text-3xl font-bold text-gray-900">
          {price}
        </div>
      </div>

      {/* Features list */}
      <ul className="space-y-3 mb-8" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`
          w-full py-3 px-4 rounded-md font-medium transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isFeatured
            ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
            : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500'
          }
        `}
        aria-label={`Choose ${plan} plan`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;

/* 
USAGE EXAMPLE:

import PricingCard from './PricingCard';

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <PricingCard
        plan="Basic"
        price="Free"
        features={["10 GB Storage", "Email Support", "Basic Analytics"]}
        isFeatured={false}
      />
      <PricingCard
        plan="Pro"
        price="$9.99/month"
        features={["100 GB Storage", "Priority Support", "Advanced Analytics"]}
        isFeatured={true}
      />
      <PricingCard
        plan="Enterprise"
        price="$29.99/month"
        features={["Unlimited Storage", "24/7 Support", "Real-time Analytics"]}
        isFeatured={false}
      />
    </div>
  );
};

REQUIREMENTS MET:
✅ TypeScript interface with exact props specified
✅ Responsive design (stacks vertically < 640px)
✅ Desktop hover elevation effects
✅ Keyboard focus accessibility with focus rings
✅ TailwindCSS-only styling (no inline styles)
✅ Optional isFeatured prop for highlighting

TAILWIND CSS CLASSES USED:
- Responsive: w-full, max-w-sm, mx-auto, sm:max-w-none, sm:w-80
- Layout: relative, rounded-lg, border, p-6, shadow-sm
- Transitions: transition-all, duration-200
- Hover: hover:shadow-lg, hover:-translate-y-1
- Focus: focus-within:ring-2, focus:outline-none, focus:ring-2
- Colors: border-blue-500, bg-blue-50, ring-blue-500, etc.
- Typography: text-xl, font-semibold, text-gray-900, etc.
- Spacing: mb-6, space-y-3, mb-8, etc.
*/ 