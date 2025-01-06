import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
        <span className="text-red">RE</span>SUME
        </p>
        <LineGradient width="w-2/3" />
        <p className="mt-10 mb-5">
          Here is my resume which includes my work experience, education.Click <b>View Resume</b> to navigate to my resume .
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="flex flex-wrap justify-between gap-8">
  {/* Education Section */}
  <motion.div
    className="relative bg-blue flex-1 min-h-[350px] flex flex-col justify-end p-8 md:p-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-3xl text-center mb-4">Education</p>
    <div className="text-center text-lg">
      <p className="font-bold">Master's in Computer Science</p>
      <p className="font-playfair">University of Central Missouri</p>
      <p className="text-sm">GPA: 3.6/4.0</p>
      <p className="mt-4 font-bold">Bachelor's in Computer Science</p>
      <p className="font-playfair">Keshav Memorial Institute of Technology</p>
      <p className="text-sm">GPA: 3.5/4.0</p>
    </div>
  </motion.div>

  {/* Work Experience Section */}
  <motion.div
    className="relative bg-red flex-1 min-h-[350px] flex flex-col justify-end p-8 md:p-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-3xl text-center mb-4">Work Experience</p>
    <div className="text-center text-lg">
      <p className="font-bold">Opentext Technologies</p>
      <p className="font-playfair">Associate Software Engineer</p>
      <p className="text-sm">(August 2021 - July 2023)</p>
      <p className="mt-4 font-bold">Opentext Technologies</p>
      <p className="font-playfair">Internship</p>
      <p className="text-sm">(June-2021-August-2021)</p>
    </div>
  </motion.div>

  {/* Resume Section */}
  <motion.div
    className="relative bg-dark-grey flex-1 min-h-[350px] flex flex-col justify-end p-8 md:p-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-xl text-center mb-4">
      Click below to view or download my detailed resume, showcasing my professional journey and accomplishments.
    </p>
    <a
      className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-20 font-semibold hover:bg-blue hover:text-white transition duration-500 text-center mx-auto"
      href="https://drive.google.com/file/d/1d1F4_s5SmiNKjm4SaGBzLSGcSwfQiSdp/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
    >
      View Resume
    </a>
  </motion.div>
</div>

    </section>
  );
};

export default Resume;
