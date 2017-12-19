import WordPressWrapper from '../WordPressWrapper';
import ContextSwitch from '../components/cfSettings/ContextSwitch'
import Edit from '../components/cfFields/input/Edit'
import EventBus from '../components/EventBus';
import Preview from '../components/cfFields/input/Preview';
import InputFieldSettings from '../components/cfFields/input/InputFieldSettings';

const __ = WordPressWrapper.__;
const el = WordPressWrapper.el;

const Editable = WordPressWrapper.blocks.Editable;
const BlockControls = WordPressWrapper.blocks.BlockControls;

WordPressWrapper.blocks.registerBlockType('forms-plugin/input', {
    title: __('Input', 'forms-plugin'),
    category: 'common',
    supportHTML: false,
    attributes: {
        context: {
            type: 'string',
            default: 'edit'
        },
        field: {
            source: 'attribute',
            attribute: 'div',
            type: 'object',
            default: {
                default: 'a'
            },
        },


    },
    edit({attributes, setAttributes, className, focus, id}) {

        EventBus.on('CONTEXT', (newValue) => {
            setAttributes({context: newValue});
        });

        Object.keys(InputFieldSettings).forEach(fieldKey => {
            EventBus.on(`field.${fieldKey}`, (newValue) => {
                let field = attributes.field;
                field[fieldKey] = newValue;
                setAttributes({field: field});
            });
        });

        let editComponent = <Edit
            legend={attributes.field.legend}
            values={attributes.field}
            mutator={'field'}
        />;

        let previewComponent = <Preview
            legend={attributes.field.legend}
            values={attributes.field}
        />

        let mainView = [];

        if (focus) {
            switch (attributes.context) {
                case 'edit':
                    mainView.push(editComponent);
                    break;
                case 'preview':
                    mainView.push(previewComponent);
                    break;
                default:
                    mainView.push(el('div', {}, __('Invalid Context', 'forms-plugin')))
            }
        } else {
            mainView.push(previewComponent);
        }

        mainView.push(attributes.field.default);
        return [
            !!focus && el(
                BlockControls,
                {key: 'controls'},
                <ContextSwitch
                    current={attributes.context}
                />
            ),
            el(
                'div',
                {
                    className: attributes.className,

                },
                mainView
            )
        ];


    },

    save({attributes, className}) {
        let saveAttrs = {
            className: className
        };

        Object.keys(attributes, (attr) => {
            saveAttrs[attr] = attributes[attr];
        });

        return el(
            'div',
            saveAttrs
        )
    },
});
