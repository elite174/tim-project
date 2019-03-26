import { Express } from 'express';
import { Db } from 'mongodb';

import { dbname } from '../config/db.config';
import { routePaths } from '.';
import { ErrorMessages } from '../typings';
import { response } from '../utils';

export interface GetRequestQueryParams {
    timestamp: string;
}
/**
 * Delete news before timestamp
 */
export const deleteRoute = (app: Express, db: Db) => {
    app.delete(routePaths.delete,
        (req, res) => {
            const timestamp = Number((req.query as GetRequestQueryParams).timestamp);

            if (isNaN(timestamp)){
                res.send(response(400, ErrorMessages.wrongData));
                return;
            }

            db.collection(dbname).deleteMany({
                timestamp: {
                    $lt: timestamp
                }
            }, (err) => {
                if (err) {
                    res.send(response(err.code, err.errmsg));
                } else {
                    res.send(response(200));
                }
            });
        });
};