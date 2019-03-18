import React from 'react';
import { cn } from 'recn';

import { IClassNameProps } from '../../typings';
import { IIconProps, Icon } from '../Icon/Icon';

import './Button.scss';

export interface IButtonProps extends IClassNameProps {
    onButtonClick?: (e: React.MouseEvent) => void;

    /** Button text */
    text?: string;

    icon?: IIconProps;
}

const cnButton = cn('Button');

export const Button: React.FC<IButtonProps> = props => {
    const { className, onButtonClick, icon, text = '' } = props;
    return (
        <button className={cnButton(null, [className])} onClick={onButtonClick}>
            {text}
            {icon ? <Icon {...icon} /> : null}
        </button>
    );
};