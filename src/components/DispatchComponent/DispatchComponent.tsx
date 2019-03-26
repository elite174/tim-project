import React, { useContext } from 'react';
import { DispatchContext } from '../App';

export interface IDispatchComponentProps {
    dispatch?(args: any): void;
}

export const DispatchComponent = <P extends IDispatchComponentProps>(Component: React.FC<P>) => (props: P) => {
    const dispatch = useContext(DispatchContext);

    return <Component {...props} dispatch={dispatch} />;
};