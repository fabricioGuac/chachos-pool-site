import { useRef } from "react";
import { Link } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import useIsVisible from "../hooks/useIsVisible";

export default function AboutUs() {
    // Array of company values TODO: Replace images and revise values
    const values = [
        {
            title: "Professionalism",
            description:
                "We hold ourselves to the highest standards, ensuring every job is done right.",
            imgUrl: "https://fakeimg.pl/300x200/?text=Professionalism",
        },
        {
            title: "Reliability",
            description:
                "Our team is always there when you need us, providing dependable service.",
            imgUrl: "https://fakeimg.pl/300x200/?text=Reliability",
        },
        {
            title: "Customer Satisfaction",
            description:
                "We strive to exceed expectations and build long-lasting client relationships.",
            imgUrl: "https://fakeimg.pl/300x200/?text=Satisfaction",
        },
    ];
    // Array of company team members TODO: Verify information and update images
    const team = [
        { name: "Chacho algo", role: "Dueño?", pictureURL: "nose" },
        { name: "Gustavo algo", role: "Pool technitian?", pictureURL: "nose" },
        { name: "Jose Guacuto", role: "Pool tecnitian", pictureURL: "nose" },
        { name: "Jose Nose", role: "Pool tecnitian", pictureURL: "nose" },
    ];

    // Creates refs for the corresponding elements
    const storyRef = useRef();
    const valuesRef = useRef();
    const whyUsRef = useRef();
    const teamRef = useRef();

    // Uses the custom hook to check if the element is visible in the viewport
    const isStoryVisible = useIsVisible(storyRef);
    const areValuesVisible = useIsVisible(valuesRef);
    const isWhyUsVisible = useIsVisible(whyUsRef);
    const isTeamVisible = useIsVisible(teamRef);

    return (
        <>

            <section className="bg-[url('https://fakeimg.pl/1200x400')] bg-cover bg-center bg-fixed h-[80vh] flex items-center justify-center">
                <div className="text-white text-center px-6 lg:px-40">
                    <h1 className="text-4xl max-w-lg lg:text-5xl font-bold">
                        Get to know the history and the team behind your sparkling pools
                    </h1>
                </div>
            </section>


            <section className="py-16 bg-white lg:py-24">
                <div
                    ref={storyRef}
                    className={`transition-opacity ease-in duration-700 ${isStoryVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque euismod interdum metus, nec tempor lacus auctor at.
                            We started with a vision to provide top-notch pool services
                            and have grown into a reliable partner for our community.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-sky-900">
                <div
                    ref={valuesRef}
                    className={`transition-opacity ease-in duration-700 ${areValuesVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl text-white font-bold mb-8">Our core values</h2>
                        <CardGrid items={values} />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div
                    ref={whyUsRef}
                    className={`transition-opacity ease-in duration-700 ${isWhyUsVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">

                        <div className="md:w-1/2 text-center md:text-left px-6">
                            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
                            <ul className="list-disc list-inside space-y-4 text-gray-600">
                                <li><span className="font-bold text-gray-800">A good reason:</span> blah blah blah blah blah trust me bro.</li>
                                <li><span className="font-bold text-gray-800">Another really good reason:</span> I am no good as a salesman.</li>
                                <li><span className="font-bold text-gray-800">Customer-Centered:</span> Your satisfaction is our priority, and we tailor our services to your unique needs.</li>
                                <li><span className="font-bold text-gray-800">Certified Professionals</span> Our team is certified in the latest pool care techniques.</li>
                            </ul>
                            <Link
                                to='/contact'
                                className="mt-8 inline-block px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition duration-300">
                                Contact Us
                            </Link>
                        </div>

                        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                            <img src="https://fakeimg.pl/400x400/?text=Why+Us" alt="Why Choose Us" className="w-full max-w-sm rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-100 ">
                <div
                    ref={teamRef}
                    className={`transition-opacity ease-in duration-700 ${isTeamVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-8">Meet The Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={member.name + index} className="text-center">
                                    <img
                                        // src={member.pictureURL} 
                                        src={`https://fakeimg.pl/150x150/?text=${member.name}`}
                                        alt={member.name}
                                        className="mx-auto rounded-full mb-4"
                                    />
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}