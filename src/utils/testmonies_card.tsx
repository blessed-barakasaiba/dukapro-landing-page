interface props {
    name: string;
    role: string;
    avatar: string;
    message: string;
}

const TestimoniesCard = ({ name, role, avatar, message }: props) => {
    return (
        <div className="relative bg-white border mb-12 rounded-lg shadow-lg p-6 pt-16 ">
            <div className="flex flex-col justify-center items-center">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full  overflow-hidden border-4 border-white shadow-lg">
                    <img src={avatar} alt="" className="h-full w-full object-cover rounded-full" />
                </div>

                <div className="font-bold text-2xl mb-1">
                    {name}
                </div>

                <div className="text-gray-600 mb-3 ">
                    {role}
                </div>

                <div className="text-md text-center">
                    {message}
                </div>
            </div>

        </div>
    )
}

export default TestimoniesCard