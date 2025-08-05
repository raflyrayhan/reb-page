// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
    const { name: key, value } = e.target;
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,            // {{from_name}} in your template
      from_email: email,          // {{from_email}} in From Email & Reply To
      message: message,           // {{message}} in your template
      to_email: "marketing@reka-energi.com", 
    };

    try {
      await emailjs.send(
        "service_ob3pabn",    // your Service ID
        "template_g7vn6be",   // your Template ID
        templateParams,
        "XissUhOcE2e-mSvv0"   // your Public Key / User ID
      );
      setState(initialState);
      setMessageSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-50 p-6 rounded-lg shadow"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={handleChange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={handleChange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={message}
              onChange={handleChange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition"
            >
              Send Message
            </motion.button>
            {messageSent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-green-600 mt-2 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6 text-gray-800"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">Office Address</h2>
              Techno Park Industrial Estate 2, Block H9 No.16, Setu, BSD City<br/>
              Tangerang Selatan, Banten 15314, Indonesia
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Phone & Email</h2>
              <p><strong>Phone:</strong> (+62) 21-7568-2120</p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:marketing@reka-energi.com"
                  className="text-red-600 hover:underline"
                >
                  marketing@reka-energi.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
