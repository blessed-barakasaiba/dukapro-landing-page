interface props {
    number: string,
    title: string,
    description: string
}

const HowItWorkUtils = ({ number, title, description }: props) => {
    return (
        <div>
            <div className="max-w-3xl bg-white rounded-3xl p-6 mb-5 shadow-md hover:shadow-xl transition duration-300">
                <div className="flex gap-5 items-start">
                    <div className="bg-red-500 text-white rounded-xl px-4 py-3 font-bold text-lg">
                        {number}
                    </div>

                    <div className="text-left" >
                        <h2 className="text-xl font-semibold mb-2">
                            {title}
                        </h2>

                        <p className="text-gray-600" >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorkUtils;