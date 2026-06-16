import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
// import jsIcon from '../assets/javascript.png'
import jsIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
// import bootstrapIcon from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.svg'
import sassIcon from '../assets/sass.png'
import kamelpayLogo from '../assets/kamelpay-logo.png'
import cave1 from '../assets/projects/cave-1.webp'
import cave2 from '../assets/projects/cave-2.png'
import cave3 from '../assets/projects/cave-3.png'
import cave4 from '../assets/projects/cave-4.png'
import cave5 from '../assets/projects/cave-5.png'
import silvermoon1 from '../assets/projects/silvermoon-1.webp'
import silvermoon2 from '../assets/projects/silvermoon-2.png'
import silvermoon3 from '../assets/projects/silvermoon-3.png'
import silvermoon4 from '../assets/projects/silvermoon-4.png'
import tecnomedia1 from '../assets/projects/tecnomedia-1.webp'
import tecnomedia2 from '../assets/projects/tecnomedia-2.png'
import tecnomedia3 from '../assets/projects/tecnomedia-3.png'
import tecnomedia4 from '../assets/projects/tecnomedia-4.png'
import tecnomedia5 from '../assets/projects/tecnomedia-5.png'
import hikma1 from '../assets/projects/hikma-1.webp'
import hikma2 from '../assets/projects/hikma-2.png'
import hikma3 from '../assets/projects/hikma-3.png'
import hikma4 from '../assets/projects/hikma-4.png'
import hikma5 from '../assets/projects/hikma-5.png'
import s1 from '../assets/servicesOffered1.svg'
import s2 from '../assets/servicesOffered2.svg'
import s3 from '../assets/servicesOffered3.svg'
import s4 from '../assets/servicesOffered4.svg'
import s5 from '../assets/servicesOffered5.webp'
import s6 from '../assets/servicesOffered6.webp'
import s7 from '../assets/servicesOffered7.svg'
import s8 from '../assets/servicesOffered8.svg'
import profileImg from "../assets/image.png"
import resumePdf from "../assets/Sarim' s Resume.pdf"

export const profileData = {
  name: 'Sarim Salim',
  role: 'Frontend Developer',
  bio: 'A Frontend Developer with 2 years of hands-on experience crafting clean, responsive, and user-friendly web interfaces.',
  email: 'sarimsaleem07@gmail.com',
  image: profileImg,
  resume: resumePdf,
  socials: {
    linkedin: 'https://www.linkedin.com/in/sarim-salim-7b96a92aa/',
    github: 'https://github.com/sarimsaleem?tab=repositories',
    whatsapp: 'https://wa.me/923308639737',
    gmail: 'mailto:sarimsaleem07@gmail.com',
  },
}

export const navLinks = [
  { path: '/home', label: 'Home', icon: 'ri-home-smile-2-line' },
  { path: '/about', label: 'About', icon: 'ri-pass-pending-line' },
  { path: '/services', label: 'Services', icon: 'ri-stack-line' },
  { path: '/works', label: 'Works', icon: 'ri-clapperboard-line' },
  { path: '/contact', label: 'Contact', icon: 'ri-message-line' },
]

export const heroStats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '4', label: 'Live Products' },
]

export const workExperience = [
  { period: '2023 – 2024', company: 'KamelPay', role: 'Intern Frontend Developer', logo: kamelpayLogo },
  { period: '2024 – Present', company: 'KamelPay', role: 'Junior Frontend Developer', logo: kamelpayLogo },
]

export const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'REACT', icon: reactIcon },
  { name: 'JAVASCRIPT', icon: jsIcon },
  { name: 'BOOTSTRAP', icon: tailwind },
  { name: 'SASS', icon: sassIcon },
]

export const homeServices = [
  { image: s1, title: 'UI/UX Design' },
  { image: s2, title: 'Web Development' },
  { image: s3, title: 'Product Design' },
  { image: s4, title: 'Web Design' },
]

export const allServices = [
  { image: s1, title: 'UI/UX Design' },
  { image: s2, title: 'Web Development' },
  { image: s3, title: 'Responsive Design' },
  { image: s7, title: 'Product Design' },
  { image: s5, title: 'Code Refactoring & Cleanup' },
  { image: s6, title: 'Maintenance & Updates' },
  { image: s4, title: 'Cross-Browser Compatibility' },
  { image: s8, title: 'Bug Fixing & UI Debugging' },
]

export const projects = [
  {
    images: [cave1, cave2, cave3, cave4, cave5],
    title: 'Cave Counselling',
    subtitle: 'Mental Health Counselling Platform',
    role: 'Product Designer | UI/UX Specialist',
    description: 'A welcoming digital space for mental health services, designed to reduce stigma and make counselling feel accessible and safe.',
    tags: ['UI/UX Design', 'Web Design', 'Figma'],
    link: 'https://cavecounselling.com/',
  },
  {
    images: [silvermoon1, silvermoon2, silvermoon3, silvermoon4],
    title: 'Silver Moon Debt Collection',
    subtitle: 'Professional Debt Collection Website',
    role: 'Web Designer | Frontend Developer',
    description: 'A professional, trust-building website for a debt collection firm emphasising credibility, transparency, and clear calls-to-action.',
    tags: ['Web Design', 'React', 'Branding'],
    link: 'https://www.silvermoondebtcollection.com/',
  },
  {
    images: [tecnomedia1, tecnomedia2, tecnomedia3, tecnomedia4, tecnomedia5],
    title: 'Techno Media',
    subtitle: 'Exhibition Fabrication & Event Solutions',
    role: 'Web Designer | Product Designer',
    description: 'Modern web presence for an exhibition fabrication company in Pakistan, showcasing services and driving B2B enquiries.',
    tags: ['Web Design', 'Product Design', 'UI/UX'],
    link: 'https://tecno-media.vercel.app/',
  },
  {
    images: [hikma1, hikma2, hikma3, hikma4, hikma5],
    title: 'Get Hikma',
    subtitle: 'Online Tutoring Platform',
    role: 'Frontend Developer | UI/UX Design',
    description: 'A comprehensive EdTech platform connecting students with tutors globally for one-on-one sessions, group classes, and progress tracking.',
    tags: ['React', 'UI/UX Design', 'EdTech'],
    link: 'https://sarimsaleem.github.io/Get-Hikma/',
  },
]

export const testimonials = [
  {
    rating: 5,
    text: "Working with Sarim has been a game-changer for our team. The frontend he built was pixel-perfect, responsive across all devices, and delivered faster than expected. His attention to detail and clean code really stood out.",
    name: 'Oliver Clain',
    role: 'Product Designer',
  },
  {
    rating: 5,
    text: "Sarim understood our vision instantly and turned it into a beautiful, functional site. He's super easy to work with and communicates clearly throughout the process. Highly recommended!",
    name: 'Lena Martinez',
    role: 'Startup Founder',
  },
  {
    rating: 5,
    text: "We hired Sarim for a redesign of our company dashboard. He worked seamlessly with our backend team and brought the UI to life with smooth animations and fast load times. Fantastic experience.",
    name: "James O'Neil",
    role: 'Technical Project Manager',
  },
  {
    rating: 5,
    text: "I've worked with several developers, but Sarim stands out. He not only writes solid, maintainable code but also thinks like a designer. The final product looked amazing and worked flawlessly.",
    name: 'Amina Reza',
    role: 'UX Lead',
  },
  {
    rating: 5,
    text: "Sarim delivered exactly what we needed — a clean, modern website for our agency that loads fast and looks sharp on every device. Plus, he provided clear documentation so we can manage updates easily.",
    name: 'Ben Carter',
    role: 'Creative Agency Owner',
  },
  {
    rating: 5,
    text: "I needed a personal portfolio that would help me land clients, and Sarim nailed it. From layout to performance to SEO, everything was on point. Got compliments on it the same day it launched!",
    name: 'Priya Das',
    role: 'Freelance Photographer',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and requirements through a detailed brief or kick-off call.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Crafting wireframes and high-fidelity mockups in Figma, aligned with your brand and user expectations.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building a responsive, performant frontend with clean, maintainable code and modern best practices.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Final QA, deployment, and handoff — with post-launch support to ensure everything runs flawlessly.',
  },
]

export const faqs = [
  {
    id: 1,
    title: 'What technologies do you use?',
    description: 'I specialize in HTML, CSS, JavaScript, and frameworks like React, Next.js, Tailwind CSS, and Bootstrap. I also work with APIs, version control (Git), and tools like Vercel, Netlify, and Figma for collaboration.',
  },
  {
    id: 2,
    title: 'Can you make the site mobile responsive?',
    description: 'Absolutely! Every site I build is fully responsive and works smoothly across all devices — mobile, tablet, and desktop.',
  },
  {
    id: 3,
    title: 'Will you design the website or just code it?',
    description: "I can either work with a designer's mockup (like from Figma or Adobe XD), or if needed, I can help design basic layouts myself using modern UI tools and best practices.",
  },
  {
    id: 4,
    title: 'How long will it take to complete my website?',
    description: "It depends on the size and complexity. A simple 1–2 page site can take 2–5 days. Larger, dynamic websites or dashboards may take 1–3 weeks. I'll provide a clear timeline after understanding your project.",
  },
  {
    id: 5,
    title: 'How much will it cost?',
    description: "Pricing varies based on scope. I usually charge per project or offer fixed-price packages for common needs (like landing pages, portfolios, or business sites). Let's talk about your budget — I'm flexible!",
  },
  {
    id: 6,
    title: 'Do you offer design revisions?',
    description: "Yes — I usually include 1–2 rounds of revisions in my packages to make sure you're happy with the result.",
  },
  {
    id: 7,
    title: 'Do you provide maintenance or updates after the project is finished?',
    description: 'Yes, I offer optional maintenance packages or hourly support after the launch for updates, bug fixes, or improvements.',
  },
]
