import "./Profile.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { LuCopy } from "react-icons/lu"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { FaDownload } from "react-icons/fa6"
import { PiMicrosoftOutlookLogo } from "react-icons/pi"
import { BiLogoGmail } from "react-icons/bi"
import { profileData } from "../../data/portfolioData"

const Profile = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profileData.email)
            .then(() => {
                toast.success("Email copied to clipboard!");
                setCopied(true);
            })
            .catch(() => toast.error("Failed to copy email."));
    };

    return (
        <div className='profile-main'>
            <div className="profile-container">
                <div className="profile-container-image">
                    <img src={profileData.image} alt={profileData.name} />
                </div>
                <div className="profile-container-text-parent">
                    <div className="profile-container-text">
                        <h2>{profileData.name}</h2>
                        <p>A <span className="highlight"> {profileData.role} </span> with <span className="highlight"> 2 years </span> of hands-on experience crafting clean, responsive, and user-friendly web interfaces.</p>
                    </div>
                    <div className="profile-container-button">
                        <button className="book">
                            <FaDownload className="profile-container-button-svg" />
                            <a href={profileData.resume} download className="anchor-book">Resume</a>
                        </button>
                        <button className="copy" onClick={handleCopyEmail}>
                            <LuCopy className="profile-container-button-svg" /> Copy Email
                        </button>
                    </div>
                    <div className="profile-container-icons">
                        <div className="profile-container-icon">
                            <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="profile-container-icon-svg" /></a>
                        </div>
                        <div className="profile-container-icon">
                            <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub className="profile-container-icon-svg" /></a>
                        </div>
                        <div className="profile-container-icon">
                            <a href={profileData.socials.outlook}><PiMicrosoftOutlookLogo className="profile-container-icon-svg" /></a>
                        </div>
                        <div className="profile-container-icon">
                            <a href={profileData.socials.gmail}><BiLogoGmail className="profile-container-icon-svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    )
}

export default Profile
