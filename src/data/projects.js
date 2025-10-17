import MotherFirst from '../assets/projects/mother-first.png'
import TamaleTeamHub from '../assets/projects/tamale-steam-hub.png'
import AgrismartGhana from '../assets/projects/agrismart-ghana.png'
import Solar4Change from '../assets/projects/Solar4Change.png'
import HealthDataInnovation from '../assets/projects/health-data-innovation.png'
import SolarBorehole from '../assets/projects/solar-borehole.jpg'


// app/data/projects.js
export const projects = [
  {
    id: "mothers-first",
    title: "Mothers First Health Initiative",
    subtitle:
      "Community-based maternal care: antenatal education, referrals, and postpartum support.",
    target: 120000,
    raised: 1200,
    cover: MotherFirst,
  },
  {
    id: "tamale-steam-hub",
    title: "Tamale STEAM Hub",
    subtitle:
      "Hands-on maker sessions and teacher training to boost girls’ participation in leadership & STEAM.",
    target: 80000,
    raised: 3420,
    cover: TamaleTeamHub,
  },
  {
    id: "agrismart-ghana",
    title: "AgriSmart Ghana",
    subtitle:
      "Climate-smart practices and farmer advisory with data-driven tools for yield and resilience.",
    target: 150000,
    raised: 0,
    cover: AgrismartGhana,
  },
  {
    id: "solar4change",
    title: "Solar4Change",
    subtitle:
      "Renewable micro-projects for clinics and schools to cut outages and improve service delivery.",
    target: 300000,
    raised: 0,
    cover: Solar4Change,
  },
  {
    id: "health-data-innovation",
    title: "Health Data Innovation Lab",
    subtitle:
      "Predictive analytics and dashboards for early disease detection and better resource planning.",
    target: 90000,
    raised: 0,
    cover: HealthDataInnovation,
  },
  {
    id: "solar-borehole",
    title: "Solar-Powered Borehole",
    subtitle:
      "Off-grid solar pumping and filtration to deliver reliable, safe water for clinics, schools, and communities.",
    target: 180000,
    raised: 720,
    cover: SolarBorehole,
  },
];

export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]));
export const projectSlugs = projects.map(p => p.id);
