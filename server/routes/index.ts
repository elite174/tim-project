import { Db } from "mongodb";
import { Express } from 'express';
import { addRoute } from "./add";
import { getRoute } from "./get";
import { editRoute } from "./edit";
import { deleteRoute } from "./delete";

export const routes = (app: Express, db: Db) => {
    addRoute(app, db);
    editRoute(app, db);
    getRoute(app, db);
    deleteRoute(app, db);

};

export enum routePaths {
    add = '/add',
    edit = '/edit',
    delete = '/delete',
    get = '/get'
}
