import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import ContactForm from "../components/ContactForm";

export default function Contact () {
    return (
        <>
        <section className="bg-[url('https://fakeimg.pl/1200x400')] bg-cover bg-center bg-fixed h-[40vh] flex items-center justify-center">
            <div className="text-white text-center px-6 lg:px-40 p-4">
                <h1 className="text-4xl max-w-lg lg:text-5xl font-bold">Reach Out To Get Your Pool Rocked Or some catchy phrase</h1>
            </div>
        </section>

        <section  className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col gap-8">

                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center">Get in Touch</h2>

                <p className="text-center  text-gray-700 text-lg">We’d love to hear from you! Reach out with any questions or to schedule a service.</p>

                <div className="flex flex-col lg:flex-row text-lg">

                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>

                            <p className="text-gray-600 text-xl flex items-center mb-6">
                                <FaEnvelope className="text-blue-600 mr-3 text-2xl "/>
                                <a href="mailto:chachospool@gmail.com" className="text-blue hover:underline">chachospool@gmail.com</a>
                            </p>

                            <p className="text-gray-600 text-xl flex items-center mb-6">
                                <FaPhoneAlt className="text-blue-600 mr-3 text-2xl "/>
                                <a href="tel:+14078183358" className="text-blue hover:underline">(407) 818-3358</a>
                            </p>

                            <p className="text-gray-600 text-xl flex items-center mb-6">
                                <span className="text-blue-600 mr-3 text-2xl ">📍</span>
                                Davenport, Forida
                            </p>

                        </div>

                        <div className="my-4">

                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>

                            <div className="flex flex-wrap gap-4">

                                <a href="https://www.facebook.com/profile.php?id=61551358881264&ref=xav_ig_profile_web"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-700 hover:underline flex items-center text-xl"
                                >
                                    <FaFacebook className="mr-2 text-2xl"/> Facebook
                                </a>

                                <a href="https://www.instagram.com/chachospool/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 hover:underline flex items-center text-xl"
                                >
                                    <FaInstagram className="mr-2 text-2xl"/> Instagram
                                </a>

                                <a href="https://www.tiktok.com/@chachospool"
                                target="_blank"
                                rel="noreferrer"
                                className="text-black hover:underline flex items-center text-xl"
                                >
                                    <div className="flex items-center">
                                        <svg 
                                        fill="currentCurrent"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                        stroke="currentColor"
                                        className="inline-block w-6 h-6 mr-2">
                                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                                        </svg>
                                        TikTok
                                    </div>
                                </a>

                            </div>

                        </div>

                    </div> 

                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}