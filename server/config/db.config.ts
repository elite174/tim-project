/** Database name */
export const dbname = 'news-db';

/**
 * Forms correct connection url
 * @param {string} login
 * @param {string} pass
 */
export const url = (login: string, pass: string) => `mongodb+srv://${login}:${pass}@cluster0-olunf.mongodb.net/${dbname}?retryWrites=true`;

