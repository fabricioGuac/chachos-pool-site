import { useRef } from "react";
import { Link } from "react-router-dom";
import ReviewCarousel from "../components/ReviewCarousel";
import CardGrid from "../components/CardGrid";
import useIsVisible from "../hooks/useIsVisible";

export default function Homepage() {

    // Array of real reviews
    const reviews = [
        { id: 1, name: "Jose Manuel Mata Uban", review: "Best service in town!", rating: 5 },
        { id: 2, name: "Nancy Negron", review: "They are great and very respectful. Great job good prices.", rating: 5 },
        { id: 3, name: "Jorge Perez", review: "Perfect and fast..thanks you", rating: 5 },
    ];
    // Array of services TODO:Replace the images with real ones
    const services = [
                {title:'Pool Cleaning' , imgUrl:'https://fakeimg.pl/300x200' , description:'Sparkling clean pools with our professional cleaning services.'},
                {title:"Pool Maintenance" , imgUrl:'https://fakeimg.pl/300x200' , description:'Ensure your pool stays in top condition year-round.'},
                {title:'Pool Construction' , imgUrl:'https://fakeimg.pl/300x200' , description:'Build the pool of your dreams with our expert team.'},
            ];

            // Creates refs for the corresponding elements
            const servicesRef = useRef();
            const testimonialsRef = useRef();
            const contactRef = useRef();

            // Uses the custom hook to check if the element is visible in the viewport
            const areServicesVisible = useIsVisible(servicesRef);
            const areTestimonialsVisible = useIsVisible(testimonialsRef);
            const isContactVisible = useIsVisible(contactRef);



    return (
        <>
            <section className="bg-[url('https://fakeimg.pl/700x400')] bg-cover bg-fixed bg-center h-[80vh] flex items-center">
                <div className="text-white p-6 lg:p-40 ">
                    <h1 className="text-4xl lg:text-5xl font-bold max-w-lg leading-tight">Transform Your Pool with Chachos Pool Services</h1>
                    <p className="mt-6 max-w-lg">Reliable pool cleaning, maintenance, and construction services tailored to your needs.</p>
                    <Link 
                    to='/contact'
                    className="mt-6 inline-block px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-700 transition duration-300">
                    Contact Us Today
                    </Link>
                </div>
            </section>

            <section className="bg-slate-100 py-32">
                <div ref={servicesRef}
                className={`transition-opacity ease-in duration-700 ${areServicesVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Our services</h2>
                        <CardGrid items={services} />
                        <Link 
                        to='/services'
                        className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300 ">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-cyan-900 bg-tile-pattern bg-fixed py-24">
                <div ref={testimonialsRef}
                className={`transition-opacity ease-in duration-700 ${areTestimonialsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-8">What our clients say</h2>
                        <ReviewCarousel reviews={reviews} />
                        <Link
                        to='/testimonials'
                        className="mt-6 inline-block px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-700 transition duration-300">
                        See More Testimonials
                        </Link>
                    </div>
                </div>
            </section>


            <section className="bg-slate-100 p-16">
                <div
                ref={contactRef}
                className={`transition-opacity ease-in duration-700 ${isContactVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Dive In?</h2>
                        <p className="mb-6 text-gray-600">Get in touch with us to schedule your pool cleaning or consultation today!</p>
                        <Link
                        to='/contact'
                        className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300 ">
                        Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}