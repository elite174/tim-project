import { News } from "../../typings";
import { ActionTypes, AddAction, DeleteAction } from "../store.typings";

export const addAction: (newsItem: News) => AddAction = newsItem => ({ name: ActionTypes.add, payload: newsItem });
export const deleteAction: (newsItem: News) => DeleteAction = newsItem => ({ name: ActionTypes.delete, payload: { timestamp: newsItem.timestamp } });