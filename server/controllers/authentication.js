const User = require('../models/user');

exports.signup = function(req, res, next) {  
    const email = req.body.email;
    const password = req.body.password;

    // See if user with given email exists
    User.findOne({ email }, function(err, existingUser) {
        if(err) { return next(err); }
        console.log('findONe works');

        //  Is a user with email does exist, return error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        // If a user with email doesn NOT exist, create and save user record
        const user = new User({
            email,
            password
        });

        user.save(function(err) {
            if(err) { return next(err); }

        // Respond to request indicating the user was created
            res.json({ success: true });
            
        });      
    });
}