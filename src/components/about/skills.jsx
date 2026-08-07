import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "React & Next.js", percentage: 90, icon: <Code2 size={18} /> },
  { name: "Node.js & Express", percentage: 88, icon: <Rocket size={18} /> },
  { name: "Tailwind CSS & UI Systems", percentage: 92, icon: <Layers3 size={18} /> },
  { name: "MongoDB & PostgreSQL", percentage: 85, icon: <Database size={18} /> },
  { name: "Git & GitHub", percentage: 85, icon: <Workflow size={18} /> },
  { name: "REST APIs & JWT", percentage: 87, icon: <ShieldCheck size={18} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-900/70 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Core Skills</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Technologies I use to build with confidence</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">{skill.icon}</div>
                <span className="text-lg font-semibold text-cyan-400">{skill.percentage}%</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-100">{skill.name}</h3>
              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" style={{ width: `${skill.percentage}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;