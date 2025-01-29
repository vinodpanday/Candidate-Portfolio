import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useState} from "react";
import LineGradient from "../components/LineGradient";

const Landing = ({setSelectedPage}) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const [isDialogOpen,
        setIsDialogOpen] = useState(false);
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge
                    ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
      before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img
                                alt="profile"
                                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-auto max-w-[400px] md:max-w-[600px] object-cover "
                                src=""/>
                        </div>
                    )
                    : (<img
                        alt="profile"
                        className="z-10 w-full h-auto max-w-[400px] md:max-w-[600px] object-cover"
                        src=""/>)}
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                    once: true,
                    amount: 0.5
                }}
                    transition={{
                    duration: 0.5
                }}
                    variants={{
                    hidden: {
                        opacity: 0,
                        x: -50
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                }}
                    className="text-center md:text-left">
                    <motion.p
                        initial={{
                        opacity: 0,
                        y: -50
                    }}
                        animate={{
                        opacity: 1,
                        y: 0
                    }}
                        transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                        className="font-playfair font-semibold text-2xl md:text-6xl
                 bg-gradient-rainblue
                 bg-clip-text text-transparent shadow-md animate-pulse hover:bg-blue pb-2 ml-5 ">

                        Pullagura, Vinod
                    </motion.p>
                    <div className="p-6 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
                        <p className="mb-7 font-semibold text-lg leading-relaxed">
                            Hi there! 👋 Welcome to my portfolio, 9+ years of IT experience specializing in
                            Business Intelligence (BI), data visualization, and reporting tools, including
                            Power BI Desktop and Tableau, alongside expertise in database technologies such
                            as MS SQL, Oracle, Snowflake, Azure SQL, and DB2.
                            <span className="hidden md:inline">
                                {" "}Proven ability to deliver business solutions with a balance of functional
                                    and technical expertise, ensuring alignment with organizational goals
                            </span>
                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="text-gradient bg-red inline-flex items-center ml-2 text-blue-500 hover:text-blue-700 transition-all">
                                ...ReadMore
                            </button>
                        </p>

                        {isDialogOpen && (
                            <div
                                className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                                onClick={() => setIsDialogOpen(false)}>
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative m-4 p-6 w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[80vh] overflow-y-auto rounded-lg bg-deep-blue shadow-lg">
                                    <button
                                        className="absolute top-2 right-2 bg-yellow"
                                        onClick={() => setIsDialogOpen(false)}>
                                        ✖
                                    </button>
                                    <div
                                        className="flex shrink-0 items-center pb-4 text-xl font-playfair font-semibold">
                                        Key Skills and Expertise
                                    </div>
                                    <LineGradient/>
                                    <div className="relative py-4 leading-normal font-playfair">
                                        {[
                                            {
                                                title: "Business Intelligence and Reporting",
                                                items: ["Extensive experience in Power BI", "End-to-end development","Ad-hoc dashboards", "Performance optimization", "Expertise in data modeling", "DAX and MQuery profeciency"]
                                            }, {
                                                title: "Data Engineering and Analysis",
                                                items: ["Built tabular models using SSAS", "Created support documentation", "Designed ETL pipelines", "Provided KT sessions"]
                                            }, {
                                                title: "UI/UX Leadership",
                                                items: ["User-centric dashboard designs", "Automated workflows", "Interactive reports", "Custom visualization solutions"]
                                            },
                                            {
                                              title: "Project Leadership and Innovation",
                                              items: ["Proof-of-concepts (POCs)", "Demos to stakeholders and management,", "Collaborated with cross-functional teams"]
                                          },
                                            {
                                                title: "Professional Strengths",
                                                items: ["Technical Expertise", "Communication Skills", "Leadership and Mentorship", "Problem-Solving Abilities", "Continuous Innovation"]
                                            }
                                        ].map((section, idx) => (
                                            <div key={idx} className="mb-6">
                                                <h3 className="font-playfair text-lg">{section.title}</h3>
                                              {isAboveLarge ? (<LineGradient width="w-1/3"/> ) : <LineGradient />} 
                                              <ul
                                            className={`${
                                                            isAboveLarge
                                                            ? "grid grid-cols-2 gap-x-8 space-y-2" 
                                                            : "flex flex-wrap gap-x-6 gap-y-2 justify-start"
                                                                 }`}>
                                                    {section
                                                        .items
                                                        .map((item, i) => (
                                                            <li key={i} className="list-disc list-inside">{item}</li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-end gap-4 mt-6">
                                        <button
                                            onClick={() => setIsDialogOpen(false)}
                                            className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all hover:bg-yellow focus:bg-yellow active:bg-yellow">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex  justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                    once: true,
                    amount: 0.5
                }}
                    transition={{
                    delay: 0.2,
                    duration: 0.5
                }}
                    variants={{
                    hidden: {
                        opacity: 0,
                        x: -50
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                }}>
                    <AnchorLink
                        className="bg-red  rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact">
                        Let's talk
                    </AnchorLink>
                    {/* <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact">
                        <div
                            className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                            
                        </div>
                    </AnchorLink> */}
                </motion.div>

                <motion.div
                    className="flex  justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                    once: true,
                    amount: 0.5
                }}
                    transition={{
                    delay: 0.4,
                    duration: 0.5
                }}
                    variants={{
                    hidden: {
                        opacity: 0,
                        x: -50
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                }}>
                    <SocialMediaIcons/>
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
