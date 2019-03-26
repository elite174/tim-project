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
 * Get the news after timestamp
 */
export const getRoute = (app: Express, db: Db) => {
    app.get(routePaths.get,
        (req, res) => {
            const timestamp = Number((req.query as GetRequestQueryParams).timestamp);
            if (isNaN(timestamp)) {
                res.send(response(400, ErrorMessages.wrongData));
                return;
            }

            db.collection(dbname).find({
                timestamp: {
                    $gte: timestamp
                }
            }).toArray((err) => {
                if (err) {
                    res.send(response(err.code, err.errmsg));
                } else {
                    res.send(response(200));
                }
            });
        });
};