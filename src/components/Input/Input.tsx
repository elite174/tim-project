import React from 'react';
import { cn } from '@bem-react/classname';

import './Input.scss';
import { IClassNameProps } from '@bem-react/core';

export interface IInputProps extends IClassNameProps {
    label?: string;
    text: string;
    onChangeText?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
}

export const cnInput = cn('Input');

export const Input: React.FC<IInputProps> = React.memo(props => {
    const { children, label = '' } = props;

    return (
        <div className={cnInput(null, [props.className])}>
            <label className={cnInput('Label')}>{label}</label>
            {children}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.text === nextProps.text;
});