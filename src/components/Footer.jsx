import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faSquareXTwitter, 
  faSquareInstagram, 
  faSquareGithub 
} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log("Footer form submitted:", data);
        alert("Thanks for your message!");
        reset();
    };

    return(
        <footer>
            <section className="footer-wrapper">
                <div className="divider">
                    <img src="/images/divider.png" alt="divider" />
                </div>
                <div className="links-wrapper">
                    <div className="footer-links">
                        <p>Quick Links</p>
                        <Link to="/">Home</Link>
                        <Link to="/support">Support</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/faq">FAQs</Link>
                    </div>
                    <div className="footer-links">
                        <p>Social Media</p>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareXTwitter} /> X.com
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareInstagram} /> Instagram
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} /> GitHub
                        </a>
                    </div>
                    <div className="footer-contact">
                        <p>Contact Us</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="email" 
                                placeholder="Enter your E-mail" 
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />

                            <textarea 
                                cols="30" 
                                rows="3" 
                                placeholder="Your Message" 
                                {...register("message", { required: true })}
                            ></textarea>

                            <button type="submit" className="footer-btn">Send</button>
                        </form>
                    </div>
                </div>
                <div className="footer-end">
                    <p>Copyright &copy; 2025-2026 | All Rights Reserved</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;