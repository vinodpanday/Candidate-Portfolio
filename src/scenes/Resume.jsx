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
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          My-Resume
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here is my resume which includes my work experience, education and skills
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            "
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
    <p className="italic">University of Central Missouri</p>
    <p className="text-sm">GPA: 3.6/4.0</p>
    <p className="mt-4 font-bold">Bachelor's in Computer Science</p>
    <p className="italic">Keshav Memorial Institute of Technology</p>
    <p className="text-sm">GPA: 3.5/4.0</p>
  </div>
        </motion.div>

        <motion.div
  className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
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


        <motion.div
          className="mx-auto relative bg-dark-grey max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
         <p className="">
          Click below to view or download my detailed resume, showcasing my professional journey and accomplishments.
        </p>
          <a
                      className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500 "
                    href="https://drive.google.com/file/d/1d1F4_s5SmiNKjm4SaGBzLSGcSwfQiSdp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    >
                     View My Resume
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
