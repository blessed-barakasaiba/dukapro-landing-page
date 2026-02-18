import HowItWorkUtils from "../utils/how_it_work_utils"

const HowItWork = () => {
    const steps = [

        {
            number: "01",
            title: "Download DukaPro",
            description: "Install the app from Play Store or App Store"
        },
        {
            number: "02",
            title: "Create Account",
            description: "Sign up and setup your business profile"
        },
        {
            number: "03",
            title: "Add Products",
            description: "Insert products and set prices"
        },
        {
            number: "04",
            title: "Track Sales & Profit",
            description: "Monitor daily sales and expenses easily"
        }

    ]
    return (
        <div className="min-h-screen py-5">
            <div className='max-w-7xl px-4 md:px-6 lg:px-8'>
                <div>
                    <div className="mb-3 text-center">
                        <h2 className="text-center  text-3xl  md:text-5xl font-bold mb-5">How it works ?</h2>
                        <p className="text-lg font-semibold">Start using DukaPro and monitor sales, expenses, and profits </p>
                    </div>

                    <div className="">
                        {steps.map((step, index) => (
                            <div className={`w-full md:flex md:flex-row items-center  ${index %3 === 0 ? "md:justify-center" : index %3 ===1 ? "md:justify-start" : "md:justify-end"}`}>
                                <HowItWorkUtils
                                    key={index}
                                    number={step.number}
                                    description={step.description}
                                    title={step.title}

                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HowItWork