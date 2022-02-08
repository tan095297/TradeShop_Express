const User = require("../models/userModel");

exports.register = async (req, res)=> {
    try {
        let user = new User({
            name: req.body.name,
            tel: req.body.tel,
            sex: req.body.sex,
            birthday: req.body.birthday,
            address: req.body.address,
            email: req.body.email,
            lineId: req.body.lineId,
            password: req.body.password
        })
        user.password = await user.hashPassword(req.body.password);
        let createdUser = await user.save();
        res.status(200).json({
            msg: "New user created",
            data: createdUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
};

exports.login = async (req, res) => {
    const login = {
        email: req.body.email,
        password: req.body.password
    }
    // console.log(login)
    try {
        let user = await User.findOne({
            email: login.email
        });
        // console.log(user);
        //check if user exit
        if (!user) {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }

        let match = await user.compareUserPassword(login.password, user.password);
        if (match) {
            user.password="";
            let token = await user.generateJwtToken({
                user
            }, "secret", {
                expiresIn: 604800
            })

            if (token) {
                res.status(200).json({
                    success: true,
                    token: token,
                    userCredentials: user
                })
            }
        } else {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
};