import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaWallet,
  FaGlobe,
  FaChartLine,
  FaShoppingCart,
  FaShieldAlt,
  FaUsers,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  { title: "Contract Management", description: "Role-based contract platform with secure authentication and role-aware workflows.", icon: FaFileAlt, featured: false },
  { title: "Finance Tracker", description: "Interactive finance dashboard for tracking expenses, budgets, and analytics.", icon: FaWallet, featured: true },
  { title: "Travella", description: "AI-assisted trip planner for tourist recommendations and journey creation.", icon: FaGlobe, featured: false },
  { title: "Admin Dashboard", description: "Responsive analytics portal with charts, user management, and real-time visibility.", icon: FaChartLine, featured: false },
  { title: "E-Commerce", description: "Modern shopping experience with authentication and optimized UX flows.", icon: FaShoppingCart, featured: false },
  { title: "Security System", description: "JWT-based secure system with role-based authorization and protected routes.", icon: FaShieldAlt, featured: true },
  { title: "Student Management", description: "Student operations dashboard for attendance, marks, and performance tracking.", icon: FaUsers, featured: false },
  { title: "Portfolio Website", description: "This premium developer portfolio built with React, Tailwind, and refined motion.", icon: FaLaptopCode, featured: false },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950/70 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Selected work that blends design and function</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Each project reflects a focus on clean UX, responsive design, and reliable implementation for real-world use.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.05 }} className={`group relative overflow-hidden rounded-[1.75rem] border p-8 transition hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/10 ${project.featured ? "border-cyan-400/60 bg-gradient-to-br from-slate-900 to-slate-800" : "border-white/10 bg-slate-900/70"}`}>
                {project.featured && <div className="absolute right-5 top-5 rounded-full bg-cyan-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">Featured</div>}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                  <Icon />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-200 transition group-hover:text-cyan-300">
                  View Project <FaArrowRight />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}