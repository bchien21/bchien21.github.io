import pprGraphic from "./components/ProjectList/Research/PPR_Elements/PPR_Assets/ppr_full_assem.png"
import nsinInternGraphic from "./components/ProjectList/Industry/NucorInternship/NucorAssets/nsin_new_system.png"
import medsnakeGraphic from "./components/ProjectList/Research/Medsnake_Elements/Medsnake_Assets/medsnake.png"
import assistiveTechGraphic from "./components/ProjectList/Academics/AssistiveTech/AssistiveTechAssets/computerModelIsometric.jpg"
import electroMechGraphic from "./components/ProjectList/Academics/ElectroMech/ElectroMechAssets/full_system_assembly_isometric.png"
import boskplant from "./components/ProjectList/Industry/Ford/Ford_Assets/bosk_plant.jpg"
import robotsim from "./components/ProjectList/Academics/RRT/RRT_Assets/robot_sim.png"

import nucorlogo from "./components/assets/nucor_logo.jpg"
import fordlogo from "./components/assets/ford_logo.jpg"
import bioroboticslogo from "./components/assets/biorobotics.png"
import icllogo from "./components/assets/icl.png"
import acelogo from "./components/assets/ace.png"

export const projectsResearch = [
  {
    title: "Robotic Delivery of Engineered Tissue for Treating Aortic Disease",
    subtitle: "",
    description:
      "Contributions to Project: Medical Snake, a robot snake for heart surgery",
    image: medsnakeGraphic,
    route: "/medsnake",
  },
  {
    title: "Portable Puncture Detection: Mechanical Design Proposal and Embedded Development",
    subtitle: "",
    description:
      "Contributions to Project: Trauma-Care-In-A-Rucksack, a needle insertion robotic arm",
    image: pprGraphic,
    route: "/ppr",
  },
];

export const projectsIndustry = [
  {
    title: "Preparations for the Launch of the BlueOvalSK Battery Plant",
    subtitle: "",
    description:
      "Associated Position: Battery Manufacturing Intern (Controls Team) at Ford Motor Company",
    image: boskplant,
    route: "/ford",
  },
  {
    title: "Computer Aided Redesign of a Steel Processing Line",
    subtitle: "",
    description:
      "Associated Position: Mechanical Engineering Intern at Nucor Corporation",
    image: nsinInternGraphic,
    route: "/nucor",
  }
];

export const projectsAcademic = [
  {
    title: "RRT Motion Planner",
    subtitle: "",
    description:
      "",
    image: robotsim,
    route: "/rrt",
  },
  {
    title: "Surgical Robot Snake System Development",
    subtitle: "",
    description:
      "",
    image: medsnakeGraphic,
    route: "/medsnake",
  },
  {
    title: "Automatic Drill Bit Measuring Device",
    subtitle: "",
    description:
      "",
    image: electroMechGraphic,
    route: "/electromech",
  },
  {
    title: "Remote-Controlled Tripod",
    subtitle: "",
    description:
      "",
    image: assistiveTechGraphic,
    route: "/assistivetech",
  },
  {
    title: "Steel Processing Line CAD",
    subtitle: "",
    description:
      "",
    image: nsinInternGraphic,
    route: "/nucor",
  }
];



export const experience = [
  {
    title: "Graduate Research Assistant, Learning-Based Path Planning and Control",
    company: "Autonomous Control & Exploration Laboratory, Johns Hopkins University",
    location: "Baltimore, MD",
    duration: "Jun 2025 – Present",
    logo: acelogo

  }, 
  {
    title: "Graduate Research Assistant, Perception for Human-Robot Collaboration",
    company: "Intuitive Computing Laboratory, Johns Hopkins University",
    location: "Baltimore, MD",
    duration: "Feb 2025 – Present",
    logo: icllogo

  }, 
  {
    title: "Manufacturing Engineering Intern",
    company: "Ford Motor Company",
    location: "BlueOvalSK Battery Park, Glendale, KY",
    duration: "May 2024 – August 2024",
    logo: fordlogo

  }, 
  {
      title: "Undergraduate Robotics Research Assistant",
      company: "The Biorobotics Laboratory, Carnegie Mellon University",
      location: "Pittsburgh, Pennsylvania",
      duration: "September 2023 - April 2024",
      logo: bioroboticslogo

  },
  {
      title: "Mechanical Engineering Intern",
      company: "Nucor Corporation",
      location: "Crawfordsville, Indiana",
      duration: "May 2023 – July 2023",
      logo: nucorlogo
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "GraphQL",
  "Material UI",
];