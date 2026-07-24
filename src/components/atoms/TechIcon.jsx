import {
  SiAndroid,
  SiAndroidstudio,
  SiBootstrap,
  SiCodeigniter,
  SiCss3,
  SiDbeaver,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiGit,
  SiGo,
  SiGoland,
  SiJavascript,
  SiLaravel,
  SiLogseq,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaPhp, FaReact } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

const iconMap = {
  SiAndroid: SiAndroid,
  SiAndroidstudio: SiAndroidstudio,
  SiBootstrap: SiBootstrap,
  SiCodeigniter: SiCodeigniter,
  SiCss3: SiCss3,
  SiDbeaver: SiDbeaver,
  SiDocker: SiDocker,
  SiDotnet: SiDotnet,
  SiFlutter: SiFlutter,
  SiGit: SiGit,
  SiGo: SiGo,
  SiGoland: SiGoland,
  SiJavascript: SiJavascript,
  SiLaravel: SiLaravel,
  SiLogseq: SiLogseq,
  SiMysql: SiMysql,
  SiNextdotjs: SiNextdotjs,
  SiPhp: SiPhp,
  SiPython: SiPython,
  SiReact: SiReact,
  SiSqlite: SiSqlite,
  SiTailwindcss: SiTailwindcss,
  AiFillApi: AiFillApi,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaReact: FaReact,
  FaPhp: FaPhp,
  FaGitAlt: FaGitAlt,
  FaBootstrap: FaBootstrap,
};

export default function TechIcon({ iconName, className = "" }) {
  if (!iconName) return null;
  const Component = iconMap[iconName];
  if (!Component) return null;
  return <Component className={className} />;
}
