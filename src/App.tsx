import PricingCard from './components/PricingCard'

function App() {
  // Sample pricing data for demonstration
  const pricingPlans = [
    {
      plan: "Basic",
      price: "Free",
      features: [
        "10 GB Storage",
        "Email Support",
        "Basic Analytics",
        "1 User Account"
      ],
      isFeatured: false
    },
    {
      plan: "Pro",
      price: "$9.99/month",
      features: [
        "100 GB Storage",
        "Priority Support",
        "Advanced Analytics",
        "5 User Accounts",
        "Custom Integrations"
      ],
      isFeatured: true
    },
    {
      plan: "Enterprise",
      price: "$29.99/month",
      features: [
        "Unlimited Storage",
        "24/7 Phone Support",
        "Real-time Analytics",
        "Unlimited Users",
        "Custom Integrations",
        "Dedicated Account Manager",
        "SLA Guarantee"
      ],
      isFeatured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        {/* Responsive grid: stacks vertically on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.plan}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>

        {/* Testing section for responsiveness */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Responsive Design Test
          </h2>
          <p className="text-gray-600 mb-8">
            Resize your window to see responsive behavior: 
            Cards stack vertically on mobile (&lt; 640px) and display horizontally on desktop.
          </p>
          
          {/* Accessibility test section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Accessibility Features:
            </h3>
            <ul className="text-gray-600 text-left max-w-md mx-auto space-y-1">
              <li>• Keyboard navigation support (try tabbing through cards)</li>
              <li>• Focus rings for accessibility</li>
              <li>• Semantic HTML structure</li>
              <li>• ARIA labels for screen readers</li>
              <li>• Hover effects for desktop users</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
