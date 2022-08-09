import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="footer p-10 bg-base-100 text-base-content border-t-2 border-t-bg-primary py-8">
                <div>
                    <img src="https://i.ibb.co/ZYvPrs9/logo-footer-1.webp" alt="footer logo" />
                    <span></span>
                </div>
                <div>
                    <span class="footer-title uppercase">top cities</span>
                    <a href='#' class="capitalize">dhaka</a>
                    <a href='#' class="capitalize">chittagong</a>
                    <a href='#' class="capitalize">rajshahi</a>
                    <a href='#' class="capitalize">cox'bazar</a>
                    <a href='#' class="capitalize">narayangong</a>
                </div>
                <div>
                    <span class="footer-title uppercase">categories</span>
                    <a href="#" className='capitalize'>vegetables</a>
                    <a href="#" className='capitalize'>grocery & staples</a>
                    <a href="#" className='capitalize'>breakfast & dairy</a>
                    <a href="#" className='capitalize'>soft drinks</a>
                    <a href="#" className='capitalize'>biscuits & cookies</a>
                </div>
                <div>
                    <span class="footer-title uppercase">about us</span>
                    <a class="capitalize">company information</a>
                    <a class="capitalize">careers</a>
                    <a class="capitalize">store location</a>
                    <a class="capitalize">affiliate program</a>
                    <a class="capitalize">copyright</a>
                </div>
                <div>
                    <span class="footer-title uppercase">download app</span>
                    <a href="#" className='w-32'>
                        <img src="https://i.ibb.co/k1KMdct/google.webp" alt="google" />
                    </a>
                    <a href="#" className='w-32'>
                        <img src="https://i.ibb.co/xHT65H1/apple.webp" alt="apple" />
                    </a>
                </div>
            </footer>
            <footer class="footer footer-center items-center p-4 bg-neutral text-neutral-content">
                <p className='text-center'>Copyright © 2022 - All right reserved</p>
            </footer>
        </>
    );
};

export default Footer;