const jwt = require('jsonwebtoken')

exports.athToken = (req, res, next) => {
    let getToken = req.header("x-auth-token");
    if (!getToken) {
        return res.status(400).json({ mas: 'you must provide a token' });
    }
    try {
        let decTocToken = jwt.verify(getToken, "samuel12");
        req.module = { email: decTocToken.email, _id: decTocToken._id };
        next();
    } catch (err) {
        return res.status(400).json({ mas:'invalid token'});
    }
};