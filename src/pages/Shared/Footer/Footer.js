import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container'>
            <div className="left">
                <h3 className="logo">
                    Rakibul
                </h3>
                <p className="dec">
                There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
                </p>
            </div>
            <div className="center">
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
            <div className="right"></div>
        </div>
    );
};

export default Footer;