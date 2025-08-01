import helpdesk_1 from "@src/assets/helpdesk/1.png";
import helpdesk_2 from "@src/assets/helpdesk/2.png";
import helpdesk_alur from "@src/assets/helpdesk/alur.png";
import appointment_1 from "@src/assets/appointment/1.png";
import appointment_2 from "@src/assets/appointment/2.png";
import appointment_3 from "@src/assets/appointment/3.png";
import seb_1 from "@src/assets/seb/1.png";
import seb_2 from "@src/assets/seb/2.png";
import seb_3 from "@src/assets/seb/3.png";
import seb_4 from "@src/assets/seb/4.png";
import seb_5 from "@src/assets/seb/5.png";
import seb_6 from "@src/assets/seb/6.png";
import seb_alur from "@src/assets/seb/alur.png";
import fishiden_1 from "@src/assets/fishiden/1.png";
import fishiden_2 from "@src/assets/fishiden/2.png";
import fishiden_alur from "@src/assets/fishiden/alur.png";
import sipaksi_1 from "@src/assets/sipaksi/1.png";
import sipaksi_2 from "@src/assets/sipaksi/2.png";
import sipaksi_alur from "@src/assets/sipaksi/alur.png";
import siamida_1 from "@src/assets/siamida/1.png";
import siamida_2 from "@src/assets/siamida/2.png";
import siamida_alur from "@src/assets/siamida/alur.png";
import hrportal_1 from "@src/assets/hrportal/1.png";
import hrportal_2 from "@src/assets/hrportal/2.png";
import laporppg_1 from "@src/assets/laporppg/1.png";
import laporppg_2 from "@src/assets/laporppg/2.png";
import scanmesin_1 from "@src/assets/scanmesin/1.png";
import scanmesin_2 from "@src/assets/scanmesin/2.png";
import scanmesin_3 from "@src/assets/scanmesin/3.png";
import scanmesin_4 from "@src/assets/scanmesin/4.png";
import scanmesin_5 from "@src/assets/scanmesin/5.png";
import scanmesin_6 from "@src/assets/scanmesin/6.png";
import scanmesin_7 from "@src/assets/scanmesin/7.png";
import scanmesin_8 from "@src/assets/scanmesin/8.png";
import scanmesin_9 from "@src/assets/scanmesin/9.png";
import scanmesin_10 from "@src/assets/scanmesin/10.png";
import scanmesin_11 from "@src/assets/scanmesin/11.png";
import scanmesin_12 from "@src/assets/scanmesin/12.png";
import scanmesin_13 from "@src/assets/scanmesin/13.png";
import scanmesin_alur from "@src/assets/scanmesin/alur.png";
import NoArch from "@src/assets/NoArchitecture.png";
import NotFound from "@src/assets/NotFound.png";
import { SiAndroid, SiAndroidstudio, SiBootstrap, SiCodeigniter, SiCss3, SiDocker, SiDotnet, SiGit, SiGoland, SiJavascript, SiLaravel, SiLogseq, SiMysql, SiPhp, SiPython, SiReact, SiSqlite, SiTailwindcss } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const architecture = [
  {
    title: "No Architecture",
    image: NoArch
  },
  {
    title: "MVC",
    image: "https://cdn.ozzu.com/uploads/1/post/610491/1/diagram-of-the-mvc-design-pattern.png"
  },
  {
    title: "Clean Architecture",
    image: "https://substackcdn.com/image/fetch/$s_!55Wm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F40cb8f80-601f-4364-a5a0-a34db7a96c26_2250x2814.png"
  },
  {
    title: "CQRS",
    image: "https://miro.medium.com/v2/resize:fit:875/1*sDOCS6W0SxsNRS5KlQoYgQ.png"
  },
  {
    title: "DDD",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*hM-D6VPybtpA91-TzOwMAg.jpeg"
  },
];
const projects = [
    {
      id: 1,
      title: "Helpdesk",
      category: "Web",
      tags: "Backend Web",
      description: "Helpdesk IT merupakan aplikasi untuk reporting masalah teknis IT pada divisi lain seperti masalah jaringan internet, pembuatan flayer untuk promosi dan permintaan aplikasi untuk divisi lain. ",
      source:{
        code: "Undocumented",
        website: "https://live.ai.web.id/helpdesk/"
      },
      showInShort:true,
      images: [
        {
          target: helpdesk_1,
          placeholder: true
        },
        {
          target: helpdesk_2,
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PT Gilland Ganesha",
        Teams: [
          {
            role: "Backend",
            total: 1,
            focus: true
          },
          {
            role: "Frontend",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              helpdesk_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Codeigniter 3",
                icon: <SiCodeigniter/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 2,
      title: "SEB",
      category: "Web",
      tags: "Web Backend",
      description: "SEB merupakan aplikasi untuk menangani masalah ujian online dalam penerimaan mahasiswa baru",
      source:{
        code: "https://github.com/adamf0/UnpakCbt",
        website: "https://seb.unpak.ac.id"
      },
      showInShort:true,
      images: [
        {
          target: seb_1,
        },
        {
          target: seb_2,
        },
        {
          target: seb_3,
        },
        {
          target: seb_4,
          placeholder: true
        },
        {
          target: seb_5,
        },
        {
          target: seb_6,
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PUTIK",
        Teams: [
          {
            role: "Backend",
            total: 1,
            focus: true
          },
          {
            role: "Frontend",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              seb_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "ASP.NET",
                icon: <SiDotnet/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Tailwind",
                icon: <SiTailwindcss/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
              {
                label: "Docker",
                icon: <SiDocker />
              },
              {
                label: "React.JS",
                icon: <SiReact />
              },
              {
                label: "Seq",
                icon: null
              },
            ],
            architecture: ["Clean Architecture","CQRS","DDD"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 3,
      title: "Fishiden",
      category: "Web",
      tags: "Fullstack",
      description: "Fishiden adalah sistem inovatif yang menggunakan AI untuk mengidentifikasi dan mengklasifikasi ikan air tawar dan air laut asli Indonesia. Selain itu, Fishiden memberikan informasi status dan upaya konservasi serta menyajikan data genom setiap species teridentifikasi yang bisa digunakan dalam proses pembelajaran.",
      source:{
        code: "https://github.com/adamf0/repository-ikan-yolov7",
        website: "http://www.fishiden.com/"
      },
      showInShort:true,
      images: [
        {
          target: fishiden_1,
          placeholder: true
        },
        {
          target: fishiden_2,
        },
      ],
      details: {
        Type: "Project",
        From: "Private - Kenalan PUTIK",
        Teams: [
          {
            role: "Backend",
            total: 1,
            focus: true
          },
          {
            role: "Frontend",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              fishiden_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "Python",
                icon: <SiPython/>
              },
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "CSS",
                icon: <SiCss3/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 4,
      title: "Appointment",
      category: "Web",
      tags: "Web Backend",
      description: "Appointment merupakan aplikasi untuk menangani masalah penjadwalan pada semua divisi.",
      source:{
        code: "https://github.com/adamf0/ticket",
        website: "https://live.ai.web.id/helpdesk/"
      },
      images: [
        {
          target: appointment_1,
          placeholder: true
        },
        {
          target: appointment_2,
        },
        {
          target: appointment_3,
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PT Gilland Ganesha",
        Teams: [
          {
            role: "Backend",
            total: 1,
            focus: true
          },
          {
            role: "Frontend",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 5,
      title: "Sipaksi",
      category: "Web",
      tags: "Fullstack",
      description: "SIPAKSI merupakan aplikasi untuk menangani masalah monitoring dan pembiayaan penelitian dosen baik hibah internal, nasional dan internasional",
      source:{
        code: "https://github.com/adamf0/UnpakSipaksiOld",
        website: "https://sipaksi.unpak.ac.id/"
      },
      images: [
        {
          target: sipaksi_1,
          placeholder: true
        },
        {
          target: sipaksi_2,
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PUTIK",
        Teams: [
          {
            role: "Fullstack",
            total: 1,
            focus: true
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              sipaksi_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "Python",
                icon: <SiPython/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
          {
            title: "Migrasi Teknologi & Arsitektur",
            tech: [
              {
                label: "ASP.NET",
                icon: <SiDotnet/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Tailwind",
                icon: <SiTailwindcss/>
              },
              {
                label: "React.JS",
                icon: <SiReact/>
              },
              {
                label: "Seq",
                icon: null
              },
              {
                label: "Docker",
                icon: <SiDocker/>
              },
            ],
            architecture: ["Clean Architecture","CQRS","DDD"],
            type: "architecture",
            position: "planed"
          },  
        ]
      },
    },
    {
      id: 6,
      title: "Siamida",
      category: "Web",
      tags: "Fullstack",
      description: "SIAMIDA merupakan aplikasi untuk menangani masalah audit internal semua unit dan fakultas",
      source:{
        code: "Undocumented",
        website: "https://siamida.unpak.ac.id/"
      },
      images: [
        {
          target: siamida_1,
          placeholder: true
        },
        {
          target: siamida_2,
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PUTIK",
        Teams: [
          {
            role: "Fullstack",
            total: 1,
            focus: true
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              siamida_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 7,
      title: "HR Portal",
      category: "Web",
      tags: "Fullstack",
      description: "HRPORTAL merupakan aplikasi untuk menangani masalah absensi pegawai dan dosen",
      source:{
        code: "Undocumented",
        website: "https://hrportal.unpak.ac.id/"
      },
      images: [
        {
          target: hrportal_1,
        },
        {
          target: hrportal_2,
          placeholder: true
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PUTIK",
        Teams: [
          {
            role: "Fullstack",
            total: 1,
            focus: true
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Bootstrap",
                icon: <SiBootstrap/>
              },
              {
                label: "Javascript",
                icon: <SiJavascript/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 8,
      title: "Lapordiri-PPG",
      category: "Web",
      tags: "Fullstack",
      description: "LAPORDIRI-PPG merupakan aplikasi untuk menangani masalah perekapan informasi dosen PPG",
      source:{
        code: "Undocumented",
        website: "https://lapordiri-ppg.unpak.ac.id/"
      },
      images: [
        {
          target: laporppg_1,
        },
        {
          target: laporppg_2,
          placeholder: true
        },
      ],
      details: {
        Type: "Portofolio",
        From: "PUTIK",
        Teams: [
          {
            role: "Fullstack",
            total: 1,
            focus: true
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "PHP",
                icon: <SiPhp/>
              },
              {
                label: "Laravel",
                icon: <SiLaravel/>
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "Tailwind",
                icon: <SiTailwindcss/>
              },
              {
                label: "React.JS",
                icon: <SiReact/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 9,
      title: "Timurjaya",
      category: "Web",
      tags: "Backend Web",
      description: "Timurjaya merupakan aplikasi untuk menangani masalah service pada bengkel motor",
      source:{
        code: "Undocumented",
        website: "Undocumented"
      },
      images: [
        {
          target: NotFound,
          placeholder: true
        },
      ],
      details: {
        Type: "Project",
        From: "Private - Kenalan PT. Gilland Ganesha",
        Teams: [
          {
            role: "Backend",
            total: 1,
            focus: true
          },
          {
            role: "Fullstack",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "Golang",
                icon: <SiGoland/>
              },
              {
                label: "Fiber",
                icon: null
              },
              {
                label: "Mysql",
                icon: <SiMysql/>
              },
              {
                label: "React",
                icon: <SiReact/>
              },
              {
                label: "Tailwind",
                icon: <SiTailwindcss/>
              },
              {
                label: "Git",
                icon: <SiGit/>
              },
              {
                label: "Rest Api",
                icon: <AiFillApi />
              },
            ],
            architecture: ["MVC"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
    {
      id: 10,
      title: "LaporMesin",
      category: "Mobile",
      tags: "Android",
      description: "LaporMesin merupakan aplikasi untuk menangani pelaporan dan monitoring mesin pembuatan ban untuk PT. Indo Kordsa Tbk",
      source:{
        code: "Undocumented",
        website: "Undocumented"
      },
      showInShort:true,
      images: [
        {
          target: scanmesin_1,
        },
        {
          target: scanmesin_2,
        },
        {
          target: scanmesin_3,
        },
        {
          target: scanmesin_4,
          placeholder: true
        },
        {
          target: scanmesin_5,
        },
        {
          target: scanmesin_6,
        },
        {
          target: scanmesin_7,
        },
        {
          target: scanmesin_8,
        },
        {
          target: scanmesin_9,
        },
        {
          target: scanmesin_10,
        },
        {
          target: scanmesin_11,
        },
        {
          target: scanmesin_12,
        },
        {
          target: scanmesin_13,
        },
      ],
      details: {
        Type: "Project",
        From: "PT. Media Phonix Teknologi",
        Teams: [
          {
            role: "Android",
            total: 1,
            focus: true
          },
          {
            role: "Fullstack",
            total: 1,
          },
        ],
        History:[
          {
            title: "Analisis Sistem",
            images: [
              scanmesin_alur
            ],
            type: null
          },
          {
            title: "Inisialisasi Teknologi",
            tech: [
              {
                label: "Java",
                icon: <SiAndroid/>
              },
              {
                label: "AndroidStudio",
                icon: <SiAndroidstudio/>
              },
              {
                label: "Sqlite",
                icon: <SiSqlite/>
              }
            ],
            architecture: ["No Architecture"],
            type: "architecture",
            position: "current"
          },
          {
            title: "Temuan / Bug",
            images: [],
            type: "bug"
          },
          {
            title: "Review",
            list: [],
            type: "review"
          },
        ]
      },
    },
];

function getArchitecture(title){
  if (!title) return null;
  return architecture.find(target => target.title === title);
};

export default { projects, getArchitecture };