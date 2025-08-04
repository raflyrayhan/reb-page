'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  year: string;
  location: string;
  endUser: string;
  client: string;
  images: string[];
  scope: string[];
};

const projects: Project[] = [
 {
    title: 'WET CALIBRATION 2 unit 16” ANSI 600#',
    year: '2017',
    location: 'Randu Blatung, Cepu, Central Java',
    endUser: 'PT. Indonesia Power',
    client: 'PT. Sumber Petrindo Perkasa',
    images: ['/wetcalibration1.png', '/wetcalibration2.png'],
    scope: [
      'USM Dismantling and Packing',
      'Delivery of USM to and from VOSS Calibration Laboratory at Belgium',
      'Organize Client and Government Officer for calibration witness',
      'Provide Calibration Report'
    ]
  },
  {
    title: 'EPC Gas Metering Station, Siberida',
    year: '2017',
    location: 'Siberida',
    endUser: 'PT. Transportasi Gas Indonesia',
    client: 'PT. Yuan Sejati',
    images: ['/epcgas1.png', '/epcgas2.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during Proposal Preparation',
      'Topography and Soil Investigation Service',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back Up'
    ]
  },
  {
    title: 'RS JARGAS MUSI RAWAS',
    year: '2018',
    location: 'Palembang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/rsmusi1.jpg', '/rsmusi2.png', '/rsmusi3.png', '/rsmusi4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during Proposal Preparation',
      'Provide PMT Personnel for Engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back Up'
    ]
  },
  {
    title: 'RS JARGAS DELI SERDANG',
    year: '2018',
    location: 'Deli Serdang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/jargasdeli1.png', '/jargasdeli2.png', '/jargasdeli3.png', '/jargasdeli4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during proposal preparation',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back up'
    ]
  },
  {
    title: 'MRS JARGAS Palembang',
    year: '2018',
    location: 'Palembang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/mrsjargas1.png', '/mrsjargas2.png', '/mrsjargas3.png', '/mrsjargas4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during proposal preparation',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back up'
    ]
  },
  {
    title: "Fuel Gas System For Natuna And Papua",
    year: "2018",
    location: '7 Location',
    endUser: 'PT. PP (Persero)',
    client: 'PT. Yuan Sejati',
    images: ['/Natuna1.png', '/Natuna2.png', '/Natuna3.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during Proposal Preparation',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back Up'
    ]
  },
  {
    title: 'Chemical Injection Package 42-A-301 LPG Odorant Unit',
    year: '2019',
    location: 'Indramayu, Jawa Barat',
    endUser: 'Pertamina Refinery Unit VI Balongan',
    client: 'PT. Kharisma Sinar Utama',
    images: ['/balongan1.png', '/balongan2.png', '/balongan3.png', '/balongan4.jpg'],
    scope: [
      'Engineering, PMT',
      'Supply Equipment, Piping, Instrumentation, and Skid',
      'Installation Supervision',
      'Start up and Commissioning'
    ]
  }

  
];

export default function ExperienceCard() {
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    projects.map(() => 0)
  );
  const [modalImage, setModalImage] = useState<string | null>(null);

  const nextImage = (index: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] = (updated[index] + 1) % projects[index].images.length;
      return updated;
    });
  };

  const prevImage = (index: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] =
        updated[index] === 0
          ? projects[index].images.length - 1
          : updated[index] - 1;
      return updated;
    });
  };

  return (
    <>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          <span className="text-red-700">Projects</span>{' '}
          <span className="text-black">&</span>{' '}
          <span className="text-gray-600">Experience</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500">
          Selected Highlights from Our Work
        </p>
      </section>

      {/* Cards */}
      <div className="w-full bg-gray-50 px-4 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="rounded-lg shadow-md bg-white overflow-hidden transition-all duration-300"
            >
              {/* Image with controls */}
              <div className="relative h-72 w-full">
                <Image
                  src={project.images[currentIndexes[idx]]}
                  alt={project.title}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() =>
                    setModalImage(project.images[currentIndexes[idx]])
                  }
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(idx)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-700 text-white px-2 py-1 rounded-full text-lg hover:bg-red-800"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => nextImage(idx)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-700 text-white px-2 py-1 rounded-full text-lg hover:bg-red-800"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Project Detail */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  {project.location}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  End User: {project.endUser}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Year: {project.year}
                </p>

                <p className="text-sm text-gray-700">
                  <strong>Client:</strong> {project.client}
                </p>
                <p className="text-sm text-gray-700 font-semibold mt-3 mb-1">
                  Scope of Work:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.scope.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Image Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-3xl w-full px-4">
            <Image
              src={modalImage}
              alt="Preview"
              width={1000}
              height={600}
              className="object-contain rounded shadow-lg"
            />
            <button
              className="absolute top-2 right-4 text-white text-3xl"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
