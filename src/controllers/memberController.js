const req = require("express/lib/request");
const res = require("express/lib/response");
const Member = require('../models/memberModel')


exports.getMembers = async (req, res) => {
    Member.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
};

exports.getMemberById = async (req, res) => {
    Member.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
};

exports.getMemberByName = async (req, res) => {
    // let memberName = req.params.name;
    // req.params.name
    Member.find({
            name: new RegExp(req.params.name)
        }) // { name: /xxxx/}
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
};
            
exports.addMember= async (req,res)=>{
    try{
        
            let member = new Member({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                tel:req.body.tel,
                lineId:req.body.lineId,
                sex:req.body.sex,
                address:req.body.address
            });
            let createdMember = await member.save();
            res.status(200).json({
                msg:"Register Success.",
                data:createdMember
            });
        }catch(err){
            console.log(err);
            res.status(500).json({
                error:err
            });
        }
    };

exports.editWholeMember = async (req, res) => {
        let member = {  //ข้อมูลใหม่
            name: req.body.name,
            price: req.body.price,
            unit_in_stock: req.body.unit_in_stock
        };
        Member.findByIdAndUpdate(req.params.id, member)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
            .exec((err, result) => {
                // findById อีกครั้งเพื่อเอา data ใหม่
                Member.findById(req.params.id)
                    .exec((err, result) => {
                        res.status(200).json({
                            msg: "OK",
                            data: result
                        });
                    });
            });
};
    
    // add review ทำใน editProduct
// exports.editMember = async (req, res) => {
//         let reviewData = {
//             $push: {
//                 reviews: {
//                     star: req.body.star,
//                     comment: req.body.comment
//                 }
//             }
// };
//         Product.findByIdAndUpdate(req.params.id, reviewData)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
//             .exec((err, result) => {
//                 // findById อีกครั้งเพื่อเอา data ใหม่
//                 Product.findById(req.params.id)
//                     .exec((err, result) => {
//                         res.status(200).json({
//                             msg: "OK",
//                             data: result
//                         });
//                     });
//             });
// };
    
exports.deleteMember = async (req, res) => {
        Member.findByIdAndDelete(req.params.id)
            .exec((err, result) => {
                res.status(200).json({
                    msg: "Delete OK"
                });
            });
    
};
    
