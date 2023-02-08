const successResponse = (data) => {
    return {
        success: true,
        errorMsg: null,
        data: data,
        currentDateTime: Date.now().toString()
    }

}
const errorResponse = (errorMsg) => {
    return {
        success: false,
        errorMsg: errorMsg.message ? errorMsg.message : errorMsg,
        data: null,
        currentDateTime: Date.now().toString()
    }
}
module.exports = {
    successResponse,
    errorResponse
}