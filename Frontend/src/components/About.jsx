import React from 'react';
import banner from "../../public/Banner.png";

function About() {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl my-10 font-bold text-center mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src={banner}
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are committed to providing high-quality products and exceptional service. Our mission is to deliver innovative solutions that make a difference in our customers' lives.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leader in our industry, known for our creativity, quality, and commitment to excellence. We aim to inspire and empower our community through our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
