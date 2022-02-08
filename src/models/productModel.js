const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    details : String,
    img: String,

    poster : {
        postname: String,
        postemail: String,
        posttel: String
    },
    productStatus : Boolean ,
    nameCategory : String ,
    traderRequest : [{
        requester : {
        requestname: String,
        requestemail: String,
        requesttel: String
        },
        itemToTrade : {
        itemname : String,
        itemdetails : String
        },
        requestDated : {
            date: { type: Date, default: Date.now },
            status : Boolean
        }
    }]
});

module.exports = mongoose.model("Product", productSchema);

// name: { type: String, required: true },
//     details : String,
//     image: String,
//     poster : {
//         name: String,
//         email: String,
//         tel: String
//      },
//     traderRequest : [
//         { requester:  
//             { 
//                 name: String,
//                 email: String,
//                 tel: String
//             },
//           itemToTrade: {
//               id: Number,
//               name: String,
//               details: String,
//           },
//           requestedDate :
//           { timestamps: true } ,
//           status : Boolean
//         }
//       ]
