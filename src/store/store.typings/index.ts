import { News } from "../../typings";

export enum ActionTypes {
    add = 'add',
    delete = 'delete',
}

export interface Action {
    name: string;

    payload?: any;
}

export interface AddAction extends Action {
    name: ActionTypes.add;
    payload: News;
}

export interface DeleteAction extends Action {
    name: ActionTypes.delete,
    payload: { timestamp: number }
}