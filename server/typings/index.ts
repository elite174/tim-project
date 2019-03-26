export interface NewsModel {
    /** Sets automatically */
    _id?: string;

    /** News text */
    text: string;

    /** Time of creation (Number(Date)) */
    timestamp: number;
}

export const ErrorMessages = {
    delete: 'Cannot delete news',
    get: 'Cannot get news',
    edit: 'Cannot edit news',
    add: 'Cannot add news',
    wrongData: 'Wrong data'
};
