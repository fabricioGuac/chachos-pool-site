import { useRef } from "react";
import { Link } from "react-router-dom";
import useIsVisible from "../hooks/useIsVisible";

export default function Services() {

    // Creates refs for the corresponding elements
    const cleanRef = useRef();
    const suppliesRef = useRef();
    const mantainanceRef = useRef();

    // Uses the custom hook to check if the element is visible in the viewport
    const isCleanVisible = useIsVisible(cleanRef);
    const isSuppliesVisible = useIsVisible(suppliesRef);
    const isMantainanceVisible = useIsVisible(mantainanceRef);

    return (
        <>
            <section className="bg-[url('https://fakeimg.pl/1200x400')] bg-cover bg-center bg-fixed h-[80vh] flex items-center justify-center">
                <div className="text-white text-center px-6 lg:px-40">
                    <h1 className="text-4xl max-w-lg lg:text-5xl font-bold">
                        Our Services: Tailored for Your Pool's Needs
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-white overflow-hidden">
                <div
                    ref={cleanRef}
                    className={`transition-all duration-700 ease-in-out ${isCleanVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
                    >
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">

                        <div className="md:w-1/2 text-center md:text-left px-6 lg:ml-40">
                            <h2 className="text-3xl font-bold mb-8">Pool Cleaning</h2>
                            <ul className="list-disc list-inside space-y-4 text-gray-600">
                                <li><span className="font-bold text-gray-800">Debris Removal:</span> Thorough skimming to keep your pool spotless.</li>
                                <li><span className="font-bold text-gray-800">Vacuuming:</span> Removes dirt and prevent algae buildup.</li>
                                <li><span className="font-bold text-gray-800">Filter Mantainance:</span> Keeps water circulation optimal and clean.</li>
                                <li><span className="font-bold text-gray-800">Chemical Balancing:</span> Ensures water safety and clarity.</li>
                            </ul>
                            <Link
                                to='/contact'
                                className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300">
                                Contact Us
                            </Link>
                        </div>

                        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                            <img src="https://fakeimg.pl/400x400/?text=Cleaning" alt="Why Choose Us" className="w-full max-w-sm rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-slate-100 overflow-hidden">
                <div
                    ref={suppliesRef}
                    
                    className={`transition-all duration-700 ease-in-out ${isSuppliesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"}`}>
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">

                        
                    <div className="md:w-1/2 flex justify-center mb-8 md:mt-0">
                            <img src="https://fakeimg.pl/400x400/?text=Supplies" alt="Why Choose Us" className="w-full max-w-sm rounded-lg shadow-md" />
                        </div>

                        <div className="md:w-1/2 text-center md:text-left px-6">
                            <h2 className="text-3xl font-bold mb-8">Pool Supplies</h2>
                            <ul className="list-disc list-inside space-y-4 text-gray-600">
                                <li><span className="font-bold text-gray-800">High-Quality Chemicals:</span> For safe and clean water.</li>
                                <li><span className="font-bold text-gray-800">Mantainance Tools:</span> Brushes, nets, and more.</li>
                                <li><span className="font-bold text-gray-800">Pool Accessories:</span> Enhance your pool experience.</li>
                                <li><span className="font-bold text-gray-800">Replacement Parts:</span> Keep your pool running smoothly.</li>
                            </ul>
                            <Link
                                to='/contact'
                                className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white overflow-hidden">
                <div
                    ref={mantainanceRef}
                    className={`transition-all ease-in-out duration-700 ${isMantainanceVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}>
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">

                        <div className="md:w-1/2 text-center md:text-left px-6 lg:ml-40">
                            <h2 className="text-3xl font-bold mb-8">Pool Mantainance</h2>
                            <ul className="list-disc list-inside space-y-4 text-gray-600">
                                <li><span className="font-bold text-gray-800">Regular Inspections:</span> Ensure equipment runs efficiently.</li>
                                <li><span className="font-bold text-gray-800">Preventative Care:</span> Avoid costly repairs with routine checks.</li>
                                <li><span className="font-bold text-gray-800">Seasonal Adjustments:</span> Kepp your pool ready for any season.</li>
                                <li><span className="font-bold text-gray-800">Detailed Reports:</span> Knoww your pool's condition and improvements.</li>
                            </ul>
                            <Link
                                to='/contact'
                                className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300">
                                Contact Us
                            </Link>
                        </div>

                        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                            <img src="https://fakeimg.pl/400x400/?text=Repairs" alt="Why Choose Us" className="w-full max-w-sm rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}