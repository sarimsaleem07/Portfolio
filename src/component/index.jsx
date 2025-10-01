import { lazy } from "react"

const ExperianceProjects = lazy(() => import("./experianceProjects/ExperianceProjects"));
const Faqs = lazy(() => import("./faqs/Faqs"));
const Footer = lazy(() => import("./footer/Footer"));
const Form = lazy(() => import("./form/Form"));
const LatestProjects = lazy(() => import("./latestProjects/LatestProjects"));
const Map = lazy(() => import("./map/Map"));
const Navbar = lazy(() => import("./nav/Navbar"));
const Wrapper = lazy(() => import("./pageWrapper/Wrapper"));
const PersonalInfo = lazy(() => import("./personalInfo/PersonalInfo"));
const Products = lazy(() => import("./products/Products"));
const Profile = lazy(() => import("./profile/Profile"));
const ServicesOffered = lazy(() => import("./servicesOffered/ServicesOffered"));
const Testimonials = lazy(() => import("./testimonials/Testimonials"));
const WorkTogether = lazy(() => import("./worktogether/WorkTogether"));



export {
    ExperianceProjects,
    Faqs,
    Footer,
    Form,
    LatestProjects,
    Map,
    Navbar,
    Wrapper,
    PersonalInfo,
    Products,
    Profile,
    ServicesOffered,
    Testimonials,
    WorkTogether
}