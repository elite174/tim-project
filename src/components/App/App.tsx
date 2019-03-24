import React, { useState, createContext, useReducer } from 'react';
import { News } from '../../typings';
import { NewsList } from '../NewsList/NewsList';
import { Sidebar } from '../Sidebar/Sidebar';
import { AddAction, ActionTypes } from '../../store/store.typings'
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { NewsCreator } from '../NewsCreator/NewsCreator';
import { cn } from '@bem-react/classname';
import { reducer, initialState } from '../../store';
import { DispatchContext } from '.';


const cnApp = cn('App')
export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Router>
            <DispatchContext.Provider value={dispatch}>
                <div className={cnApp()}>
                    <Sidebar newsCount={state.newsList.length} />
                    <div className={cnApp('Page')}>
                        <Route path='/new' exact render={() => <NewsCreator />} />
                        <Route path='/' exact render={() => <NewsList newsList={state.newsList} />} />
                    </div>
                </div>
            </DispatchContext.Provider>
        </Router>
    );
};

