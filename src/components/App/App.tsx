import React, { useState, createContext, useReducer } from 'react';
import { News } from '../../typings';
import { NewsList } from '../NewsList/NewsList';
import { Sidebar } from '../Sidebar/Sidebar';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { NewsCreator } from '../NewsCreator/NewsCreator';
import { cn } from '@bem-react/classname';
import { reducer, state, sampleNews } from '../../store';

const cnApp = cn('App')
export const App = () => {
    const [newsList, setNewsList] = useState([sampleNews]);
    const addNewsItem = (newsItem: News) => setNewsList([...newsList, newsItem]);
    const deleteNewsItem = (newsItem: News) => setNewsList(newsList.filter(ni => ni.timestamp !== newsItem.timestamp));
    //const [s, dispatch] = useReducer(reducer, state, () => { })

    return (
        <Router>
            <div className={cnApp()}>
                <Sidebar newsCount={newsList.length} />
                <div className={cnApp('Page')}>
                    <Route path='/new' exact render={() => <NewsCreator addNewsItem={addNewsItem} />} />
                    <Route path='/' exact render={() => <NewsList newsList={newsList} />} />
                </div>
            </div>
        </Router>
    );
};

