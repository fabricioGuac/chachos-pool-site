import ReviewCarousel from "../components/ReviewCarousel";

export default function Testimonials() {

    // Array of reviews
    const reviews = [
        { id: 1, name: "Jose Manuel Mata Uban", review: "Best service in town!", rating: 5 },
        { id: 2, name: "Nancy Negron", review: "They are great and very respectful. Great job good prices.", rating: 5 },
        { id: 3, name: "Jorge Perez", review: "Perfect and fast..thanks you", rating: 5 },
        { id: 4, name: "De los Angeles Flores", review: "Excelente servicio, thanks guys 🙏 los recomiendo 💯", rating: 5 },
        { id: 5, name: "Maria Lopez", review: "Great service, fast and reliable.", rating: 5 }, // Placeholder
        { id: 6, name: "Carlos Gutierrez", review: "Really happy with the service. They exceeded my expectations.", rating: 5 } // Placeholder
    ];

    return (
        // Embed a widged or use reviews chosen by me?? I will stick to the one we made
        <>
            <section className="bg-[url('https://fakeimg.pl/1200x400')] bg-cover bg-center bg-fixed h-[40vh] flex items-center justify-center">
                <div className="text-white text-center px-6 lg-px-40">
                    <h1 className="text-4xl max-w-lg lg:text-5xl font-bold">Client Satisfaction is Our #1 Priority</h1>
                    <p className="mt-4 text-lg">
                    See what our customers are saying about our pool care services!
                    </p>
                </div>
            </section>

            <section className="py-16 bg-sky-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white">What Our Customers Are Saying</h2>
                    <ReviewCarousel reviews={reviews} />
                </div>
            </section>

            <section className="py-8 bg-cyan-900 bg-tile-pattern bg-fixed">
                <div className="container mx-auto text-center text-white">
                    <p className="text-lg mb-4">
                    Want to see more of our happy customers? Check out our reviews on Google!
                    </p>
                    <a
                        href="https://www.google.com/maps/place/CHACHOS+POOL+LLC/@28.3372691,-81.6707798,17z/data=!4m8!3m7!1s0x88dd7d86d211eee5:0x3bcef57413186cc!8m2!3d28.3372691!4d-81.6682049!9m1!1b1!16s%2Fg%2F11vwxyflbd?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-orange-700 text-white py-3 px-6 rounded-lg hover:bg-orange-800 transition duration-300">
                        Read More Reviews
                    </a>
                </div>
            </section>
        </>
    )
}