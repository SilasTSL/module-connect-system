import './Home.css';

import React, { useState } from 'react'
import { HomeSemCard } from '../../components/homeComponents/HomeSemCard';

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
            {sem.map((item) => {return <HomeSemCard semDetails={item}/>})}
        </div>
    )
}
