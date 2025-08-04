"use client";
import Image from 'next/image';
import { useState } from 'react';

const businessCards = [
  {
    title: "Oil & Gas",
    image: "/oilngasicon.png",
    description: "Providing engineering and equipment solutions for the oil and gas industry."
  },
  {
    title: "Gas Transporter",
    image: "/gastransporticon.png",
    description: "Specialized in gas compression and transportation systems for energy distribution."
  },
  {
    title: "Petrochemical",
    image: "/petrochemicon.png",
    description: "Delivering systems and packages for refining and petrochemical processing."
  },
  {
    title: "EPC Contractor",
    image: "/epcicon.png",
    description: "Engineering, Procurement, and Construction services for industrial projects."
  },
  {
    title: "Power Plant",
    image: "/powerplanticon.png",
    description: "Supplying package equipment and engineering for power generation industries."
  },
  {
    title: "Fabricator",
    image: "/fabricatoricon.png",
    description: "In-house fabrication capabilities for skid packages, piping, and structural steel."
  }
];

export default function HomePage() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <main className="w-screen h-screen overflow-hidden relative m-0 p-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="absolute top-0 left-0 object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <div className="absolute w-full h-[40vh] bg-white/20 top-1/3 z-5">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold uppercase text-center mt-10">
              <strong className="text-black">PT.</strong> <strong className="text-black">REKAYASA</strong> <strong className="text-red-800">ENERGI</strong> <strong className="text-gray-700">BERSAMA</strong>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-xl text-center text-black">
              Indonesian Engineering Company delivering package solutions for oil & gas and energy sectors since 2018.
            </p>
          </div>
          <a
            href="#about"
            className="mt-[12rem] border-none bg-red-600 px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition z-10 text-white"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-16 gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/aboutprev.png"
            alt="About Preview"
            width={350}
            height={350}
            className="rounded-lg shadow-lg object-fill max-w-full max-h-full w-[300vh] h-[100vh]"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About <strong className="text-red-600">REB</strong>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            REB (Rekayasa Energi Bersama) is a proudly local Indonesian company, providing smart and reliable package solutions for the power and oil & gas industries since 2018. With passionate engineers and trusted tools, we bring your ideas to life — from design to delivery.
          </p>
          <a href="/about" className="inline-block mt-6 border-none px-6 py-2 text-sm uppercase tracking-wider bg-red-600 hover:text-white font-bold transition text-white">
            More About Us
          </a>
        </div>
      </section>

      {/* Products & Services */}
      <section className="w-full bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-12">
          PRODUCTS & SERVICES
        </h2>
        <div className="w-full overflow-x-auto px-4">
          <div className="flex gap-6 md:gap-8 snap-x snap-mandatory scroll-pl-4">
            {businessCards.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[30%] snap-start flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="mb-4 h-[120px] object-contain"
                />
                <h3 className="text-2xl font-bold text-red-700 mb-4">{item.title}</h3>
                <p className="text-gray-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Principals</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8">
          We are proud to collaborate with industry-leading partners who share our commitment to engineering excellence, innovation, and integrity.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/qwp.png" alt="QWP Logo" width={80} height={40} className="object-contain max-w-[100px]" />
          <Image src="/stauper.png" alt="Stauper Logo" width={150} height={50} className="object-contain max-w-[150px]" />
          <Image src="/termochimica.png" alt="Termochimica Logo" width={150} height={50} className="object-contain max-w-[150px]" />
          <Image src="/Mckenzzie.jpg" alt="Mckenzzie" width={100} height={150} className="object-contain max-w-[100px]" />
          <Image src="/MTT.jpeg" alt="MTT" width={100} height={150} className="object-contain max-w-[100px]" />
        </div>
      </section>
    </>
  );
}
