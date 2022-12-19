import React from 'react';
import { Button } from 'antd';
import './TitleButton.css'

export const TitleButton = (props) => {
    return (
        <div className='TitleButtonContainer'>
            <h1 style={{color: 'black', fontSize: 15}}>{props.title}</h1>
            <Button className='TitleButton' shape='circle' style={{marginLeft: 10}}>+</Button>
        </div>        
    )
}
