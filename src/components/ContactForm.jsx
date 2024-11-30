import { useState } from "react";
// import emailjs from "emailjs-com";

export default function ContactForm() {
    // State variable to keep track of the form
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        address: "",
        phone: "",
    });

    // State variable to keep track of the form errors
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
        address: "",
        phone: "",
    });

    // State variable to keep track of the sumbition status
    const [submitMessage, setSubmitMessage] = useState({
        errorMessage: "",
        successMessage: ""
    });


    // Function to update the input fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    // Function to ensure the fields have the propper information
    const handleValidation = (e) => {
        // Deconstruct the event target
        const { id, value } = e.target;
        // Initializes the error message string
        let error = "";

        // Checks if the field has content
        if (!value.trim()) {
            error = `${id} is required`;
            // Checks if the email is valid
        } else if (id === 'email' && !/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            error = "Invalid email address";
            // Checks if the phone number is valid
        } else if (id === 'phone' && !/^(\d{3}[-.\s]?){2}\d{4}$/.test(value)) {
            error = "Phone number must be in a valid format (e.g., 123-456-7890)."
        }

        // Sets the error for the current field
        setErrors({ ...errors, [id]: error });
    }

    // Function to handle the form submition
    const handleSubmit = async (e) => {
        // Prevents default form submition behavior 
        e.preventDefault();

        // Clear any previous messages before submission
        setSubmitMessage({ errorMessage: "", successMessage: "" });

        // Double checks the form to ensure the last field is valid
        Object.keys(form).forEach((field) => {
            handleValidation({ target: { id: field, value: form[field] } });
        });

        // If any error exists, prevent form submission
        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            // Sends the email using emailjs
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Chachos Pool",
                    to_email: "chachospool@gmail.com",
                    message: form.message,
                    address: form.address,
                    phone: form.phone,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            // Clears the form
            setForm({ name: "", email: "", message: "", address: "", phone: "" });
            // Sets the message to indicate success
            setSubmitMessage({ successMessage: "Your message has been sent successfully!" });
        } catch (error) {
            // Sets the message to indicate failiure
            setSubmitMessage({ errorMessage: "Unexpected error occurred. Please try again." });
        }

    }

    return (
        <form className="bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    className={`
                        w-full
                        border-2
                        rounded-lg
                        shadow-sm
                        p-2
                        ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
                        focus:ring-2 
                        focus:outline-none
                    `}
                />
                {errors.name && <p className="text-red-500 ">{errors.name}</p>}
            </div>


            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    className={`
                        w-full
                        border-2
                        rounded-lg
                        shadow-sm
                        p-2
                        ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
                        focus:ring-2 
                        focus:outline-none
                    `}
                />
                {errors.email && <p className="text-red-500 ">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium">
                    Address:
                </label>
                <input
                    type="text"
                    id="address"
                    value={form.address}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    className={`
                        w-full
                        border-2
                        rounded-lg
                        shadow-sm
                        p-2
                        ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
                        focus:ring-2 
                        focus:outline-none
                    `}
                />
                {errors.address && <p className="text-red-500 ">{errors.address}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium">
                    Phone:
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    className={`
                        w-full
                        border-2
                        rounded-lg
                        shadow-sm
                        p-2
                        ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
                        focus:ring-2 
                        focus:outline-none
                    `}
                />
                {errors.phone && <p className="text-red-500 ">{errors.phone}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium">
                    Message:
                </label>
                <textarea
                    id="message"
                    value={form.message}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    className={`
                        w-full
                        border-2
                        rounded-lg
                        shadow-sm
                        p-2
                        ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} 
                        focus:ring-2 
                        focus:outline-none
                    `}
                />
                {errors.message && <p className="text-red-500 ">{errors.message}</p>}
            </div>

            {submitMessage.errorMessage && <p className="text-red-500 mb-4">{submitMessage.errorMessage}</p>}
            {submitMessage.successMessage && <p className="text-green-500 mb-4">{submitMessage.successMessage}</p>}

            <button type="submit" className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800">
                Submit
            </button>
        </form>
    )
}