import React, { useState, useEffect } from "react";

function FAQ() {

        useEffect(() => {
        document.title = 'OBTION | FAQs';
      }, []); 
    const [openId, setOpenId] = useState(null);

    const toggleAnswer = (id) => {
        if (openId === id) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    };

    return (
        <main>
            <section className="faq-wrapper">
                <div className="faq-head">
                    <h1 className="faq-title">FAQs</h1>
                    <p className="faq-subtext">
                        At Obtion, we make note-taking simple and easy. If you have any questions or need assistance,
                        <br /> feel free to reach out at
                        <a href="mailto:support@obtion.com">support@obtion.com</a>
                        or call us at
                        <span className="phone-number">+91 12345-67890</span>
                    </p>
                </div>
                <div className="faq-center">
                    <div className="faq-container">
                        
                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer1')}>
                                <span className="faq-plus">{openId === 'answer1' ? '-' : '+'}</span> What is Obtion?
                            </div>

                            <div className="faq-answer" style={{ display: openId === 'answer1' ? 'block' : 'none' }}>
                                Obtion is a simple notes-taking platform that helps you create, organize, and manage your notes easily.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer2')}>
                                <span className="faq-plus">{openId === 'answer2' ? '-' : '+'}</span> How can I create a note?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer2' ? 'block' : 'none' }}>
                                Sign in and click the "New Note" button. You can add text, images, and format your notes easily.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer3')}>
                                <span className="faq-plus">{openId === 'answer3' ? '-' : '+'}</span> Can I edit or delete my notes?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer3' ? 'block' : 'none' }}>
                                Yes! You can edit any note anytime and delete notes you no longer need.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer4')}>
                                <span className="faq-plus">{openId === 'answer4' ? '-' : '+'}</span> Can I access Obtion on mobile devices?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer4' ? 'block' : 'none' }}>
                                Yes, Obtion works smoothly on phones, tablets, and desktops.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer5')}>
                                <span className="faq-plus">{openId === 'answer5' ? '-' : '+'}</span> Can I share my notes with others?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer5' ? 'block' : 'none' }}>
                                Yes! You can share your notes with friends or colleagues through a shareable link.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer6')}>
                                <span className="faq-plus">{openId === 'answer6' ? '-' : '+'}</span> What if I face technical issues?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer6' ? 'block' : 'none' }}>
                                Contact our support team via the "Contact Us" page, and we’ll assist you promptly.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer7')}>
                                <span className="faq-plus">{openId === 'answer7' ? '-' : '+'}</span> Can I organize notes by folders or tags?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer7' ? 'block' : 'none' }}>
                                Yes, you can organize your notes using folders, tags, or categories for easier access.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer('answer8')}>
                                <span className="faq-plus">{openId === 'answer8' ? '-' : '+'}</span> Do I need an account to use Obtion?
                            </div>
                            <div className="faq-answer" style={{ display: openId === 'answer8' ? 'block' : 'none' }}>
                                Yes, signupg up with an email or Google account is required to create and save your notes.
                            </div>
                        </div>
                    </div>
                    <p className="powered-by-text">Powered by Obtion, your simple and easy notes-taking platform.</p>
                </div>
            </section>
        </main>
    );
}

export default FAQ;