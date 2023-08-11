const mongoose = require('mongoose');
const PlanSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        plantype:{
            type:String,
            required:true
        },
        hardware:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model('plan',PlanSchema);