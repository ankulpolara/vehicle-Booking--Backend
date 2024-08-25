//  const User  = require("../models/user")




// exports.createUser = async(req,res)=>{
//      const {email , password} = req.body  ;
  
//      console.log(req.body)

//      if(!email || !password) {
//         return res.status(400).json({
//             success :false  ,
//             massage :  "please fill all  fields"
//         })
//      }

//      const response  = await User.create({email , password })
//         //   let user  = new User ({email:email ,password:password}) ;
//         //   await user.save();

      
//      if(!response){
//         return  res.status(200).json({
//             success :true ,
//             massage  : "user data saved"
//         })
//      }

//     res.status(200).json({
//         success :true ,
//         massage : "user data saved successfully ",
//         response
//     })
// }