import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                What people are saying
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((test, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral-900 rounded-md p-6 text-sm border border-neutral-800 font-thin">
                            <p>{test.text}</p>
                            <div className="flex items-start mt-8">
                                <img src={test.image} alt={test.name} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" />
                                <div className="ml-4">
                                    <h6>{test.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{test.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials