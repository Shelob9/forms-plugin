import React from 'react';
const __ = wp.i18n.__;
const el = wp.element.createElement;

import InputFieldSettings from  './InputFieldSettings';
import Select from  '../../uiFields/Select';
import InputGroup from '../../uiFields/InputGroup';
class Edit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            values: this.props.hasOwnProperty( 'field' ) ? this.props.field : {},
            legend: this.props.hasOwnProperty( 'legend' ) ? this.props.legend : '',
            mutator: this.props.mutator,
        };

        this.settings = InputFieldSettings;
        Object.keys( this.settings ).forEach( setting => {
            this.settings[setting].mutator = 'field.' + setting;
            if( this.settings[setting].hasOwnProperty('type' ) ){
                this.settings[setting].type = 'text';
            }
        })

    }

    render(){
        let out = [];
        let _inputGroup = <InputGroup
            label={this.settings.name.label}
            value={this.state.value}
            mutator={this.settings.name.mutator}
        />;
        Object.keys( this.settings ).forEach( setting => {
            console.log(this.settings[setting].type);
            switch ( this.settings[setting].type){
                case 'select' :
                    out.push(el('div', {}, <Select
                        options={this.settings[setting].options}
                        label={this.settings[setting].label}
                        value={this.state.values[setting]}
                        mutator={this.settings[setting].mutator}
                    /> ));
                case 'input':
                default:
                    out.push(el('div', {}, <InputGroup
                        label={this.settings[setting].label}
                        value={this.state.values[setting]}
                        mutator={this.settings[setting].mutator}
                    />));
                    break;
            }

        });
        if( this.state.legend ){
            return el(
                'fieldset',
                {},
                [
                    el(
                        'legend',
                        {},
                        this.state.legend
                    ),
                    out
                ]
            )
        }else{
            return out;

        }







    }

}

export  default Edit;
