"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "QAI Certificate – Occupational Health & Safety",
    image: "/cert1.png",
    description:
      "Certification No. QAIC/ID/11084-C from Q.A. Indonesia Certification. This certifies that PT. Rekayasa Energi Bersama is compliant with ISO 45001:2018 Occupational Health and Safety Management System for the design, supply & installation of oil & gas, power, and petrochemical package equipment.",
  },
  {
    title: "QAI Certificate – Environmental Management",
    image: "/cert2.png",
    description:
      "Certification No. QAIC/ID/11084-B from Q.A. Indonesia Certification. It confirms PT. Rekayasa Energi Bersama's implementation of ISO 14001:2015 Environmental Management System in its design and installation operations for the oil & gas and energy sectors.",
  },
  {
    title: "QAI Certificate – Quality Management System",
    image: "/cert3.png",
    description:
      "Certification No. QAIC/ID/11084-A from Q.A. Indonesia Certification. It acknowledges that PT. Rekayasa Energi Bersama fulfills the requirements of ISO 9001:2015 for Quality Management System in delivering industrial package solutions.",
  },
];

function LegalCertifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  const openModal = (img: string) => {
    setPopupImage(img);
    setIsOpen(true);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Legal Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <div
                className="cursor-pointer"
                onClick={() => openModal(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h4 className="text-xl font-semibold text-red-700">{cert.title}</h4>
              <p className="text-sm text-black">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-black/60 p-4">
          <Dialog.Panel className="bg-white p-4 rounded-lg max-w-3xl mx-auto">
            <Image src={popupImage} alt="Preview" width={800} height={1000} />
            <div className="text-center mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
     <section className="relative h-[100vh] w-full bg-black">
  <Image
    src="/aboutbg.jpg"
    alt="About Hero"
    fill
    className="object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-5" />
  
  {/* Content */}
   <div className="absolute inset-x-0 top-1/3 z-10 text-center">
    <div className="w-full h-[12rem] bg-white/50 flex flex-col items-center justify-center">
      <Image src="/REB logo.png" alt="logo" width={180} height={180} />
      <h1 className="text-6xl md:text-[4rem] font-extrabold text-black mt-5">
        About <strong className="text-black">R</strong>
        <strong className="text-red-800">E</strong>
        <strong className="text-gray-700">B</strong>
      </h1>
    </div>
  </div>
</section>

      {/* Company Profile Split Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
            PT. Rekayasa Energi Bersama
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Founded in 2018, PT. Rekayasa Energi Bersama (REB) is an Indonesian engineering
            company specializing in package systems for oil & gas, energy, and petrochemical sectors.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            We provide smart, reliable, and innovative solutions — from design to fabrication — tailored
            to meet clients’ requirements with a commitment to quality, HSE, and on-time delivery.
            Our team consists of experienced engineers in disciplines such as Process, Mechanical,
            Instrumentation & Control, and Drafting.
          </p>
        </div>
        <div className="w-full h-[300px] relative">
          <Image
            src="/aboutimg.jpg"
            alt="Engineering Illustration"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Integrity", 
              desc: "We act with honesty and transparency in all our dealings."
            }, {
              title: "Innovation", 
              desc: "We embrace continuous improvement in every project."
            }, {
              title: "Commitment", 
              desc: "We stay true to our promises and strive for excellence."
            }].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold text-red-700 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Certifications */}
      <LegalCertifications />

      {/* CTA */}
      <section className="py-20 bg-red-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to collaborate with REB?
        </h2>
        <p className="mb-6 text-lg">Explore our projects or get in touch with our professional team.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
