import React from 'react';
import { IButtonProps, cnButton } from '../Button';
import { withBemMod } from '@bem-react/core';

export interface IButtonTooltipProps extends IButtonProps {
    tooltip?: string;
}

import './Button_tooltip.scss';

export const withTooltip = withBemMod<IButtonTooltipProps, IButtonProps>(
    cnButton(),
    { tooltip: '*' },
    Button => props => (
        <Button {...props}>
            <span className={cnButton('Tooltip')}>
                {props.tooltip}
            </span>
        </Button>
    )
);