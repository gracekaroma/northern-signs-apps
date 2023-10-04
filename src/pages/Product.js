import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Product extends Component {
    render() {

        return (
            <section id='Product'>
                <Header />

                <div style={{backgroundColor: 'red'}}>Ini Halaman Product</div>

                <Footer />
            </section>
        );
    }
}

export default Product;