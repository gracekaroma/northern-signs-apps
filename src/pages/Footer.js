import React, { Component } from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../dataBase";

class Footer extends Component {
    render() {

        const footerLogo = dataBase.main.footerLogo;
        const instagramLogo = dataBase.main.instagram;
        const twitterLogo = dataBase.main.twitter;
        const facebookLogo = dataBase.main.facebook;

        return (
            <footer className="bg-cokelat py-6">
                <div>
                    <ul className="flex justify-between items-center px-14 py-5">
                        <li>
                            <Link to="/"><img src={footerLogo} alt="404" /></Link>
                            <p className="font-esteban text-hijauMuda py-1">Always give you the best for living.</p>
                        </li>
                        <li>
                            <p className="font-dosis text-3xl text-hijauMuda font-semibold text-center">Follow Us</p>
                            <div className="flex justify-center gap-5 py-3">
                                <a href="https://www.instagram.com/">
                                    <img src={instagramLogo} alt="404"/>
                                </a>
                                <a href="https://twitter.com/">
                                    <img src={twitterLogo} alt="404" />
                                </a>
                                <a href="https://www.facebook.com/">
                                    <img src={facebookLogo} alt="404" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <hr className="hr" />
                    <ul className="flex justify-between px-14 py-5 items-center">
                        <li>
                            <p className="font-esteban text-md text-hijauMuda">
                                &copy; Copyright 2023  &bull; Design by Grace Karoma
                            </p>
                        </li>
                        <li>
                            <div className="flex justify-center gap-5">
                                <a href="/policy" className="font-dosis text-lg text-hijauMuda font-semibold">
                                    Privacy Policy
                                </a>
                                <a href="/tm" className="font-dosis text-lg text-hijauMuda font-semibold">
                                    Terms & Condition
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;