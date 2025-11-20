import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faSquareXTwitter,
    faSquareInstagram,
    faSquareGithub
} from '@fortawesome/free-brands-svg-icons';

function About() {
        useEffect(() => {
        document.title = 'OBTION | About Us';
      }, []); 
    return (
        
        <main>
            <section className="about-container">
                <h1 className="about-head">ABOUT US</h1>
                <p className="about-caption">"We are here to help you organize your ideas with Obtion"</p>

                <div className="about-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
                </div>
                <div className="about-description">
                    <p>
                        Obtion is a simple and intuitive notes-taking platform designed to make organizing your thoughts
                        easier than ever.
                        With Obtion, you can quickly create, edit, and manage notes all in one place. Whether it's jotting
                        down ideas,
                        preparing study material, or keeping track of daily tasks, Obtion helps you stay productive and
                        focused.
                    </p>
                    <br />
                    <p>
                        Unlike traditional note apps, Obtion focuses on simplicity and speed, giving you only the tools you
                        need without unnecessary distractions. Features like easy organization, folder support, and quick
                        editing make it a practical choice for anyone who values productivity and clarity.
                    </p>
                    <p>
                        Built with a clean and user-friendly interface, Obtion ensures that you can access your notes
                        anytime, anywhere whether on desktop or mobile. Our goal is to provide a distraction-free space
                        where students,
                        professionals,
                        and everyday users can capture their ideas without hassle.
                    </p>
                    <br />
                    <div className="team-members">
                        <div className="team-member">
                            <div className="member-initial">
                                <img className="member-img" src="/images/member1.png" alt="Team Member 1" />
                                <p className="member-head">Hirdepal Singh</p>
                            </div>
                            <p className="member-details">"The idea came while struggling with messy notes, We wanted something
                                cleaner, smarter, and faster."</p>
                            <div className="member-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
                            </div>
                        </div>

                        <div className="team-member">
                            <div className="member-initial">
                                <img className="member-img" src="/images/member2.png" alt="Team Member 2" />
                                <p className="member-head">Jaijit Singh</p>
                            </div>
                            <p className="member-details">"I imagined a space where creativity meets productivity, and notes
                                adapt exactly to the user's needs."</p>
                            <div className="member-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="team-members">
                        <div className="team-member">
                            <div className="member-initial">
                                <img className="member-img" src="/images/member3.png" alt="Team Member 3" />
                                <p className="member-head">Jaskirat Singh</p>
                            </div>
                            <p className="member-details">"The thought was simple — why not build a platform that organizes
                                knowledge as effortlessly as possible?"</p>
                            <div className="member-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
                            </div>
                        </div>

                        <div className="team-member">
                            <div className="member-initial">
                                <img className="member-img" src="/images/member4.png" alt="Team Member 4" />
                                <p className="member-head">Manav Mandal</p>
                            </div>
                            <p className="member-details">"We saw students wasting time searching notes; Obtion was born to save
                                effort and enhance focus"</p>
                            <div className="member-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
                            </div>
                        </div>

                    </div>
                    <br />
                    <p>We are the team behind Obtion, a simple and powerful notes-taking platform designed to make
                        organizing thoughts effortless. Our team — Hirdepal Singh, Jaijit Singh, Jaskirat Singh, and Manav
                        Mandal — shares a vision of creating tools that are intuitive, accessible, and built for everyone.
                        With Obtion, we aim to combine creativity and technology to deliver a seamless note-taking
                        experience.</p>
                    <br />
                    <p>
                        At Obtion, we believe note-taking should be simple, fast, and effective. That's why we've created a
                        platform
                        that focuses on the essentials, while keeping your experience smooth and reliable.
                    </p>
                    <br />
                    <p>
                        In the future, Obtion aims to evolve with user feedback, constantly improving and adding thoughtful
                        features that empower individuals to learn better, work smarter, and stay organized in every aspect
                        of life.
                    </p>
                </div>


                <p className="about-end">"We will continue to help students through our Products"</p>
            </section>
        </main>
    );
}

export default About;