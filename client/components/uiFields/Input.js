import React from 'react';
import WordPressWrapper from '../../WordPressWrapper';

const __ = WordPressWrapper.__;
const el = WordPressWrapper.el;
import EventBus from '../EventBus';
class Input extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mutator: this.props.mutator,
            type: this.props.hasOwnProperty( 'type' ) ? this.props.value : 'text',
            value: this.props.hasOwnProperty( 'value' ) ? this.props.value : 'Value',
            placeholder: this.props.hasOwnProperty( 'placeholder' ) ? this.props.value : '',
        };
        this.handleChange = this.handleChange.bind(this);


    }
    handleChange(event){
        this.setState({
            value:event.target.value
        });
        EventBus.emit( this.state.mutator, this.state.value);
    }

    render(){
        return <input
                type={this.state.type}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={this.handleChange}
        />

    }

}

export  default Input;