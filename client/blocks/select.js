

import WordPressWrapper from '../WordPressWrapper';

const __ = WordPressWrapper.__;
const el = WordPressWrapper.el;



WordPressWrapper.blocks.registerBlockType( 'forms-plugin/select', {
    title: __( 'Select', 'forms-plugin' ),
    category: 'common',
    supportHTML: false,
    attributes: {
        options: {
            default: []
        }
    },
    edit({ attributes, setAttributes, className, focus, id } ) {

        return (
            <select>
                {attributes.options.map( opt => <option value={opt.value}>{op.label}</option>)}
            </select>
        )
    },

    save({attributes, className}){

    },
} );
