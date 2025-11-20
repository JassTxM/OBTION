import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPenToSquare,
    faTrashArrowUp,
    faMarker,
    faSitemap,
    faCloudArrowUp,
    faFileShield,
    faWandMagicSparkles,
    faRectangleList,
    faFileWord,
    faLightbulb,
    faTags,
    faHighlighter,
    faServer,
    faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';

function Home() {
    useEffect(() => {
        document.title = 'OBTION | Home';
    }, []);

    return (
        <main>
            <section className="hero">
                <p className="hero-title">OBTION</p>
                <p className="hero-description">
                    An AI Integrated Notes-Taking Web Applicaton for Students
                </p>
                <img className="hero-img" src="/images/hero.png" alt="hero" />
            </section>

            <section className="main-features">
                <div className="fe-grid">
                    <div className="fe-row-1">
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faNoteSticky} /></p>
                            <p className="fe-head">Create Notes</p>
                            <p className="fe-desc">Easily add new notes.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faPenToSquare} /></p>
                            <p className="fe-head">Edit Notes</p>
                            <p className="fe-desc">Update and modify content.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faTrashArrowUp} /></p>
                            <p className="fe-head">Delete Notes</p>
                            <p className="fe-desc">Remove unwanted notes quickly.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faMarker} /></p>
                            <p className="fe-head">Markdown Support</p>
                            <p className="fe-desc">Write with MD formatting.</p>
                        </div>
                    </div>
                    <div className="fe-row-2">
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faSitemap} /></p>
                            <p className="fe-head">Organize Notes</p>
                            <p className="fe-desc">Use tags or categories.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faCloudArrowUp} /> </p>
                            <p className="fe-head">Auto-Save</p>
                            <p className="fe-desc">Saves while typing automatically.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faFileShield} /> </p>
                            <p className="fe-head">Secure Login</p>
                            <p className="fe-desc"> Safe authentication system.</p>
                        </div>
                        <div className="fe-item">
                            <p className='fe-icon'><FontAwesomeIcon icon={faWandMagicSparkles} /></p>
                            <p className="fe-head">Theme Modes</p>
                            <p className="fe-desc"> Switch between light/dark.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ai-details">
                <h1 className="ai-head">Notes with an AI Assistant</h1>
                <p className="ai-subhead">Create notes efficiently with our OBTION AI</p>
                <img className="ai-img" src="/images/ai.png" alt="ai" />
                <p className="ai-downhead">What OBTION AI can do?</p>
                <div className="ai-wrapper">
                    <div className="ai-features">
                        <div className="ai-item">
                            <p className='ai-icon'><FontAwesomeIcon icon={faRectangleList} /></p>
                            <p className="ai-item-head">Smart Summarization</p>
                            <p className="ai-item-desc">Shortens notes into key points.</p>
                        </div>
                        <div className="ai-item">
                            <p className='ai-icon'><FontAwesomeIcon icon={faFileWord} /></p>
                            <p className="ai-item-head">Keyword Extraction</p>
                            <p className="ai-item-desc">Finds important words in notes.</p>
                        </div>
                        <div className="ai-item">
                            <p className='ai-icon'><FontAwesomeIcon icon={faLightbulb} /></p>
                            <p className="ai-item-head">Idea Expansion</p>
                            <p className="ai-item-desc">Suggests more ideas for writing.</p>
                        </div>
                    </div>
                    <div className="ai-features">
                        <div className="ai-item">
                            <p className='ai-icon'><FontAwesomeIcon icon={faTags} /></p>
                            <p className="ai-item-head">Tag Suggestions</p>
                            <p className="ai-item-desc">Auto tags notes for organizing.</p>
                        </div>

                        <div className="ai-item">
                            <p className='ai-icon'><FontAwesomeIcon icon={faHighlighter} /></p>
                            <p className="ai-item-head">Highlighter</p>
                            <p className="ai-item-desc">Marks key sections for attention.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="second-brain">
                <img className="brain-img" src="/images/brain.png" alt="brain" />
                <div className="brain-text">
                    <h1 className="brain-head">Give Your Brain Superpower</h1>
                    <p className="brain-caption">
                        Unlock your full potential with neatly organized notes <br /> OBTION
                        makes studying smarter, faster, and stress-free.
                    </p>
                    <img
                        className="brain-features"
                        src="/images/brain-features.png"
                        alt="brain features"
                    />
                </div>
            </section>

            <section className="info-radar">
                <img className="radar-img" src="/images/data.png" alt="radar" />
                <h1 className="radar-head">Never Lose Information</h1>
                <p className="radar-caption">
                    OBTION ensures your notes stay safe, organized, <br /> and always
                    accessible whenever you need them.
                    <br />
                </p>
                <div className="radar-items">
                    <div className="radar-item">
                        <p className='radar-icon'><FontAwesomeIcon icon={faServer} /></p>
                        <p className="radar-item-head">Integrated with your devices</p>
                        <p className="radar-item-desc">
                            We're everywhere, mobile or desktop, online or offline.
                        </p>
                    </div>
                    <div className="radar-item">
                        <p className='radar-icon'><FontAwesomeIcon icon={faShieldHalved} /></p>
                        <p className="radar-item-head">Secure but open</p>
                        <p className="radar-item-desc">
                            End-to-end encryptpion keeps your notes secure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="encrypt-info">
                <img
                    className="encrypt-img"
                    src="/images/encrypt.png"
                    alt="encryption"
                />
                <div className="encrypt-text">
                    <h1 className="encrypt-head">Hardened Security</h1>
                    <p className="encrypt-caption">
                        The contents of your notes are end-to-end encrypted.
                        <br />
                        No one else can read them (not even us).
                    </p>
                </div>
            </section>

            <section className="review">
                <img className="review-img" src="/images/review.png" alt="reviews" />
            </section>

            <section className="globe">
                <Link to="/about">
                    <button type="button" className="globe-button">
                        About Us
                    </button>
                </Link>
                <h1 className="globe-head">We're an Indie Team</h1>
                <p className="globe-caption">
                    Our mission is to improve the way people think by making a jolly good
                    note-taking app.
                </p>
                <img className="globe-img" src="/images/globe.png" alt="globe" />
            </section>

            <section className="home-end">
                <h1 className="end-head">Think Better With OBTION</h1>
                <p className="end-caption">Never miss a note, idea or connection</p>
                <Link to="/signup">
                    <button type="button" className="end-button">
                        Get Started
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Home;