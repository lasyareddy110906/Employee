import {Schema, model} from 'mongoose'

const userSchema=new Schema({
    name:{
        type: String,
        required:[true,"Name is required"]
    },
    
    email:{
        type: String,
        required:[true, "email is required"],
        unique: [true,"email already exists"]
    },
    mobile:{
        type: String,
        required:[true,"mobile is required"]
    },
    designation:{
        type:String,
        required:[true,"designation is required"]
    },
    companyName:{
        type: String,
        required:[true,"companyName is required"]
    },
    isUserActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true,
    versionKey: false,
    strict:"throw"
})


//create model
export const userModel = model('user', userSchema);