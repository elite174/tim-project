import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';
import { IClassNameProps } from '@bem-react/core';

export interface IButtonProps extends IClassNameProps {
    onButtonClick?: (e: React.MouseEvent) => void;
    hint?: string;
    text?: string;
}

export const cnButton = cn('Button');

export const Button: React.FC<IButtonProps> = React.memo(props => {
    const { className, onButtonClick, text } = props;
    return (
        <button className={cnButton(null, [className])} onClick={onButtonClick}>
            {text}
            {props.children}
        </button>
    );
}); 