import { architectureData, getArchitecture } from "./architecture";
import { helpdeskProject } from "./helpdesk";
import { sebProject } from "./seb";
import { fishidenProject } from "./fishiden";
import { appointmentProject } from "./appointment";
import { sipaksiProject } from "./sipaksi";
import { siamidaProject } from "./siamida";
import { hrportalProject } from "./hrportal";
import { laporppgProject } from "./laporppg";
import { timurjayaProject } from "./timurjaya";
import { lapormesinProject } from "./lapormesin";
import { simonevProject } from "./simonev";
import { edunihongoProject } from "./edunihongo";

export const projectsData = [
  helpdeskProject,
  sebProject,
  fishidenProject,
  appointmentProject,
  sipaksiProject,
  siamidaProject,
  hrportalProject,
  laporppgProject,
  timurjayaProject,
  lapormesinProject,
  simonevProject,
  edunihongoProject,
];

export { architectureData, getArchitecture };

export default { projects: projectsData, architecture: architectureData, getArchitecture };
