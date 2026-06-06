import { Mail, Phone, MessageCircle, Linkedin, Github, ExternalLink, Cloud, Server, ShieldCheck, Brain, Trophy, GraduationCap } from 'lucide-react'

const links = {
  linkedin: 'https://www.linkedin.com/in/azizzoaib786/',
  github: 'https://github.com/azizzoaib786',
  medium: 'https://medium.com/@azizzoaib',
  email: 'mailto:me@azizzoaib.com',
  whatsapp: 'https://wa.me/971568103175',
  phone: 'tel:+971568103175'
}

const skills = [
  'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'OpenShift', 'Terraform', 'Helm', 'Kustomize',
  'Jenkins', 'GitLab CI', 'CircleCI', 'ArgoCD', 'Argo Rollouts', 'Istio', 'Vault',
  'Prometheus', 'Dynatrace', 'AppDynamics', 'New Relic', 'Splunk', 'Python', 'Go', 'Bash',
  'Amazon Bedrock', 'OpenSearch', 'RAG', 'Machine Learning'
]

const experience = [
  {
    company: 'Emirates Airlines',
    role: 'Lead DevOps Engineer (SRE)',
    period: 'May 2023 – Present',
    points: ['OpenShift and AWS EKS platform engineering', 'GitOps adoption using ArgoCD', 'Observability with AppDynamics, Dynatrace and Splunk', 'Mentoring DevOps engineers on Terraform, Jenkins, GitOps, Helm and Kubernetes']
  },
  {
    company: 'Talabat',
    role: 'Senior DevOps Engineer (SRE)',
    period: 'May 2019 – April 2023',
    points: ['Terraform-first infrastructure automation', 'Kubernetes platforms across EKS and GKE', 'Serverless systems using Lambda, SQS, SNS and API Gateway', 'Progressive delivery using Argo Rollouts, ArgoCD and Istio']
  },
  {
    company: 'Fidor Solutions',
    role: 'Senior DevOps Engineer (SRE)',
    period: 'July 2018 – April 2019',
    points: ['Kubernetes and Docker Swarm orchestration', 'Jenkins, Ansible, Terraform and CloudFormation automation', 'Prometheus, New Relic and ELK monitoring']
  },
  {
    company: 'Gemalto, StarzPlay & Unified Communications',
    role: 'DevOps / Systems Engineering',
    period: '2010 – 2018',
    points: ['AWS migration, Linux platforms, telecom systems and HA/DR engineering', 'CI/CD, infrastructure automation, cloud operations and enterprise support']
  }
]

const projects = [
  { title: 'KubeHealer', desc: 'AI-powered Kubernetes self-healing platform using ML and reinforcement learning for anomaly detection and automated remediation.' },
  { title: 'I Quit Scorer', desc: 'Production scoring web app built for multiplayer game tracking, score history and mobile-first usage.' },
  { title: 'Future Me', desc: 'Kubernetes-native RAG app that analyzes your entire GitHub commit history, builds a semantic vector database with Redis Stack and HuggingFace embeddings, and lets you chat with Groq Llama 3 to predict your future career trajectory.' },
  { title: 'Face Emotions Detector', desc: 'Real-time facial emotion detection using DeepFace and Streamlit — supports live webcam feed and image upload with multi-face analysis.' },
  { title: 'Banking Credit Eligibility (SVM)', desc: 'Credit card eligibility prediction using Support Vector Machine on a banking dataset, with feature scaling and model evaluation.' },
  { title: 'Wine Quality Prediction', desc: 'Wine class prediction using Logistic Regression with Lasso regularization and feature engineering on physicochemical properties.' },
  { title: 'Airbnb Revenue Prediction', desc: 'Rental income prediction using Logistic Regression and Random Forest on Airbnb listing data, comparing model performance across algorithms.' }
]

const awards = [
  'Najm Award from Emirates Airlines for Meal Voucher automation at Dubai Airports',
  'Special recognition at Talabat for end-to-end AWS infrastructure provisioning with Terraform',
  'Special Efforts Award from Gemalto for IBM Private Cloud to AWS migration',
  'MSc Data Science research recognition for AI-driven Kubernetes self-healing',
  'Redis Hackathon Winner — AI Tinkerers Dubai'
]

const certifications = ['CKA', 'CKAD', 'AWS Solutions Architect Associate', 'AWS Certified AI Practitioner', 'AWS Cloud Practitioner', 'New Relic Full Stack Observability Practitioner', 'ITIL Foundation', 'LPIC-1']

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string, title: string, subtitle?: string }) {
  return <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
    <h2 className="mt-3 text-3xl md:text-5xl font-bold">{title}</h2>
    {subtitle && <p className="mt-4 max-w-3xl text-slate-300 leading-7">{subtitle}</p>}
  </div>
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-[#0B1120]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">Aziz<span className="gradient-text">Zoaib</span></a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Dubai based Cloud Native & Platform Engineering Leader</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Aziz Zoaib</h1>
            <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">Platform Engineering Leader | DevOps Architect | Cloud Native Specialist</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">I design, build and operate resilient cloud platforms, Kubernetes ecosystems, DevOps transformation programs and AI-powered engineering solutions for enterprise-scale environments.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400" href="#contact">Contact Me</a>
              <a className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-slate-100 hover:border-cyan-300" href={links.linkedin} target="_blank">View LinkedIn</a>
              <a className="rounded-full border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-200 hover:bg-cyan-500/20" href="/aziz-zoaib-cv.pdf" download>Download CV</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {['15+ Years', 'AWS Azure GCP', 'Kubernetes SRE', 'AI + RAG'].map((item) => <div key={item} className="card rounded-2xl p-5 text-center font-bold">{item}</div>)}
            </div>
          </div>
          <div className="card rounded-[2rem] p-8">
            <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/50 p-8">
              <div className="flex justify-center mb-6">
                <img src="/aziz-zoaib.jpg" alt="Aziz Zoaib" className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400/40 shadow-lg" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Professional Focus</p>
              <div className="mt-8 space-y-5">
                {[['Cloud Architecture', Cloud], ['Kubernetes Platforms', Server], ['Security & Reliability', ShieldCheck], ['AI Engineering', Brain]].map(([label, Icon]: any) => <div key={label} className="flex items-center gap-4 rounded-2xl bg-slate-900/70 p-4"><Icon className="text-cyan-300" /><span>{label}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="About" title="Engineering reliable platforms for global enterprises" subtitle="With over 15 years of experience, I have worked across aviation, e-commerce, fintech, telecom and media platforms, helping organizations modernize infrastructure, improve reliability and accelerate delivery." />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card rounded-3xl p-7"><Trophy className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">Award Winning</h3><p className="mt-3 text-slate-300">Recognized for automation, cloud migration and infrastructure transformation work.</p></div>
          <div className="card rounded-3xl p-7"><GraduationCap className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">MSc Data Science</h3><p className="mt-3 text-slate-300">Combining platform engineering with AI, ML, RAG and automation use cases.</p></div>
          <div className="card rounded-3xl p-7"><Cloud className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">Cloud Native</h3><p className="mt-3 text-slate-300">Deep hands-on expertise across AWS, Azure, GCP, Kubernetes, OpenShift and Terraform.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Skills" title="Technology stack" />
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">{skill}</span>)}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Career" title="Experience timeline" />
        <div className="space-y-6">
          {experience.map(item => <div key={item.company} className="card rounded-3xl p-7">
            <div className="flex flex-col justify-between gap-2 md:flex-row"><div><h3 className="text-2xl font-bold">{item.company}</h3><p className="text-cyan-300">{item.role}</p></div><p className="text-slate-400">{item.period}</p></div>
            <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">{item.points.map(p => <li key={p}>• {p}</li>)}</ul>
          </div>)}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Projects" title="Featured work" subtitle="Selected projects across AI, Kubernetes, RAG systems, cloud platforms and production web applications." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => <div key={project.title} className="card rounded-3xl p-7"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-4 text-slate-300 leading-7">{project.desc}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Recognition" title="Awards & certifications" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card rounded-3xl p-7"><h3 className="text-2xl font-bold">Awards</h3><ul className="mt-5 space-y-3 text-slate-300">{awards.map(a => <li key={a}>• {a}</li>)}</ul></div>
          <div className="card rounded-3xl p-7"><h3 className="text-2xl font-bold">Certifications</h3><div className="mt-5 flex flex-wrap gap-3">{certifications.map(c => <span key={c} className="rounded-full bg-slate-900 px-4 py-2 text-sm">{c}</span>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Writing & Open Source" title="Community presence" />
        <div className="grid gap-6 md:grid-cols-3">
          <a className="card rounded-3xl p-7 hover:border-cyan-300" href={links.linkedin} target="_blank"><Linkedin className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">LinkedIn</h3><p className="mt-3 text-slate-300">Professional updates, cloud engineering and platform leadership.</p></a>
          <a className="card rounded-3xl p-7 hover:border-cyan-300" href={links.github} target="_blank"><Github className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">GitHub</h3><p className="mt-3 text-slate-300">Projects, experiments and engineering repositories.</p></a>
          <a className="card rounded-3xl p-7 hover:border-cyan-300" href={links.medium} target="_blank"><ExternalLink className="mb-4 text-cyan-300" /><h3 className="text-xl font-bold">Medium</h3><p className="mt-3 text-slate-300">Technical articles and cloud-native learning content.</p></a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="card rounded-[2rem] p-8 md:p-12">
          <SectionTitle eyebrow="Contact" title="Let’s build something great together" subtitle="Available for platform engineering leadership, DevOps transformation, cloud architecture, AI engineering and technical advisory opportunities." />
          <div className="grid gap-4 md:grid-cols-3">
            <a className="rounded-2xl bg-slate-900 p-5 hover:bg-slate-800" href={links.email}><Mail className="mb-3 text-cyan-300" />me@azizzoaib.com</a>
            <a className="rounded-2xl bg-slate-900 p-5 hover:bg-slate-800" href={links.whatsapp}><MessageCircle className="mb-3 text-cyan-300" />WhatsApp: +971 56 810 3175</a>
            <a className="rounded-2xl bg-slate-900 p-5 hover:bg-slate-800" href={links.phone}><Phone className="mb-3 text-cyan-300" />Call: +971 56 810 3175</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">© 2026 Aziz Zoaib. Built for azizzoaib.com.</footer>
    </main>
  )
}
