import React, { useRef, useState } from 'react';
import { withCondition } from 'condicom';
import { IInputProps, cnInput } from '../Input';

import './Input_control_rich.scss';

interface IRichInputProps extends IInputProps {
    control?: 'rich';
    //ref: React.Ref<HTMLTextAreaElement>;
}

export const withRichControl = withCondition<IRichInputProps>(({ control }) => (
    control === 'rich'
), (Input, props) => {
    const { text, placeholder = '', control, ref, onChangeText } = props;

    return (
        <Input {...props} className={cnInput({ control })}>
            <textarea ref={ref as React.Ref<HTMLTextAreaElement>} rows={5} onChange={onChangeText} value={text} placeholder={placeholder} className={cnInput('Control')} />
        </Input>
    )
});