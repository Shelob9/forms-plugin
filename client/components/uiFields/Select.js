import React from 'react';
import WordPressWrapper from '../../WordPressWrapper';

const __ = WordPressWrapper.__;
const el = WordPressWrapper.el;
import EventBus from '../EventBus';
class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mutator: this.props.mutator,
            value: this.props.hasOwnProperty( 'value' ) ? this.props.value : '',
            required: this.props.hasOwnProperty( 'required' ) ? this.props.required : false,
            default: this.props.hasOwnProperty( 'default' ) ? this.props.default : false,
            options: this.props.hasOwnProperty( 'options' ) ? this.props.options : [],

        };
        this.handleChange = this.handleChange.bind(this);


    }
    handleChange(event){
        this.setState({
            value:event.target.value
        });
        EventBus.emit( this.state.mutator, this.state.value );
    }
    render(){
        return (
            <select>
                {this.state.options.map( opt => <option value={opt.value}>{opt.label}</option>)}
            </select>
        )

    }

}

export default Select;