import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { dataBase } from '../dataBase';

class About extends Component {
    render() {
        
        const background = dataBase.about.background;
        const aboutPic = dataBase.about.aboutPic;
        const ourBusiness = dataBase.about.ourBusiness;
        const ourLocation = dataBase.about.ourLocation;
        const vmPicture = dataBase.about.visionMissionPic;

        return (
            <div style={{ backgroundImage: `url(${background})` }}>
                <Header />
                
                {/* Section 1 */}
                <div className='py-10'>
                    <div className='flex justify-center py-3 gap-8 items-center'>
                        <h1 className='about-shadow text-kuning font-esteban text-9xl'><u>WHO<br/> WE<br/> ARE.</u></h1>
                        <img src={aboutPic} alt='404' />
                    </div>
                </div>
                {/* End Section 1 */}

                {/* Section 2 */}
                <div className='bg-hijauTua px-12 py-16'>
                    <div>
                        <h2 className='about-shadow font-dosis text-kuning font-semibold text-5xl'>About Us</h2>
                        <p className='font-esteban text-hijauMuda py-10'>
                            We are a company that develops new ways to read books by combining a dedicated team 
                            with an easy to use interface. Our main product is a device that you can use offline 
                            and implements our groundbreaking technology. Our target audience is young adults.  
                            We want to convey a sense of comfort, while at the same tame being old-fashioned.
                        </p>
                    </div>
                    <div className='flex justify-center items-center gap-12'>
                        <div className='our-images'>
                            <img src={ourBusiness} alt='404' className='about-shadow'/>
                            <h3 className='text-images about-shadow font-dosis text-kuning text-3xl font-semibold'>
                                Our Business
                            </h3>
                        </div>
                        <div className='our-images'>
                            <img src={ourLocation} alt='404' className='about-shadow'/>
                            <h3 className='text-images about-shadow font-dosis text-kuning text-3xl font-semibold'>
                                Our Location
                            </h3>
                        </div>
                    </div>
                </div>
                {/* End Section 2 */}

                {/* Section 3 */}
                <div className='bg-hijauMuda px-12 py-16'>
                    <div className='items-center'>
                        <h2 className='about-shadow font-dosis text-hijauTua font-semibold text-5xl'>Our Vision & Mission</h2>
                        <div className='py-10 px-12 space-y-5 flex justify-center items-center gap-11'>
                            <img src={vmPicture} width='40%' alt='404' />
                            <div className='about-vm py-7 px-5'>
                                <div className='py-5'>
                                    <h3 className='about-shadow font-dosis text-black font-semibold text-3xl py-3'>
                                        Our Vision
                                    </h3>
                                    <p className='about-shadow font-esteban text-cokelat text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <hr className='about-hr'></hr>
                                <div className='py-5'>
                                    <h3 className='about-shadow font-dosis text-black font-semibold text-3xl py-3'>
                                        Our Mission
                                    </h3>
                                    <p className='about-shadow font-esteban text-cokelat text-lg'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Section 3 */}
                <Footer />
            </div>
        );
    }
}

export default About;