import React from 'react';
import {motion} from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import LineGradient from '../components/LineGradient';
import VerticalGradient from '../components/VerticalGradient';

const experiences = [
    {
        company: "UST Global",
        duration: "August 2019 - Present",
        role: "Lead I - Software Engineering",
        responsibilities: [
            "Leading multiple projects, ensuring timely delivery and alignment with business " +
                    "objectives.",
            "Specialized in developing and optimizing dashboards and reports using Power BI a" +
                    "nd Tableau.",
            "Collaborating with cross-functional teams to design and implement data-driven so" +
                    "lutions.",
            "Mentoring team members and providing technical guidance on UI/UX design, data mo" +
                    "delling, and automation workflows.",
            "Delivering impactful proof-of-concepts (POCs) and presenting innovative solution" +
                    "s to stakeholders."
        ]
    }, {
        company: "Vayaa Systems",
        duration: "July 2015 – August 2019",
        role: "Tableau Developer",
        responsibilities: [
            "Designed and developed interactive dashboards and visualizations using Tableau t" +
                    "o meet business needs.",
            "Analysed complex datasets and translated requirements into actionable insights.",
            "Worked closely with business analysts to document and understand functional requ" +
                    "irements.",
            "Delivered user training and provided ongoing support for deployed reports and da" +
                    "shboards.",
            "Gained significant expertise in database technologies such as SQL Server and Ora" +
                    "cle, contributing to efficient data retrieval and reporting."
        ]
    }
];

const WorkExperience = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const [dialogContent,
        setDialogContent] = React.useState(null);

    const handleDialogOpen = (content) => {
        setDialogContent(content);
        const backdrop = document.querySelector(`[data-dialog-backdrop="animated-dialog"]`);
        const dialog = document.querySelector(`[data-dialog="animated-dialog"]`);

        if (backdrop && dialog) {
            backdrop
                .classList
                .remove('pointer-events-none', 'opacity-0');
            dialog
                .classList
                .remove('opacity-0', '-translate-y-28', 'scale-90', 'pointer-events-none');
        }
    };

    const handleDialogClose = () => {
        setDialogContent(null);
        const backdrop = document.querySelector(`[data-dialog-backdrop="animated-dialog"]`);
        const dialog = document.querySelector(`[data-dialog="animated-dialog"]`);

        if (backdrop && dialog) {
            backdrop
                .classList
                .add('pointer-events-none', 'opacity-0');
            dialog
                .classList
                .add('opacity-0', '-translate-y-28', 'scale-90', 'pointer-events-none');
        }
    };

    return (
        <section id="experience" className="pt-10 pb-24">
            {/* HEADER SECTION */}
            <div className="text-center mt-10">
                <motion.h1
                    className="text-4xl font-semibold"
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
                        y: -50
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}>
                    <div>
                        <p className="font-playfair font-semibold text-4xl">
                            <span className="text-red">WORK</span>
                            EXPERIENCE
                        </p>
                        <div className="flex justify-center mt-5">
                            <LineGradient width="w-2/3"/>
                        </div>

                    </div>
                </motion.h1>
            </div>
            {/* EXPERIENCES */}
            <div
                className="flex flex-wrap justify-between gap-6 mt-16 mx-auto max-w-6xl px-6">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className={`shadow-md rounded-lg p-6 flex flex-col items-start ${isAboveLarge
                        ? 'w-[30%]'
                        : 'w-full sm:w-48'}`}
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
                            y: 50
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}>
                        <div className="w-full flex">
                            <VerticalGradient height="h-auto"/>
                            <div className="ml-2">
                                <h2 className="font-playfair text-2xl font-bold">{experience.company}</h2>
                                <p className="font-playfair text-lg font-medium opacity-80">{experience.role}</p>
                                <p className="font-playfair text-lg font-medium opacity-80">{experience.duration}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleDialogOpen(experience.responsibilities)}
                            className=" text-left mt-4  text-gradient bg-gradient-rainblue pl-2 font-semibold flex items-center gap-2 transition duration-500 cursor-pointer hover:scale-105">
                            Responsibility
                            <span className="inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current">
                                    <path
                                        fill="currentColor"
                                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                </svg>
                            </span>
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* DIALOG */}
            <div
                data-dialog-backdrop="animated-dialog"
                onClick={handleDialogClose}
                className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
                <div
                    data-dialog="animated-dialog"
                    className="relative m-4 p-4 w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] rounded-lg bg-deep-blue shadow-sm opacity-0 -translate-y-28 scale-90 pointer-events-none transition-all duration-300">
                    <div
                        className="flex shrink-0 items-center pb-4 text-xl font-playfair font-semibold ">
                        Responsibilities
                    </div>
                    <LineGradient/>
                    <div className="relative  py-4 leading-normal font-playfair ">
                        <ul className="list-disc ml-5">
                            {dialogContent
                                ?.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                        <button
                            onClick={handleDialogClose}
                            className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all hover:bg-yellow focus:bg-yellow active:bg-yellow">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
