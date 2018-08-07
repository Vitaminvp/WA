import * as React from 'react';
import { MyImg } from "../img/img.jsx";

const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
};

export class MyCard extends React.Component {
    constructor(){
        super();
    }

    render(){


        const pictures = this.props.imgsrc.map((item)=>{
            return <MyImg key = {generateId()} item = {item}/>;
        });
        return <div className="cards__box">{pictures}</div>;
    }

}



