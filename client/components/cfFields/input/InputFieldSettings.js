const __ = wp.i18n.__;

const InputFieldSettings = {
    name:{
        label:  __( 'Name', 'forms-plugin' ),
    },
    slug: {
        label:__( 'Slug', 'forms-plugin' )
    },
    default: {
        label: __( 'Default', 'forms-plugin' )
    },
    required: {
        label: __('Required', 'forms-plugin')
    },
    html5type: {
        label: __( 'Type', 'forms-plugin'),
        type: 'select',
        options: [
            {
                label: __( 'text', 'forms-plugin'),
                value: 'text',
                default:true
            },
            {
                label: __( 'number', 'forms-plugin'),
                value: 'text',
                default:true
            },
            {
                label: __( 'email', 'forms-plugin'),
                value: 'text',
                default:true
            },
            {
                label: __( 'url', 'forms-plugin'),
                value: 'text',
                default:true
            },
        ]

    }
};

export default InputFieldSettings;