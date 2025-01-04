import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

  

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const projectDescription=[
  "Lease Management Application is developed using Node.js and Express.js for backend development and React.js for frontend development and MongoDB database management. Admin manages the rental and payment details.Customer can apply to a lease and manages his own lease, can raise a complaint regarding an issue and can see future and past payments.",
  "Gas Station Management Application is developed using Java and Spring Boot for backend development and React.js for frontend development and MongoDB database management. Admin manages the gas station details, fuel prices and Inventory.Customer can browse through products, add to cart and place an order either pickup or delivery.",
  "Stadium Ticket booking is a web application developed using Java and Spring Boot for backend and React.js for frontend  and MongoDB database management. Admin manages the stadium details and manipulates stadium manager request.Stadium manager manages events and ticket prices for his stadium.Customer can browse through events, select the event and book tickets.",
  "Matresses is an e-commerce web application developed using Java and Spring Boot for backend and React.js for frontend and MongoDB database management. Admin manages the product details and manipulates the customer orders.Customer can browse through products,can select different variants of a product add to cart and place an order either for delivery or pickup.",
]

const Project = ({ title,description,link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-hidden`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 max-h-20 overflow-y-auto text-base md:text-lg " >
          
        {description}
        </p>
          <a
                      className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    >
                     View in Git
           </a>
       
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are the list of projects I have worked on.
          I have developed diverse projects leveraging technologies like Java, Spring Boot, Node.js, React.js, and MongoDB.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
           Hover over the images to see project details.
          </div>
          <Project title="Lease Management" description={projectDescription[0]}
           link={"https://github.com/srinivastherapati/LeaseManagement"}  />
          <Project title="Gas Station" description={projectDescription[1]}
          link={"https://github.com/srinivastherapati/GasStation"} />
          <Project title="Stadium Ticket booking" description={projectDescription[2]} 
          link={"https://github.com/srinivastherapati/StadiumTicketBooking"} />
          <Project title="Matresses" description={projectDescription[2]} 
          link={"https://github.com/srinivastherapati/Matresses"}/>
          
          <div
            className="flex justify-center text-center items-center p-10 bg-dark-grey
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
              <a
                      className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500"
                    href="https://github.com/srinivastherapati?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    >
                     View More in Git repository
           </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
