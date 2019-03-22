import React from 'react';
import { withBemMod } from '@bem-react/core';
import { IButtonProps, cnButton } from '../Button';
import { IIconProps, Icon } from '../../Icon/Icon';

export interface IButtonIconProps {
    icon?: IIconProps;
}

export const withIcon = withBemMod<IButtonIconProps, IButtonProps>(
    cnButton(),
    { icon: '*' },
    Button => props => (
        <Button {...props}>
            {props.children}
            {props.icon && <Icon {...props.icon} />}
        </Button>
    )
);
