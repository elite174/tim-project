import React from 'react';
import { cn } from '@bem-react/classname';
import { NewsBlock } from '../NewsBlock/NewsBlock';
import { News } from '../../typings';

import './NewsList.scss';

const cnNewsList = cn('NewsList');

export interface INewsListProps {
    newsList: News[];
    //removeNews
}

export const NewsList: React.FC<INewsListProps> = props => {
    return (
        <div className={cnNewsList()}>
            {props.newsList.sort((a, b) => b.timestamp - a.timestamp).map(news => <NewsBlock news={news} key={news.timestamp} />)}
        </div>
    );
};
