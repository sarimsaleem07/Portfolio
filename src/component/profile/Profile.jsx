import "./Profile.css"
import profileImg from "../../assets/profile-img.png"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { LuCopy } from "react-icons/lu"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { FaDownload } from "react-icons/fa6"
import { PiMicrosoftOutlookLogo } from "react-icons/pi"
import { BiLogoGmail } from "react-icons/bi"

const Profile = () => {

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = "sarimsaleem07@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                toast.success("Email copied to clipboard!");
                setCopied(true);
            })
            .catch(() => {
                toast.error("Failed to copy email.");
            });
    };

    return (
        <div className='profile-main'>
            <div className="profile-container">
                <div className="profile-container-image">
                    <img src={profileImg} alt="" />
                </div>
                <div className="profile-container-text-parent">
                    <div className="profile-container-text">
                        <h2>Sarim Salim</h2>
                        <p>A passionate <span className="highlight"> Frontend Developer </span> with <span className="highlight"> 2 years </span> of hands-on experience crafting clean, responsive, and user-friendly web interfaces.  </p>
                    </div>
                    <div className="profile-container-button">

                        <button className="book"><FaDownload className="profile-container-button-svg" /><a href="../../assets/Sarim'sResume.pdf" download className="anchor-book">Resume</a></button>
                        <button className="copy" onClick={handleCopyEmail} ><LuCopy className="profile-container-button-svg" /> Copy Email</button>
                    </div>
                    <div className="profile-container-icons">
                        <div className="profile-container-icon"><a href="https://www.linkedin.com/in/sarim-salim-7b96a92aa/" target="main"><FaLinkedin className="profile-container-icon-svg" /></a></div>
                        <div className="profile-container-icon"><a href="https://github.com/sarimsaleem?tab=repositories" target="main"><FaGithub className="profile-container-icon-svg" /></a></div>
                        <div className="profile-container-icon"><a href="mailto:Muhammad.Sarim@kamelpay.com" target="main"><PiMicrosoftOutlookLogo className="profile-container-icon-svg" /></a></div>
                        <div className="profile-container-icon"><a href="mailto:sarimsaleem07@gmail.com" target="main"><BiLogoGmail className="profile-container-icon-svg" /></a></div>
                    </div>
                </div>
            </div>

            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    )
}

export default Profile
