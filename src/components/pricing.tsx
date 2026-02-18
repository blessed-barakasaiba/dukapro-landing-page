import { Medal, ThumbsUp } from "lucide-react"
import PricingCard from "../utils/pricing_card"

const Pricing = () => {
    const prices = [
        {
            icon: <ThumbsUp size={28} />,
            name: "Basic",
            description: "Perfect for New Users to manage their business an explore core features",
            price: "Free ",
            comment: " for Lifetime You can upgrade at anytime",
            features: [
                "Record daily sales",
                "View total sales instantly",
                "Track business expenses",
                "Know your real profit",
                "Automatic profit calculation",
            ],
            button_text: "Try For free"
        },

        {
            icon: <Medal size={28} />,
            name: "Premium",
            description: "Perfect for New Users to manage their business an explore core features",
            price: "79,999 Tsh ",
            comment: "for Lifetime You can upgrade at anytime",
            features: [
                "Record daily sales",
                "View total sales instantly",
                "Analyze trends",
                "Track business expenses",
                "Categorize spending",
                "Know your real profit",
                "Monitor stock levels",
                "Avoid running out of products",
                "Get alerts",
                "Automatic profit calculation",
                "Daily / Weekly / Monthly reports"
            ],
            button_text: "Get Started"
        },


    ]
    return (
        <div className="min-h-[600px]" id="pricing">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-5">
                    <h2 className="text-3xl md:text-5xl font-semibold  text-center mb-5">Our Pricing</h2>
                    <p className="">Start your 14 free trial today no-credit card needed. Our affordable plans cater for everyone from solo to large teams. Experience the flexibility and cancel anytime</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {prices.map((price) => (
                        <PricingCard key={price.name} name={price.name} description={price.description}
                            icon={price.icon}
                            price={price.price}
                            comment={price.comment}
                            features={price.features}
                            button_text={price.button_text}
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Pricing