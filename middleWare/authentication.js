const jwt = require('jsonwebtoken');


exports.verifyToken = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (authHeader == undefined) {
        res.status(401).send({ error: 'Not authorized' })
    } else {
        console.log(authHeader);
        let token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                res.status(500).send({ error: 'Authentication Failed' })
            } else {
                next();
            }
        })
    }


};