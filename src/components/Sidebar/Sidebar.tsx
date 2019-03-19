import React, { useState } from 'react';
import { cn } from 'recn';

import './Sidebar.scss';
import { Icon } from '../Icon/Icon';
import { Link } from 'react-router-dom';

const cnSidebar = cn('Sidebar');

export const Sidebar = () => {
    return (
        <div className={cnSidebar()}>
            <Link to='/new' className={cnSidebar('Item')}>
                <Icon name='add' className={cnSidebar('Icon')} />
                Добавить новость
            </Link>
            <Link to='/' className={cnSidebar('Item')}>
                <Icon name='paper' className={cnSidebar('Icon')} />
                Новости
            </Link>
        </div>
    );
}