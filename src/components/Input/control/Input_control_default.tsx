import React, { useState } from 'react';
import { IInputProps, cnInput } from '../Input';

import './Input_control_default.scss';
import { withBemMod } from '@bem-react/core';

interface IDefaultInputProps {
    control?: 'default';
}

export const withDefaultControl = withBemMod<IDefaultInputProps, IInputProps>(
    cnInput(),
    { control: 'default' },
    Input => props => {
        const { text, placeholder = '', onChangeText } = props;

        return (
            <Input {...props}>
                <input onChange={onChangeText} value={text} placeholder={placeholder} className={cnInput('Control')} />
            </Input>
        )
    }
);