import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient'; 

const Certifications = () => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="certifications" className="pt-10 pb-24">
      <div className="text-center mt-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">CERTIFICATIONS</span>
          </p>
          <LineGradient width="w-7/8" />
          <div className="mt-10">
            {/* <h2 className="text-3xl font-playfair font-semibold text-gradient bg-gradient-rainblue mb-5">
              Recognitions & Achievements
            </h2> */}
            <p className="mb-7">
              I have earned certifications that validate my skills in various technologies and cloud platforms, demonstrating my commitment to professional growth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CERTIFICATIONS LIST */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Certified Tableau Desktop Specialist
              </p>
            </div>
            <div className="w-1/2 md:w-2/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="list-disc ml-5 mt-5 text-lg">
            <li>Issuing Authority: Tableau Software</li>
            <li>License Issued: March 2019</li>
            
          </ul>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Fabric Analytics Engineer Associate
              </p>
            </div>
            <div className="w-1/2 md:w-2/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="list-disc ml-5 mt-5 text-lg">
            <li>Issuing Authority: Microsoft</li>
            <li>License Issued: July 2024</li>
           
          </ul>
        </motion.div>

        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Other Achievements
              </p>
            </div>
            <div className="w-1/2 md:w-2/4 h-32 bg-dark-grey absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="list-disc ml-5 mt-5 text-lg">
            <li>Data Science Fundamentals</li>
            <li>MongoDB Certified Developer</li>
          </ul>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Certifications;
