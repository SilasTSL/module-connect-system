import './Home.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import React, { useState } from 'react'
import { HomeSemCard } from '../../components/homeComponents/HomeSemCard';
import {Sidebar} from "../../components/sidebar/Sidebar";

export const Home = () => {
    const [sem, useSem] = useState([
        {title: "AY22/23 SEM 1",
         mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]}, 
        {title: "AY22/23 SEM 2",
        mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]},
        {title: "AY23/24 SEM 1",
         mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]}]);

    return (
        <div className="HomeContainer">
            <Header />
            <Sidebar />
            {sem.map((item) => {return <HomeSemCard semDetails={item}/>})}
            <Footer />
        </div>
    )
}
