import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 md:px-12">
      <h1 className="text-4xl my-10 font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span className="text-sm text-red-500 mt-1">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
