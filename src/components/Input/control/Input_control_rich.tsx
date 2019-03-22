import React from 'react';
import { IInputProps, cnInput } from '../Input';

import './Input_control_rich.scss';
import { withBemMod } from '@bem-react/core';

interface IRichInputProps {
    control?: 'rich';
}

export const withRichControl = withBemMod<IRichInputProps, IInputProps>(cnInput(),
    { control: 'rich' },
    Input => props => {
        const { text, placeholder = '', ref, onChangeText } = props;

        return (
            <Input {...props}>
                <textarea ref={ref as React.Ref<HTMLTextAreaElement>} rows={5} onChange={onChangeText} value={text} placeholder={placeholder} className={cnInput('Control')} />
            </Input>
        )
    }
);