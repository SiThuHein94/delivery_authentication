const healthCheck = (req, res) => {
    res.json({
        status: true,
        data: new Date(),
        errorMsg: null,
    });
};

module.exports = { healthCheck };