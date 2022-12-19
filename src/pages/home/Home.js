import './Home.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import React from 'react'

export const Home = () => {
    return (
        <div className="homeContainer">
            <Header />
            <h1>THIS IS HOME</h1>
            <Footer />
        </div>
    )
}
