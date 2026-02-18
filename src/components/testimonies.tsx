import gracious from '../assets/images/gracious.jpg';
import bg from '../assets/images/bg.avif';
import computer from '../assets/images/computer.jpeg';
import TestimoniesCard from '../utils/testmonies_card';

const Testimonies = () => {

    const feedbacks = [
        {
            name: "John Mwangi",
            role: "Small Business Owner",
            message: "DukaPro has transformed the way I track sales and expenses. Highly recommended!",
            avatar: gracious
        },
        {
            name: "Aisha Suleiman",
            role: "Shop Manager",
            message: "I love how easy it is to manage inventory and monitor profits. DukaPro is amazing!",
            avatar: bg
        },
        {
            name: "Peter Kamau",
            role: "Entrepreneur",
            message: "Finally, a simple app to manage my daily sales and expenses without stress.",
            avatar:computer
        }
    ]
    return (
        <div className="min-h-[600px] py-20" id='testimonies'>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-3 ">What Ours User Say</h2>
                    <p className="text-lg"> See how DukaPro is helping businesses grow and manage efficiently.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {feedbacks.map((feedback)=>(
                        <TestimoniesCard  key={feedback.name} name={feedback.name} avatar={feedback.avatar} message={feedback.message} role={feedback.role}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonies