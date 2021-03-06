const   mongoose = require('mongoose');
const   mongooseStringQuery = require('mongoose-string-query');
const   timestamps = require('mongoose-timestamp');


const NotifyLogsSchema = new mongoose.Schema({

    ref_ID1:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    ref_ID2:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    routingDestBank:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    mobileNo:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    fromBankName:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    txnRefNo:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    transaction_date:{
        type:String,
        required:true,
        trim:true,
        trim:true,
    },
    transaction_time:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
   txn_dt:{
        type:Date,
        required:true,
        trim:true
    },
    fromAccount:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    receivingID:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    proxyType:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    toBankName:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    toAccount:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    toAccountNameD:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    toAccountName:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    amount:{
        type:String,
        required:true,
        trim:true,
    },
    bRef1:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    bRef2:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    bRef3:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    tag29_proxy:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    tag30_proxy:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    notes:{
        type:String,
        required:false,
        trim:true,
        default:"na"
    },
    tagType:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    },
    srcNotify:{
        type:String,
        required:true,
        trim:true,
        default:"na"
    }
},
{ minimize:false},
);

NotifyLogsSchema.plugin(timestamps);
NotifyLogsSchema.plugin(mongooseStringQuery);

const NotifyLogs = mongoose.model('NotifyLogs',NotifyLogsSchema);

module.exports.NotifyLogs = NotifyLogs;