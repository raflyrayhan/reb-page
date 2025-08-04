"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [{ name, email, message }, setState] = useState(initialState);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your email API
      console.log({ name, email, message });
      clearState();
      setMessageSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-[#f5f5f5] p-6 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-white border border-[#ccc] text-black placeholder-gray-400"
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-white border border-[#ccc] text-black placeholder-gray-400"
              value={email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-md bg-white border border-[#ccc] text-black placeholder-gray-400"
              value={message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#D32F2F] hover:bg-red-700 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
            {messageSent && (
              <p className="text-green-400 text-sm mt-2">Message Sent! Thank you for contacting us.</p>
            )}
          </form>

          <div className="space-y-6 text-sm text-black">
             <div className="w-full mt-8">
              <Image src="/maps.png" alt="Location Map" className="w-full h-auto rounded-lg" width={350} height={350} />
            </div>
            <div>
              <h1 className="text-bold text-[#D32F2F]">Office</h1>
              Kawasan Industri Taman Tekno 2 - H9/16, 
              Setu, South Tangerang City, Banten 15314
              <br/><br/>
              <strong className="text-[#D32F2F]">Phone:</strong> +62 21 89109606 <br />
              <br/>
              <strong className="text-[#D32F2F]">Fax:</strong> +62 21 89109607 <br />
              <br/>
              <strong className="text-[#D32F2F]">Email:</strong>{" "}
              <a href="mailto:sales@reka-energi.com" className="hover:underline text-black">
                sales@reka-energi.com
              </a>
            </div>
            {/* Image Section */}
            
          </div>
         
        </div>
      </div>
    </main>
  );
}
