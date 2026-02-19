import { Facebook, Twitter } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mb-10 ' id='contacts'>

            <div className='max-w-7xl m-auto px-4 md:px-6 lg:px-8'>

                <div className='flex flex-row justify-evenly'>
                    <Link to={"/"}>
                        <Facebook size={32} className='text-blue-600'/>
                    </Link>
                    <Link to={"/"}>
                        <FaInstagram className='text-purple-500' size={32}/>
                    </Link>
                    <Link to={"/"}>
                        <Twitter  size={32} className='text-blue-800'/>
                    </Link>
                    <a href="https://wa.me/255652298284" target='_blank' rel="noopener noreferrer">
                    <FaWhatsapp size={32} className='text-green-500'/>
                    </a>
                </div>

                <div className='text-center mt-5 font-bold text-2xl'>
                    <h2>&copy; DukaPro </h2>
                </div>
            </div>
        </div>
    )
}

export default Footer