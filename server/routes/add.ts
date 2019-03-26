import { Db } from "mongodb";
import { Express } from 'express';

import { dbname } from "../config/db.config";
import { NewsModel, ErrorMessages } from "../typings";
import { routePaths } from ".";
import { response } from "../utils";

export interface AddRequestBody {
    /** News text */
    text: string;

    timestamp: number;
}
/**
 * Add one news record
 */
export const addRoute = (app: Express, db: Db) => {
    app.post(routePaths.add,
        (req, res) => {
            const body: AddRequestBody = req.body;
            const news: NewsModel = {
                text: body.text,
                timestamp: Number(body.timestamp)
            };

            if (isNaN(news.timestamp) || news.text === '') {
                res.send(response(400, ErrorMessages.wrongData));
                return;
            }

            db.collection(dbname).insertOne(news, (err) => {
                if (err) {
                    res.send(response(err.code, err.errmsg));
                } else {
                    res.send(response(200));
                }
            });
        });
};