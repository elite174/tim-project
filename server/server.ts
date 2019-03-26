import * as express from 'express';
import { MongoClient } from 'mongodb';
import * as bodyParser from 'body-parser';

import { Credentials } from './credentials';
import { url } from './config/db.config';
import { port } from './config/server.config';
import { routes } from './routes';

const app = express();

/** Decode body */
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(url(
    Credentials.login,
    Credentials.pass
), {
        useNewUrlParser: true
    }, (err, database) => {
        if (err) {
            return;
        }

        /** Link routes to app */
        routes(app, database.db());

        app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log('We are live on ' + port);
        });
    }
);