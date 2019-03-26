/** Create an error body */
export const response = (status: number, message = '') => ({
    status,
    message
});
