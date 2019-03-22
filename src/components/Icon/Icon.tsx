import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './Icon.scss';

export interface IIconProps extends IClassNameProps {
    name: string;
    iconStyle?: 'ios' | 'md';
    onIconClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

const cnIcon = cn('Icon');

export const Icon: React.FC<IIconProps> = React.memo(props => {
    const { onIconClick, style, iconStyle = 'ios', name, className } = props;

    return (
        <i
            onClick={onIconClick}
            style={style}
            className={cnIcon(null, [`ion-${iconStyle}-${name}`, className])} />
    );
});