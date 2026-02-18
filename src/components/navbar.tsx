import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled]= useState(false);

    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 250){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return ()=> window.removeEventListener("handle", handleScroll)
      })
    return (
        <nav className={`w-full fixed shadow-md top-0 z-50 ${scrolled ? "bg-white py-4 shadow-md": "bg-transparent py-z"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4  flex justify-between items-center">
                <div>
                    <Link to={"/"} className="font-bold text-2xl text-red-500 ">DukaPro</Link>
                </div>

                {/* DESKTOP NAVBAR*/}
                <div className="hidden md:flex gap-8 justify-center">
                    <a href="#home" className="text-white hover:text-red-500 font-medium transition">
                        Home
                    </a>

                    <a href="#features" className="text-white hover:text-red-500 font-medium transition">
                        Features
                    </a>

                    <a href="#pricing" className="text-white hover:text-red-500 font-medium transition">
                        Pricing
                    </a>

                    <a href="#testimonies" className="text-white hover:text-red-500 font-medium transition">
                        Testimonies
                    </a>

                    <a href="#contacts" className="text-white hover:text-red-500 font-medium transition">
                        Contacts
                    </a>
                </div>


                <div className="hidden md:block">
                    <Link to={"/"} className="px-5 py-2 bg-red-500  text-white  hover:bg-red-600 border rounded-md transition">Get App</Link>
                </div>


                {/* MOBILE NAVBAR*/}

                <div className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
                    <a className="block text-gray-700" href="#home">Home</a>
                    <a href="#services" className="block text-gray-700">Services</a>
                    <a href="#feature" className="block text-gray-700">Features</a>
                    <a href="#testimonies" className="text-gray-700 block">
                        Testimonies
                    </a>
                    <a href="#contacts" className="block text-gray-700">Contacts</a>
                    <a href="/" className="block py-2 rounded-lg text-white text-center bg-red-500">Get App</a>
                </div>
            )}



        </nav>

    )
}

export default Navbar