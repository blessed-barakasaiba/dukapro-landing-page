const handleDownLoad = () => {
  const link = document.createElement("a")
  link.href = `${import.meta.env.BASE_URL}form_six.pdf`
  link.download = "FormSix.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


const Hero = () => {
    return (
        <div id="home" className="text-white flex items-center justify-center mb-8 min-h-[500px]">

            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl  font-bold mb-6 leading-tight">
                    Grow Smatter. Sell Better. Manage Faster
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Monitor Sales, track expenses, manage inventory, and grow your profit all in DukaPro
                </p>

                <button onClick={handleDownLoad} className="px-8 py-3 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition mb-8">DownLoad App</button>

            </div>

        </div>
    )
}

export default Hero