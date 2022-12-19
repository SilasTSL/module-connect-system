import React from 'react';
import './HomeSemCard.css';
import { TitleButton } from './TitleButton';
import { Card } from 'antd';

export const HomeSemCard = (props) => {
    return (
        <div className='HomeSemCardContainer'>
            <Card title={<TitleButton title={props.semDetails.title}/>}>
                <ul style={{position: 'relative', left: -20}}>
                    {props.semDetails.mods.map(mod => 
                        <li className='modCard'>{mod}</li>
                    )}
                </ul>
            </Card>   
        </div>        
    )
}
