import React, { Component } from 'react';
import { dataBase } from '../dataBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBookOpen, faCartShopping, faCouch, faHandsBubbles, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../css/styles.css';

class Home extends Component {
    render() {
        if (!dataBase) return null;

        const bgPicture = dataBase.main.bgPic;
        const title = dataBase.main.home;
        const shopping = dataBase.main.shopping;

        return (
            <section id='Home'>
                {/* Section 1 */}
                <div style={{ backgroundImage: `url(${bgPicture})` }}>
                    <Header />
                    <h1 className='title-home font-dosis font-semibold text-kuning text-center'>{title}</h1>
                    
                    <div className='text-center'>
                        <button className='hover:bg-kuning bg-cokelat rounded-full px-16 py-6'>
                            <Link to="/About" className='font-dosis text-kuning hover:text-cokelat text-center text-3xl font-bold'>Learn More</Link>
                        </button>
                    </div>

                    <div className='py-24 text-center'>
                        <button className='bg-cokelat hover:bg-kuning px-6 py-5 rounded-full'>
                            <FontAwesomeIcon icon={faArrowDown} size='xl' className='text-kuning hover:text-cokelat'/>
                        </button>
                    </div>
                </div>
                {/* End Section 1 */}

                {/* Section 2 */}
                <div className='bg-cokelat py-16'>
                    <div>
                        <h1 className='font-dosis text-6xl text-kuning font-semibold text-center'>Our Core Value</h1>    
                    </div>

                    <div className='space-y-4 py-10'>
                        <div className='flex justify-center gap-5 text-center px-5'>
                            <div className='our-values rounded-3xl py-9 px-16'>
                                <FontAwesomeIcon icon={faLightbulb} size='2xl'/>
                                <h2 className='text-kuning font-dosis font-semibold'>New Breakthroughs</h2>
                                <p className='text-hijauMuda font-esteban'>Our product always use groundbreaking technology to help<br/> client easy living.</p>
                            </div>
                            <div className='our-values rounded-3xl py-9 px-16'>
                                <FontAwesomeIcon icon={faHandsBubbles} size='2xl' />
                                <h2 className='text-kuning font-dosis font-semibold'>Easy To Use</h2>
                                <p className='text-hijauMuda font-esteban'>The product our company make, always think about client experience. Such as easy to use interface and interactive pages.</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-5 text-center px-5'>
                            <div className='our-values rounded-3xl py-9 px-16'>
                                <FontAwesomeIcon icon={faCouch} size='2xl' />
                                <h2 className='text-kuning font-dosis font-semibold'>Comfortable</h2>
                                <p className='text-hijauMuda font-esteban'>Simpleness always make comfortable</p>
                            </div>
                            <div className='our-values rounded-3xl py-9 px-16'>
                                <FontAwesomeIcon icon={faBookOpen} size='2xl' />
                                <h2 className='text-kuning font-dosis font-semibold'>Old-Fasioned</h2>
                                <p className='text-hijauMuda font-esteban'>Using technology but feels like “Original” is our goal to create new experience for our client.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Section 2 */}

                {/* Section 3 */}
                <div className='bg-kuning py-9'>
                    <div className='flex justify-center items-center gap-5'>
                        <img src={shopping} alt='404'/>
                        <h1 className='shopping text-cokelat font-dosis font-semibold text-6xl'>Get Our Products Right Now</h1>
                        <button className='flex justify-center gap-2 rounded-xl bg-cokelat py-5 px-10'>
                            <FontAwesomeIcon icon={faCartShopping} size='2xl' className='shopping text-kuning'/>
                            <p className='shopping text-kuning text-4xl font-semibold font-dosis'>Click Me</p>
                        </button>
                    </div>
                </div>
                {/* End Section 3 */}             
                
                <Footer />
            </section>
        );
    }
}

export default Home;