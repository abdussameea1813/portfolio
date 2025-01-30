'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        'service_pozaafq', // Replace with your Service ID
        'template_p9dfp1w', // Replace with your Template ID
        formData,
        'FcRjXRHadHi-0_M3d' // Replace with your Public Key/User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          setError(true);
        }
      );
  };
  

  return (
    <section id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Contact Me
        </h2>
        <form
          className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 border border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 border border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 border border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
