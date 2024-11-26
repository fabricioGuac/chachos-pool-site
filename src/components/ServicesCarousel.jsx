
export default function ServicesCarousel({ services }) {
    return (
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {services.map((service) => (
                <div key={service.title} className="bg-white p-6 shadow-md rounded-lg">
                    <img
                        src={service.imgUrl}
                        alt={service.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
        </div>
    )
}