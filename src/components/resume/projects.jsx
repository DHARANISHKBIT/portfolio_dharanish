import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Calendar } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Crayond Digital Pvt. Ltd.",
    period: "Sep 2024 - Apr 2025",
    description: "Built reusable React components, integrated REST APIs, improved UI performance, and collaborated through Git-based workflow.",
  },
];

const education = [
  {
    degree: "B.Tech - Information Technology",
    college: "Bannari Amman Institute of Technology",
    period: "2023 - 2027",
    cgpa: "CGPA : 8.21",
    description: "Focused on Full Stack Development, DBMS, Operating Systems, and modern web technologies.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="bg-slate-950/60 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Resume</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Experience and education shaped by real delivery</h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Experience</div>
            {experience.map((item, index) => (
              <div key={index} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><Briefcase size={22} /></div>
                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">Internship</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-lg text-slate-400">{item.company}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300"><Calendar size={16} /> {item.period}</div>
                <p className="mt-6 leading-8 text-slate-400">{item.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Education</div>
            {education.map((item, index) => (
              <div key={index} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300">{item.period}</span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"><GraduationCap size={22} /></div>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{item.degree}</h3>
                <p className="mt-2 text-lg text-slate-400">{item.college}</p>
                <p className="mt-6 leading-8 text-slate-400">{item.description}</p>
                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 font-semibold text-cyan-300">{item.cgpa}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}