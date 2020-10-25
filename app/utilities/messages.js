
const statusCode = {
    SUCCESS: 200,
    CREATED: 200,
    UPDATED: 200,
    DELETED: 200,
    NOT_FOUND: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500
};

const statusMessage = {
    SUCCESS: 'Success',
    CREATED: 'Data successfully created.',
    UPDATED: 'Data successfully updated.',
    DELETED: 'Data successfully deleted.',
    NOT_FOUND: 'Data not found.',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    INTERNAL_SERVER_ERROR: 'Some thing went wrong. please try again later.'
};

module.exports = {
    statusCode: statusCode,
    statusMessage: statusMessage
}