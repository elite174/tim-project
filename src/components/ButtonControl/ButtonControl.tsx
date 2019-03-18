import React from 'react';
import { cn } from 'recn';
import { IClassNameProps } from '../../typings';

import './ButtonControl.scss';

const cnButtonControl = cn('ButtonControl');

export const ButtonControl: React.FC<IClassNameProps> = props => (
    <div className={cnButtonControl(null, [props.className])}>
        {props.children}
    </div>
);
