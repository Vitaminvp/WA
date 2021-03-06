import * as React from 'react';
import './checkbox.scss';

const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
}

export class CheckBox extends React.Component{
    constructor(){
        super();
        this.id = generateId();
    }
    toggleCheked(){
        console.log("changeOnCheckBox", this.props.checked);
        this.props.changeOnListitem(!this.props.checked)
    };
    render(){
        return  <label htmlFor={this.id} className="checkbox">
                    <input
                        className="checkbox__input"
                        id={this.id}
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.toggleCheked.bind(this)}
                    />
                    <span className="checkbox__span">&nbsp;</span>
                </label>
    }
}