import React from 'react';
import { cn } from 'recn';
import { NewsBlock } from '../NewsBlock/NewsBlock';
import { News } from '../../typings';

import './NewsList.scss';

const cnNewsList = cn('NewsList');

export interface INewsListProps {
    newsList: News[];
}

export const NewsList: React.FC<INewsListProps> = props => {
    return (
        <div className={cnNewsList()}>
            {props.newsList.map(news => <NewsBlock news={news} key={news.timestamp} />)}
        </div>
    );
};
