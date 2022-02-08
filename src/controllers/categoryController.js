// const req = require("express/lib/request");
// const res = require("express/lib/response");
// const Category = require('../models/categoryModel');

// // exports.getCategory = async (req, res) => {
// //     Category.find()
// //         .exec((err, result) => {
// //             res.status(200).json({
// //                 msg: "Search OK",
// //                 data: result
// //             });
// //         });
// // };

// // exports.getCategoryById = async (req, res) => {
// //     Category.findById(req.params.id)
// //         .exec((err, result) => {
// //             res.status(200).json({
// //                 msg: "Search OK",
// //                 data: result
// //             });
// //         });
// // };

// // exports.getCategoryByName = async (req, res) => {
// //     // req.params.name
// //     Category.find({
// //             name: new RegExp(req.params.name)
// //         }) // { name: /xxxx/}
// //         .exec((err, result) => {
// //             res.status(200).json({
// //                 msg: "Search OK",
// //                 data: result
// //             });
// //         });
// // };

// // exports.addCategory= async (req,res)=>{
// //     try{
        
// //             let category = new Category({
// //                 name:req.body.name,
// //             });
// //             let createdCategory = await category.save();
// //             res.status(200).json({
// //                 msg:"Category Success.",
// //                 data:createdCategory
// //             });
// //         }catch(err){
// //             console.log(err);
// //             res.status(500).json({
// //                 error:err
// //             });
// //         }
// //     };

