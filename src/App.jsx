import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Code2,
  Server,
  Database,
  Moon,
  SunMedium,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// ====== HỒ SƠ (theo CV) ======
const AUTHOR = {
  name: "Bùi Lê Đức Huy",
  role: "Software Developer",
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
  liveDemo: "https://chuyen-de-web-client-side.vercel.app/foods",
  sourceCodeFE: "https://github.com/HieuBuiNmmm/ChuyenDeWeb_ClientSide",
  sourceCodeBE: "", // thêm nếu có
};

// ====== DATA TỪ CV ======
const EDUCATION = {
  school: "Van Lang University",
  faculty: "Faculty of Electrical & Computer Engineering",
  years: "2022 – 2026",
  gpa: "3.15/4.00",
};

const TECH_SKILLS = {
  languages: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB Atlas"],
  tools: ["Git/GitHub", "Swagger/OpenAPI", "Postman", "Jira", "Docker (cơ bản)"],
  soft: ["Communication", "Problem solving", "Persuasion"],
};

// ====== DỰ ÁN + GALLERY ẢNH (ảnh nằm trong public/images/<slug>/...) ======
const PROJECTS = [
  {
    slug: "shop-food",
    title: "SHOP FOOD — React/Next.js + Node/Express + MongoDB",
    period: "05/2024 – 09/2024",
    role: "PM, Developer",
    bullets: [
      "Front-end: Next.js/React; UI responsive; form validation; debounced search; skeleton loader.",
      "Back-end: Express + MongoDB; REST CRUD sản phẩm/người dùng; phân trang, sắp xếp, lọc, text search; xử lý lỗi thống nhất.",
      "Auth: JWT + refresh token; RBAC cơ bản (user/admin).",
      "Hạ tầng: MongoDB Atlas (schema + index). Deploy: FE Vercel • BE Render. Tài liệu: Swagger/Postman.",
    ],
    images: [
      "/images/shop-food/01.jpg",
      "/images/shop-food/02.jpg",
      "/images/shop-food/03.jpg",
      "/images/shop-food/04.jpg",
      "/images/shop-food/05.jpg",
      "/images/shop-food/06.jpg",
    ],
    links: [
      { label: "Live Demo", url: LINKS.liveDemo },
      { label: "Frontend Repo", url: LINKS.sourceCodeFE },
    ],
  },
  {
    slug: "sczr",
    title: "SCZR (2D Platformer, Unity)",
    period: "—",
    role: "Developer (team 2)",
    bullets: ["Thiết kế level cơ bản, cơ chế nhân vật, va chạm, UI game."],
    images: ["/images/sczr/01.jpg", "/images/sczr/02.jpg", "/images/sczr/03.jpg"],
    links: [{ label: "GitHub", url: "https://github.com/HieuBui204/Project-Game_-LTUD2.git" }],
  },
  {
    slug: "firefighter",
    title: "Firefighter Simulation lite (3D, Unity)",
    period: "—",
    role: "Developer (team 2)",
    bullets: ["Mô phỏng thao tác chữa cháy cơ bản, scene và asset 3D, logic nhiệm vụ."],
    images: [
      "/images/firefighter/01.jpg",
      "/images/firefighter/02.jpg",
      "/images/firefighter/03.jpg",
    ],
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

const PREVIEW =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1700&auto=format&fit=crop";

// =========================
// UI PRIMITIVES
// =========================
const cn = (...arr) => arr.filter(Boolean).join(" ");

function useDarkMode() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

function Button({ as: Comp = "a", variant = "outline", size = "md", className, icon: Icon, children, ...props }) {
  const base = "inline-flex items-center gap-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    outline:
      "border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800",
    solid:
      "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90",
    ghost:
      "hover:bg-slate-100 dark:hover:bg-slate-800",
  };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-3 text-base" };
  return (
    <Comp className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </Comp>
  );
}

function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
}

function Section({ id, title, icon: Icon, children, className }) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      <Card className="p-6">
        <div className="flex items-center gap-2">
          {Icon ? <Icon className="h-5 w-5" /> : null}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="mt-3">{children}</div>
      </Card>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900">
      {children}
    </span>
  );
}

function IconText({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2">
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </span>
  );
}

// =========================
// APP
// =========================
export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-[radial-gradient(70%_80%_at_10%_0%,#eef2ff,transparent),radial-gradient(70%_70%_at_100%_0%,#e2f4f1,transparent)] dark:bg-[radial-gradient(70%_80%_at_10%_0%,#0f172a,transparent),radial-gradient(70%_70%_at_100%_0%,#052e2b,transparent)] text-slate-900 dark:text-slate-100">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-slate-900/50">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg md:text-xl">
            <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">Huy.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
            <a className="hover:text-slate-900 dark:hover:text-white" href="#projects">Dự án</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#skills">Kỹ năng</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#education">Học vấn</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#certs">Chứng chỉ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button as="button" onClick={toggle} variant="ghost" size="sm" aria-label="Toggle theme">
              {dark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button href={`mailto:${AUTHOR.email}`} variant="solid" size="sm" icon={Mail}>
              Liên hệ
            </Button>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                {AUTHOR.name}
              </span>
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{AUTHOR.role}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              <IconText icon={Phone}>{AUTHOR.phone}</IconText>
              <IconText icon={Mail}>{AUTHOR.email}</IconText>
              <IconText icon={Calendar}>{AUTHOR.dob}</IconText>
              <IconText icon={MapPin}>{AUTHOR.location}</IconText>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button href={AUTHOR.linkedin} target="_blank" rel="noreferrer" variant="outline" icon={Linkedin}>
                LinkedIn
              </Button>
              <Button href={AUTHOR.github} target="_blank" rel="noreferrer" variant="outline" icon={Github}>
                GitHub
              </Button>
              <Button href={AUTHOR.resumeUrl} target="_blank" rel="noreferrer" variant="solid">
                Tải CV
              </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <BrowserFrame>
              <img
                src={(PROJECTS[0].images && PROJECTS[0].images[0]) || PREVIEW}
                alt="SHOP FOOD preview"
                className="w-full h-64 object-cover"
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* Mục tiêu nghề nghiệp */}
      <Section title="Mục tiêu nghề nghiệp">
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          Mục tiêu trở thành Web Developer với nền tảng Front-end/Back-end vững, tham gia môi trường làm việc thân thiện, kỷ luật; học hỏi và đóng góp vào các sản phẩm có người dùng thực tế; từng bước phát triển thành developer toàn diện.
        </p>
      </Section>

      {/* Project spotlight */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-3">Dự án tiêu biểu</h3>
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="md:col-span-2">
            <BrowserFrame>
              <img
                src={(PROJECTS[0].images && PROJECTS[0].images[0]) || PREVIEW}
                alt="SHOP FOOD preview"
                className="w-full h-64 object-cover"
              />
            </BrowserFrame>
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
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-xl font-bold">Kỹ năng & Công cụ</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard title="Ngôn ngữ/Frontend" icon={Code2} items={TECH_SKILLS.languages} />
          <SkillCard title="Backend" icon={Server} items={TECH_SKILLS.backend} />
          <SkillCard title="Database" icon={Database} items={TECH_SKILLS.database} />
          <SkillCard title="Tools" icon={Code2} items={TECH_SKILLS.tools} />
          <SkillCard title="Kỹ năng mềm" icon={Code2} items={TECH_SKILLS.soft} />
        </div>
      </section>

      {/* Học vấn */}
      <Section id="education" title="Học vấn" icon={GraduationCap} className="mt-10">
        <div className="text-sm">
          <div className="font-semibold">{EDUCATION.school}</div>
          <div className="text-slate-600 dark:text-slate-300">{EDUCATION.faculty}</div>
          <div className="text-slate-600 dark:text-slate-300">
            {EDUCATION.years} • GPA {EDUCATION.gpa}
          </div>
        </div>
      </Section>

      {/* Chứng chỉ */}
      <Section id="certs" title="Chứng chỉ" icon={Award} className="mt-10">
        <ul className="mt-1 text-sm grid sm:grid-cols-2 gap-x-6 gap-y-1">
          {CERTIFICATES.map((c) => (
            <li key={c.name} className="text-slate-700 dark:text-slate-300">
              <span className="font-medium">{c.year}</span> — {c.name}
            </li>
          ))}
        </ul>
      </Section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-14">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Quan tâm hợp tác?</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Tôi yêu thích xây dựng UI đẹp, hiệu năng tốt và dễ mở rộng.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={`mailto:${AUTHOR.email}`} variant="solid" icon={Mail}>
                Liên hệ
              </Button>
              <Button href={AUTHOR.github} target="_blank" rel="noreferrer" variant="outline" icon={Github}>
                GitHub
              </Button>
              <Button href={AUTHOR.linkedin} target="_blank" rel="noreferrer" variant="outline" icon={Linkedin}>
                LinkedIn
              </Button>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} {AUTHOR.name}</p>
        </Card>
      </footer>
    </div>
  );
}

// ====== Subcomponents ======
function BrowserFrame({ children }) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 dark:border-slate-800">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs text-slate-500">Preview</span>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-semibold">{project.title}</div>
        <div className="text-xs text-slate-500">{project.period}</div>
      </div>
      <div className="text-xs text-slate-500 mt-1">{project.role}</div>

      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
        {project.bullets && project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      {project.images && project.images.length > 0 ? (
        <div className="mt-4">
          <Gallery images={project.images} />
        </div>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <Button
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              icon={ExternalLink}
            >
              {l.label}
            </Button>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

/* Gallery: lưới thumbnail + modal xem ảnh lớn (hỗ trợ bàn phím) 
   — ĐÃ FIX: Modal render qua portal để thoát khỏi stacking context */
function Gallery({ images }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const current = images[index] || images[0];

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  // Điều khiển bàn phím khi mở modal
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  // Khoá scroll nền khi mở modal
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openAt(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={`Xem ảnh ${i + 1}`}
          >
            <img
              src={src}
              alt={`preview-${i + 1}`}
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
            />
          </button>
        ))}
      </div>

      {/* Portal để đảm bảo overlay luôn phủ toàn trang và không bị đè */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm grid place-items-center p-4"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
              >
                <img src={current} alt="preview-large" className="w-full max-h-[80vh] object-contain rounded-xl" />
                <div className="mt-3 flex items-center justify-between text-slate-200 text-sm">
                  <span>
                    {index + 1} / {images.length}
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={() => setIndex((p) => (p - 1 + images.length) % images.length)}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Trước
                    </button>
                    <button
                      onClick={() => setIndex((p) => (p + 1) % images.length)}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Sau
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

function SkillCard({ title, icon: Icon, items }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 font-semibold">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Card>
  );
}
