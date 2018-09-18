const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    signUp: (params) => {

        return new Promise((resolve, reject) => {

            User
                .findOne({email: params.email})
                .then( user => {

                    if (user) {
                        let errors = {};
                        errors.message = 'Email Already Exisit!';
                        errors.status = 400;
                        reject(errors);
                    } else {
                        const newUser = new User({username: params.username, email: params.email, password: params.password});

                        bcrypt.genSalt(10, (err, salt) => {

                            if (err) {
                                reject(err);
                            }

                           bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                            if (err) {
                                reject(err);
                            } else {
                                newUser.password = hashedPassword;

                                newUser.
                                    save()
                                    .then(user => resolve(user))
                                    .catch(err => reject(err)); 
                            }
                           });
                        });
                    }

                })
                .catch(err => {
                    console.log(err)
                })


        });

    }

}