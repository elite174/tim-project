import React, { useMemo } from 'react';
import { checkPropTypes } from 'prop-types';
import { IClassNameProps } from '../../typings';

export interface IIconProps extends IClassNameProps {
    name: string;
    iconStyle?: 'ios' | 'md';
    onIconClick?: (e: React.MouseEvent) => void;
    style?: React.StyleHTMLAttributes<HTMLDivElement>;
}

export const Icon: React.FC<IIconProps> = React.memo(props => {
    const { onIconClick, style, iconStyle = 'ios', name } = props;
    return (
        <i
            onClick={onIconClick}
            style={style}
            className={`ion-${iconStyle}-${name}`} />
    );
});