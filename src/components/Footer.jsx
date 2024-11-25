import { FaFacebook, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className='bg-blue-900 text-white py-8'>
            <div className='container mx-auto px-4 pl-4'>

                <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start text-center'>
                    <div className='mb-6 lg:mb-0 lg:w-1/3'>
                        <h3 className='font-bold text-lg mb-2'> About Us</h3>
                        <p className='max-w-sm mx-auto'>Chacho pools provides reliable and professional pool cleaning maintenance and contruction services tailored to your needs.</p>
                    </div>

                    <div className='mb-6 lg:mb-0 lg:w-1/3'>
                        <h3 className='font-bold text-lg mb-2'>Follow Us</h3>
                        <div className='flex justify-center space-x-4'>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:text-blue-300' href="https://www.facebook.com/profile.php?id=61551358881264&ref=xav_ig_profile_web">
                                <FaFacebook className='inline-block' /> Facebook
                            </a>

                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:text-blue-300' href="https://www.instagram.com/chachospool/">
                                <FaInstagram className='inline-block' /> Instagram
                            </a>

                            <a
                            target="_blank"
                            rel="noopener noreferrer" 
                            className='hover:text-blue-300' href="https://www.tiktok.com/@chachospool">
                                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="currentColor" className="inline-block w-4 h-4">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                                    </g>
                                </svg>
                                TikTok
                            </a>
                        </div>

                    </div>

                    <div className='mb-6 lg:mb-0 lg:w-1/3'>
                        <h3 className='font-bold text-lg mb-2'>Contact Us</h3>
                        <ul className='space-y-2'>
                            <li>Email: <a href="mailto:chachospool@gmail.com" className="hover:underline">chachospool@gmail.com</a></li>
                            <li>Phone: <a href="tel:+14078183358" className="hover:underline">(407) 818-3358</a></li>
                            <li>Location: Davenport, Florida</li>
                        </ul>
                    </div>

                </div>

                <hr className='my-6 border-blue-700' />

                <p className='text-center text-sm'>
                    © {new Date().getFullYear()} Chachos Pool. All rights reserved.
                </p>

            </div>
        </footer>
    )
}