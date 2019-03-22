import React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import './ButtonControl.scss';

const cnButtonControl = cn('ButtonControl');

export const ButtonControl: React.FC<IClassNameProps> = props => (
    <div className={cnButtonControl(null, [props.className])}>
        {props.children}
    </div>
);
