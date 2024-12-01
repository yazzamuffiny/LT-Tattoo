import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import useFetchLogo from '../../hooks/useFetchLogo'; 

const Footer = () => {
    const logoUrl = useFetchLogo();

    return (
        <footer>
            <div className='footer-logo'>
                <img src={logoUrl || './logo.png'} alt="LT Tattoo" />
            </div>
            <div className='footer-icons'>
                <a href="https://www.instagram.com/lonetaiulu_tattoo/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram className='socialIcon' />
                </a>
                <a href="https://www.facebook.com/LonetaiuluTattoo" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook className='socialIcon' />
                </a>
                <a href="https://www.tiktok.com/@lonetaiulu_tatau" target="_blank" rel="noopener noreferrer">
                    <AiFillTikTok className='socialIcon' />
                </a>
            </div>
            <div className='footer-address'>
                <p>Shop 4/42</p>
                <p>Commerce Street</p>
                <p>Kaitaia 0410</p>
            </div>
            <div className='footer-copy'>
                <FaRegCopyright /> Copyright LT Tattoo 2024
            </div>
        </footer>
    );
};

export default Footer;
