import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import LineGradient from '../components/LineGradient';
import VerticalGradient from '../components/VerticalGradient';

const Project = [
    {
      title: "Application Security & Orch",
      duration: "May 2024 – Present",
      client:"T-Mobile",
      environment:"Power BI",
      role:"Lead Developer UI/UX",
      aboutTheProject: [
       " Designed and enhanced user interfaces for Power BI dashboards, prioritizing user-centric design and seamless interaction.",
 "Collaborated with stakeholders to align designs with business goals and optimize reports for performance.",
 "Implemented automation workflows for data refreshing, report generation, and dashboard updates.",
 "Developed proof-of-concepts (POCs) to showcase new ideas and technologies.",
 "Stayed updated on UI/UX trends and Power BI advancements to improve internal processes."
      ],
    },
    {
      title: "Acacium Group",
      duration: "Feb 2024 – Present",
      client:"T-Mobile",
      environment:"Power BI, ADO",
      role:"Core Lead",
      aboutTheProject: [
        "Analysed requirements, clarified with clients, and planned estimates.",
        "Designed, developed, and delivered Power BI dashboards and paginated reports using DAX, Power Query, and custom visuals.",
        "Ensured data integrity through cleansing, validation, and reconciliation tasks.",
        " Optimized application performance and ensured timely deployments.",
        "Worked in an Azure cloud environment to meet diverse stakeholder needs."
      ],
    },
    {
      title: "BHF and WBS",
      duration: "Mar 2023 – Nov 2023",
      client:"Elevance Health",
      environment:"Power BI Report Server (SSAS)",
      role:"Application Developer",
      aboutTheProject: [
       "Designed and delivered dashboards for tracking member engagement and cost utilization.",
        "Developed SQL queries and tabular models using SSAS for efficient data retrieval.",
         "Created calculations, KPIs, and visualizations in Power BI.",
         "Conducted data analysis to identify trends and optimize decision-making.",
        "Provided technical support and training for self-service reporting."
      ],
    },
    {
      title: "Supply Chain Analytics",
      duration: "Feb 2024 – Present",
      client:"Albertsons",
      environment:"Power BI Pro",
      role:"Application Developer",
      aboutTheProject: [
        "Designed Power BI reports and dashboards for retail and supply chain analytics.",
"Transformed data by creating SQL views and optimizing database performance.",
"Developed templates, checklists, and failure alert systems for Power BI.",
"Implemented workflows using Power Automate for automated data processing."
      ],
    },
    {
      title: "AMI M&S",
      duration: "Aug 2019 – Sep 2020",
      client:"Nissan",
      environment:"Tableau 2019.2",
      role:"Tableau Developer",
      aboutTheProject: [
        "Developed performance-optimized dashboards and visualizations in Tableau.",
"Diagnosed and resolved data integrity issues, ensuring seamless functionality.",
"Collaborated with business users to implement data analysis solutions."
      ],
    },
    {
      title: "Five Star",
      duration: "Nov 2018 – Aug 2019",
      client:"Five Star",
      environment:"Tableau 2018.3",
      role:"Tableau Developer",
      aboutTheProject: [
        "Created dashboards using client-specific requirements and maintained historical data.",
"Developed filters, parameters, and calculated fields for customized insights.",
"Provided support documentation and updated existing processes."
      ],
    },
    {
      title: "Sales Analytics",
      duration: "Jan 2018 – Oct 2018",
      client:"Hindustan Unilever Limited",
      environment:"Tableau 10.5",
      role:"Tableau Developer",
      aboutTheProject: [
        "Developed dashboards using calculated fields, parameters, and table calculations.",
"Designed interactive visuals, including groupings, sets, and hierarchies.",
"Created drill-through reports for detailed purchase order and invoice analysis."
      ],
    },

    {
      title: "SV Insight",
      duration: "Jul 2015 – Dec 2017",
      client:"iControl Systems, US",
      environment:"Tableau 8.3 – 10.5",
      role:"Tableau Developer",
      aboutTheProject: [
        "Designed dashboards using advanced calculations and visualizations.",
"Implemented row-level security for data access and reporting.",
"Created storytelling dashboards and supported data refresh schedules.",
"Conducted business requirement analysis and validated data quality."
      ],
    },
  ];
  

const Projects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [dialogContent, setDialogContent] = React.useState();

  const handleDialogOpen = (project) => {
    setDialogContent(project);
    console.log(project);
    const backdrop = document.querySelector(`[project-dialog-backdrop="animated-dialog"]`);
    const dialog = document.querySelector(`[project-dialog="animated-dialog"]`);

    if (backdrop && dialog) {
      backdrop.classList.remove('pointer-events-none', 'opacity-0');
      dialog.classList.remove('opacity-0', '-translate-y-28', 'scale-90', 'pointer-events-none');
    }
  };

  const handleDialogClose = () => {
    setDialogContent(null);
    const backdrop = document.querySelector(`[project-dialog-backdrop="animated-dialog"]`);
    const dialog = document.querySelector(`[project-dialog="animated-dialog"]`);

    if (backdrop && dialog) {
      backdrop.classList.add('pointer-events-none', 'opacity-0');
      dialog.classList.add('opacity-0', '-translate-y-28', 'scale-90', 'pointer-events-none');
    }
  };

  return (
    <section id="projects" className="pt-10 pb-24">
      {/* HEADER SECTION */}
      <div className="text-center mt-10">
        <motion.h1
          className="text-4xl font-semibold"
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
            <LineGradient width="w-1/3" />
          </div>
          
        </div>
        </motion.h1>
      </div>
      {/* EXPERIENCES */}
      <div className="flex flex-wrap justify-start gap-6 mt-16 mx-auto max-w-6xl px-1">
        {Project.map((project, index) => (
          <motion.div
            key={index}
            className={` shadow-md rounded-lg p-6 flex flex-col items-start ${
              isAboveLarge ? 'w-[30%]' : 'w-full sm:w-48'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
               <div className="w-full flex">
  <VerticalGradient height="h-auto" />
  <div className="ml-2">
    <h2 className="font-playfair text-xl font-semibold">{project.title}</h2>
    <p className="font-playfair text-lg font-medium ">Client: {project.client}</p>
    <p className="font-playfair text-lg font-medium">{project.duration}</p>
  </div>
</div>
            <button onClick={() => handleDialogOpen(project)}
  className="text- left text-gradient bg-gradient-rainblue py-3  font-semibold flex items-center gap-2 transition duration-500 cursor-pointer  hover:scale-105"
>
  About The Project:
  <span className="inline-flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
    >
      <path
        fill="currentColor"
        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
      />
    </svg>
  </span>
</button>

          </motion.div>
        ))}
      </div>

      {/* DIALOG */}
      <div
  project-dialog-backdrop="animated-dialog"
  onClick={handleDialogClose}
  className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
>
  <div
    project-dialog="animated-dialog"
    className="relative m-4 p-4 w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] rounded-lg bg-deep-blue shadow-sm opacity-0 -translate-y-28 scale-90 pointer-events-none transition-all duration-300"
  >
    <div className="flex shrink-0 items-center pb-4 text-xl font-playfair font-semibold">
      About The Project ({dialogContent?.role}: {dialogContent?.environment})
    </div>
    <LineGradient />
    <div className="relative py-4 leading-normal font-playfair">
      <ul className="list-disc ml-5">
        {dialogContent?.aboutTheProject?.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </div>
    <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
      <button
        onClick={handleDialogClose}
        className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all hover:bg-yellow focus:bg-yellow active:bg-yellow"
      >
        Close
      </button>
    </div>
  </div>
</div>

    </section>
  );
};

export default Projects;
