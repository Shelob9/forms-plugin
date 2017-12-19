import React from 'react';
const __ = wp.i18n.__;
import EventBus from '../EventBus';

class ContextSwitch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: props.current,
        };
        this.events = props.events;
        this.handleContextChange = this.handleContextChange.bind(this);

    }
    handleContextChange(event){
        this.setState({current: event.target.value});
        EventBus.emit( 'CONTEXT', this.state.current);
    }
    render() {
        const CONTEXTS = [
            {
                name: 'preview',
                label: __('Preview'),
                description: __('General preview show when not doing anything else')
            },
            {
                name: 'edit',
                label: __('Edit Field'),
                description: __('Edit field settings' )
            },
            {
                name: 'email',
                label: __('Email'),
                description: __('Edit how field will show in emails'),
                disabled: true

            },
            {
                name: 'emailPreview',
                label: __('Email Preview'),
                description: __('Preview how field will show in emails'),
                disabled: true
            }
        ];

        const displayInline = {
           display: 'inline'
        };

        const getContext = (context) => {
            let found =  CONTEXTS.find( _context => { return this.state.current === _context.name } );
            if( ! found ){
                return CONTEXTS[2];
            }else{
                return found;
            }
        };


        return <div>
                    <div style={displayInline}>
                        <label className={'screen-reader-text'}>
                            {__( 'Context')}
                        </label>
                        <select
                            value={this.state.current}
                            onChange={this.handleContextChange}

                        >
                            {CONTEXTS.map( _context => <option value={_context.name}>{_context.label}</option>)}
                        </select>
                    </div>
                    <p  style={displayInline}
                        className={'description'}
                    >
                        { getContext( this.state.current).description }
                    </p>
                </div>;

    }
}

ContextSwitch.defaultProps = {
    context: 'edit'
};

export default ContextSwitch;