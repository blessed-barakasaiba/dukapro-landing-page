import Hero from "./components/hero"
import Navbar from "./components/navbar"
import bgImage from "./assets/images/bg.avif";
import HowItWork from "./components/how_it_work";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Testimonies from "./components/testimonies";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="">

        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>

          <div className="bg-black/60">
            <Navbar />

            <Hero />
          </div>
        </div>

        <Features />
        <HowItWork />
        <Pricing />
        <Testimonies />
        <Footer />
    </div>

  )
}

export default App