import { BarChart, DollarSign, Package, TrendingUp } from "lucide-react"
import FeaturesCard from "../utils/faetures_card"

const Features = () => {
    const items = [
        {
            name: "Sales Tracking",
            description :"Record daily sales, View total sales instantly, Analyze trends",
            icon: <TrendingUp size={28} />
            
        },

        {
            name: "Expense Management",
            description :"Track business expenses, Categorize spending, Know your real profit",
            icon: <DollarSign size={28} />
            
        },

        {
            name:"Inventory Control",
            description :"Monitor stock levels, Avoid running out of products, Get alerts",
            icon: <Package size={28}/>
        },
        {
            name:"Profit Reports",
            description: "Automatic profit calculation, Daily / Weekly / Monthly reports",
            icon: <BarChart size={28}/>
            
        }
    ];

  return (
    <div id="features" className="min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-center">Control Your Business And Track Sales Easily</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {items.map((item)=>(
                    <div key={item.name}>
                        <FeaturesCard 
                        name={item.name}
                        description={item.description}
                        icon={item.icon}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features