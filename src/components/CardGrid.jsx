
export default function CardGrid({ items }) {
    return (
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {items.map((item) => (
                <div key={item.title} className="bg-white p-6 shadow-md rounded-lg">
                    <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    )
}