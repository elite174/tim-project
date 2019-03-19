import React, { useState } from 'react';
import { withCondition } from 'condicom';
import { IInputProps, cnInput } from '../Input';

import './Input_control_default.scss';

interface IDefaultInputProps extends IInputProps {
    control?: 'default';
}

export const withDefaultControl = withCondition<IDefaultInputProps>(({ control }) => (
    control === 'default'
), (Input, props) => {
    const { text, placeholder = '', control, onChangeText } = props;

    return (
        <Input {...props} className={cnInput({ control })}>
            <input onChange={onChangeText} value={text} placeholder={placeholder} className={cnInput('Control')} />
        </Input>
    )
});