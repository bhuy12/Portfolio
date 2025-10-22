import React from "react";
import { Mail, Github, Linkedin, ExternalLink, Phone, MapPin, Calendar, GraduationCap, Award, Code2, Server, Database } from "lucide-react";

// ====== HỒ SƠ (theo CV) ======
const AUTHOR = {
  name: "Bùi Lê Đức Huy",
  role: "Web Developer Intern",
  email: "bhuy1212@gmail.com",
  phone: "0707286901",
  dob: "11/11/2004",
  location: "Gò Vấp, TP. Hồ Chí Minh",
  github: "https://github.com/HieuBuiNmmm",
  linkedin: "#",
  resumeUrl: "#",
};

// ====== LINK DỰ ÁN (theo CV) ======
const LINKS = {
  liveDemo: "https://chuyen-de-web-clientside.vercel.app/foods",
  sourceCodeFE: "https://github.com/HieuBuiNmmm/ChuyenDeWeb_ClientSide",
  // Thêm backend repo nếu có
  sourceCodeBE: "",
};

// ====== DATA TỪ CV ======
const EDUCATION = {
  school: "Van Lang University",
  faculty: "Faculty of Electrical & Computer Engineering",
  years: "2022 – 2026",
  gpa: "3.13/4.00",
};

const TECH_SKILLS = {
  languages: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB Atlas"],
  tools: ["Git/GitHub", "Swagger/OpenAPI", "Postman", "Jira", "Docker (cơ bản)"],
  soft: ["Communication", "Problem solving", "Persuasion"],
};

const PROJECTS = [
  {
    title: "SHOP FOOD — React/Next.js + Node/Express + MongoDB",
    period: "05/2024 – 09/2024",
    role: "PM, Developer",
    bullets: [
      "Front‑end: Next.js/React; UI responsive; form validation; debounced search; skeleton loader.",
      "Back‑end: Express + MongoDB; REST CRUD sản phẩm/người dùng; phân trang, sắp xếp, lọc, text search; xử lý lỗi thống nhất.",
      "Auth: JWT + refresh token; RBAC cơ bản (user/admin).",
      "Hạ tầng: MongoDB Atlas (schema + index). Deploy: FE Vercel • BE Render. Tài liệu: Swagger/Postman.",
    ],
    links: [
      { label: "Live Demo", url: LINKS.liveDemo },
      { label: "Frontend Repo", url: LINKS.sourceCodeFE },
    ],
  },
  {
    title: "SCZR (2D Platformer, Unity)",
    period: "—",
    role: "Developer (team 2)",
    bullets: ["Thiết kế level cơ bản, cơ chế nhân vật, va chạm, UI game."],
    links: [
      { label: "GitHub", url: "https://github.com/HieuBui204/Project-Game_-LTUD2.git" },
    ],
  },
  {
    title: "Firefighter Simulation lite (3D, Unity)",
    period: "—",
    role: "Developer (team 2)",
    bullets: ["Mô phỏng thao tác chữa cháy cơ bản, scene và asset 3D, logic nhiệm vụ."],
    links: [
      { label: "GitHub", url: "https://github.com/HieuBui-MI/PCCC_Project.git" },
      { label: "YouTube", url: "https://youtu.be/KdLE-6ukMfA" },
    ],
  },
];

const CERTIFICATES = [
  { year: "2023 – 2024", name: "RapidMiner Certificate in Data Analysis" },
  { year: "2024", name: "Introduction to C# Programming and Unity – University of Colorado" },
  { year: "2025", name: "C# Programming for Unity Game Development – University of Colorado" },
];

const PREVIEW = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1700&auto=format&fit=crop";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{AUTHOR.name}</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{AUTHOR.role}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" />{AUTHOR.phone}</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />{AUTHOR.email}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{AUTHOR.dob}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{AUTHOR.location}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${AUTHOR.email}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><Mail className="h-4 w-4" /> Liên hệ</a>
            <a href={AUTHOR.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={AUTHOR.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><Github className="h-4 w-4" /> GitHub</a>
            <a href={AUTHOR.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2">Tải CV</a>
          </div>
        </div>
      </header>

      {/* Mục tiêu nghề nghiệp (tóm tắt từ CV) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-bold mb-2">Mục tiêu nghề nghiệp</h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            Mục tiêu trở thành Web Developer với nền tảng Front‑end/Back‑end vững,
            tham gia môi trường làm việc thân thiện, kỷ luật; học hỏi và đóng góp
            vào các sản phẩm có người dùng thực tế; từng bước phát triển thành developer
            toàn diện.
          </p>
        </div>
      </section>

      {/* Project spotlight */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold">Dự án tiêu biểu</h3>
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-500">Preview</span>
              </div>
              <img src={PREVIEW} alt="SHOP FOOD preview" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Các dự án khác */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-xl font-bold">Dự án khác</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <ProjectCard project={PROJECTS[1]} />
          <ProjectCard project={PROJECTS[2]} />
        </div>
      </section>

      {/* Kỹ năng & Công cụ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-xl font-bold">Kỹ năng & Công cụ</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <SkillCard title="Ngôn ngữ/Frontend" icon={Code2} items={TECH_SKILLS.languages} />
          <SkillCard title="Backend" icon={Server} items={TECH_SKILLS.backend} />
          <SkillCard title="Database" icon={Database} items={TECH_SKILLS.database} />
          <SkillCard title="Tools" icon={Code2} items={TECH_SKILLS.tools} />
          <SkillCard title="Kỹ năng mềm" icon={Code2} items={TECH_SKILLS.soft} />
        </div>
      </section>

      {/* Học vấn */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
          <h3 className="text-xl font-bold flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Học vấn</h3>
          <div className="mt-3 text-sm">
            <div className="font-semibold">{EDUCATION.school}</div>
            <div className="text-slate-600 dark:text-slate-300">{EDUCATION.faculty}</div>
            <div className="text-slate-600 dark:text-slate-300">{EDUCATION.years} • GPA {EDUCATION.gpa}</div>
          </div>
        </div>
      </section>

      {/* Chứng chỉ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
          <h3 className="text-xl font-bold flex items-center gap-2"><Award className="h-5 w-5" /> Chứng chỉ</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            {CERTIFICATES.map((c) => (
              <li key={c.name} className="text-slate-700 dark:text-slate-300">
                <span className="font-medium">{c.year}</span> — {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-14">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Quan tâm hợp tác?</h4>
            <p className="text-slate-600 dark:text-slate-300">Tôi yêu thích xây dựng UI đẹp, hiệu năng tốt và dễ mở rộng.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${AUTHOR.email}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2"><Mail className="h-4 w-4" /> Liên hệ</a>
            <a href={AUTHOR.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><Github className="h-4 w-4" /> GitHub</a>
            <a href={AUTHOR.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} {AUTHOR.name}</p>
      </footer>
    </div>
  );
}

// ====== Subcomponents ======
function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-semibold">{project.title}</div>
        <div className="text-xs text-slate-500">{project.period}</div>
      </div>
      <div className="text-xs text-slate-500 mt-1">{project.role}</div>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
        {project.bullets && project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {project.links && project.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <ExternalLink className="h-3.5 w-3.5" /> {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillCard({ title, icon: Icon, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900">
      <div className="flex items-center gap-2 font-semibold">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {title}
      </div>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-1">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
