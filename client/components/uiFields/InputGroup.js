import React from 'react';
const __ = wp.i18n.__;

import Input from './Input';

class InputGroup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            label: this.props.hasOwnProperty( 'label' ) ? this.props.label : '',
            value: this.props.hasOwnProperty( 'value' ) ? this.props.value : 'Value',
            mutator: this.props.mutator,
        };
    }

    render(){
        return  <div>
            <label>
                {this.state.label}
            </label>
            <Input
                value={this.state.value}
                mutator={this.state.mutator}
            />
        </div>

    }

}

export  default InputGroup;
