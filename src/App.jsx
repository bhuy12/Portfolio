import React from "react";
import ReactDOM from "react-dom";
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
import ReactDOM from "react-dom";

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
  liveDemo: "https://chuyen-de-web-client-side.vercel.app/foods",
  sourceCodeFE: "https://github.com/HieuBuiNmmm/ChuyenDeWeb_ClientSide",
  sourceCodeBE: "", // thêm nếu có
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
function Portal({ children }) {
  const elRef = React.useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("data-portal", "");
    // đảm bảo portal không tạo stacking-context bất thường
    elRef.current.style.isolation = "isolate";
  }
  React.useEffect(() => {
    document.body.appendChild(elRef.current);
    return () => {
      try {
        document.body.removeChild(elRef.current);
      } catch (_) {}
    };
  }, []);
  return ReactDOM.createPortal(children, elRef.current);
}

/* Gallery: lưới thumbnail + modal xem ảnh lớn (portal + z-index cao + khoá scroll + phím tắt) */
function Gallery({ images }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const current = images[index] || images[0];

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + images.length) % images.length);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, images.length]);

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

      {open ? (
        <Portal>
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm grid place-items-center p-4" style={{ zIndex: 2147483647, pointerEvents: 'auto' }}
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
                <img
                  src={current}
                  alt="preview-large"
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
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
          </AnimatePresence>
        </Portal>
      ) : null}
    </div>
  );
}

function SkillCard({ title, icon: Icon, items })({ title, icon: Icon, items }) {
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
