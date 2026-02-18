import type React from "react";

interface props {
    name: string;
    description: string;
    icon: React.ReactNode;
}
const FeaturesCard = ({ name, description, icon }: props) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-2xl shadow-md mb-5 hover:shadow-xl  transition duration-300 ">

                <div className="bg-red-300 w-14 h-14 items-center justify-center flex rounded-xl mb-4 ">
                    {icon}
                </div>

                <div className="text-xl  font-semibold mb-3">
                    {name}
                </div>

                <div className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </div>

            </div>
        </div>
    )
}

export default FeaturesCard