import { Check } from "lucide-react"

interface props {
    name: string;
    description:string;
    icon: React.ReactNode;
    price: string;
    comment: string;
    button_text:string;
    features: string[];
}

const PricingCard = ({ name, description, icon, price, comment, features, button_text } : props) => {
    return (
        <div>
            <div className='bg-white rounded-2xl p-6 border shadow-md mb-5 hover:shadow-lg'>
                <div >
                    <div className="h-10 w-10 flex bg-red-300 items-center justify-center rounded-lg mb-3 ">
                        {icon}
                    </div>
                    <div className="font-semibold text-xl ">
                        {name}
                    </div>
                    <div>
                        {description}
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold text-2xl">{price}</h3>
                        <p className="">{comment}</p>
                    </div>

                    <ul className="mb-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex gap-3 items-center mb-2">
                                <div className="bg-blue-600 rounded-full h-5 w-5 flex justify-center items-center">
                                    <Check size={15} className="text-white" />
                                </div>
                                {feature}

                            </li>
                        ))}

                    </ul>

                    <button className="px-4 py-3 bg-red-300 w-full rounded-lg text-white font-semibold hover:bg-red-500 transition duration-300">{button_text}</button>



                </div>
            </div>
        </div>
    )
}

export default PricingCard