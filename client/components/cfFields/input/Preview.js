import React from 'react';
import { __, el } from  '../../../WordPressWrapper';


import InputFieldSettings from  './InputFieldSettings';

class Preview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            values: this.props.hasOwnProperty( 'values' ) ? this.props.values : {},
            legend: this.props.hasOwnProperty( 'legend' ) ? this.props.legend : '',
        };

        this.settings = InputFieldSettings;
        Object.keys( this.settings ).forEach( setting => {
            this.settings[setting].mutator = 'field.' + setting
            if( this.settings[setting].hasOwnProperty('type' ) ){
                this.settings[setting].type = 'text';
            }
        })

    }

    render(){
        return (
            <div>
                <input
                    type={this.state.values.type}
                    value={this.state.values.default}
                    placeholder={this.state.values.placeholder}
                    disabled={true}
                />
            </div>
        );





    }

}

export  default Preview;
