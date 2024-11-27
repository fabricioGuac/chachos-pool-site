
export default function ReviewCarousel({ reviews }) {
    return (
        <div className="flex justify-center items-center ">
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 shadow-md rounded-lg">
                        <div className="flex justify-center mb-4">
                            {Array(review.rating)
                                .fill("")
                                .map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path d="M12 .587l3.668 7.568L24 9.747l-6 5.851L19.336 24 12 19.931 4.664 24 6 15.598 0 9.747l8.332-1.592L12 .587z" />
                                    </svg>
                                ))}
                        </div>
                        <p className="italic text-gray-600 mb-4">"{review.review}"</p>
                        <p className="font-bold text-gray-700">{review.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}