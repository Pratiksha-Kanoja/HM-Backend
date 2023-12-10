import AuthModal from "../Modals/Auth.modal.js";

 export const checkUserId =async(req,res,next)=>{
    try {
        const{id} =req.body;
        const user= await AuthModal.findById(id);
        if(id){
            next();
        }else{
            return res.status(404).json({message:"Id not found",success:false})
        }
    } catch (error) {
        return res.status(500).json({message: error,success:false})
    }
 }