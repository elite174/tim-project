import { Express } from 'express';
import { Db } from 'mongodb';

import { dbname } from "../config/db.config";
import { routePaths } from '.';
import { ErrorMessages } from '../typings';
import { response } from '../utils';

export interface EditRequestBody {
    timestamp: number;

    /** New text */
    text: string;
}

/**
 * Edit one news record
 */
export const editRoute = (app: Express, db: Db) => {
    app.put(routePaths.edit,
        (req, res) => {
            const body: EditRequestBody = {
                timestamp: Number(req.body.timestamp),
                text: req.body.text
            };

            if (isNaN(body.timestamp) || body.text === '') {
                res.send(response(400, ErrorMessages.wrongData));
                return;
            }

            db.collection(dbname).updateOne({
                timestamp: Number(body.timestamp)
            }, {
                    $set: {
                        text: body.text
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