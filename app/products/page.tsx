"use client";

import Image from "next/image";
import React from "react";

const products = [
  {
    package: "Fuel Gas Conditioning Package",
    image: "/fuelgaspackage.png",
    description:
      "Used to clean and condition fuel gas for turbines, engines, or boilers by removing liquids, solids, and contaminants.",
  },
  {
    package: "Chemical Injection Package",
    image: "/cheminjectpackage.png",
    description:
      "Designed to inject precise amounts of chemicals into pipelines or processes to control corrosion, scaling, and hydrate formation.",
  },
  {
    package: "Compact Floatation Unit",
    image: "/compactfloatunit.png",
    description:
      "A compact system used for removing oil and solids from produced water using gas flotation technology.",
  },
  {
    package: "Dew Point Control Package",
    image: "/dewpointpackage.png",
    description:
      "Controls the dew point of natural gas to prevent condensation in pipelines and processing facilities.",
  },
  {
    package: "Steam De-aerator",
    image: "/deaerator package.png",
    description:
      "Removes dissolved gases, primarily oxygen and carbon dioxide, from boiler feedwater to prevent corrosion.",
  },
  {
    package: "Metering Package",
    image: "/meteringpackage.png",
    description:
      "Provides accurate measurement of oil, gas, or other fluids for custody transfer or process control.",
  },
  {
    package: "Separator Package",
    image: "/separatorpackage.png",
    description:
      "Separates oil, gas, water, and solids from the production stream using gravity and mechanical methods.",
  },
  {
    package: "Water Bath Heater",
    image: "/waterbath.png",
    description:
      "Indirect heating system used to raise the temperature of natural gas or fluids by immersing a process coil in heated water.",
  },
  {
    package: "H2S Scavenger Package",
    image: "/h2spackage.png",
    description:
      "Removes hydrogen sulfide (H2S) from natural gas or liquids to meet safety and environmental standards.",
  },
  {
    package: "DHU Package",
    image: "/dhupackage.png",
    description:
      "Dehydration Unit for removing water vapor from natural gas to prevent hydrate formation and corrosion.",
  },
];

export default function ProductPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          <span className="text-red-700">Products</span>{" "}
          <span className="text-black">&</span>{" "}
          <span className="text-gray-600">Solutions</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500">
          Smart Engineering Packages for Oil, Gas, and Petrochemical Industries
        </p>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Text */}
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-2">
                {product.package}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/3 w-full">
              <Image
                src={product.image}
                alt={product.package}
                width={500}
                height={500}
                className="w-[60%] h-[60%] object-fill rounded-b-xl md:rounded-l-none md:rounded-r-xl items-end"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
