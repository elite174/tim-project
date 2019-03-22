import React, { useState } from 'react';
import { cn } from '@bem-react/classname';

import './Sidebar.scss';
import { Icon } from '../Icon/Icon';
import { Link } from 'react-router-dom';

const cnSidebar = cn('Sidebar');

interface ISidebarProps {
    newsCount: number;
}

export const Sidebar: React.FC<ISidebarProps> = React.memo(props => {
    return (
        <div className={cnSidebar()}>
            <Link to='/new' className={cnSidebar('Item')}>
                <Icon name='add' className={cnSidebar('Icon')} />
                Добавить новость
            </Link>
            <Link to='/' className={cnSidebar('Item')}>
                <Icon name='paper' className={cnSidebar('Icon')} />
                {`Новости (${props.newsCount})`}
            </Link>
        </div>
    );
});