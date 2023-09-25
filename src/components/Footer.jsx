import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    const linkedin = 'https://www.linkedin.com/in/adistyaoktaviano/'
    const ig = 'https://www.instagram.com/adstyx_/'
    const wa = 'https://wa.me/6281804257664'

    return (
        <footer className="Footer">
        <div className="Footer-container">
            <div className="Footer-wrapper">
            <div className="Footer-about" id='about'>
                <h3>About</h3>
                <p>A simple movie finder website made with TMDB API</p>
            </div>
            <div className="Footer-contact" id='contact'>
                <h3>Contact</h3>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                 <i className="fa fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a href={ig} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-brands fa-instagram fa-lg"></i>
                </a>
                <a href={wa} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-brands fa-whatsapp fa-lg"></i>
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
    }

export default Footer;
