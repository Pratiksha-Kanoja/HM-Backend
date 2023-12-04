import ProductModal from "../Modals/Product.modal.js";

export const Addproducts = async (req, res) => {
    try {
        const { name,price,image,color,Sizes } = req.body;
        if (!name || !price || !image || !color || !Sizes) return res.status(404).json({ success: false, message: "All fields are mandatory" })

        const product = new ProductModal({
            name,price,image,color,Sizes
        })
        await product.save();

        return res.status(200).json({ success: true, message: "Product added" })

    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }

}

export const getAllproducts = async (req, res) => {
    try {
        const product = await ProductModal.find();
        if(product.length){
            return res.status(200).json({success:true,message:"Product Found",product:product})
        }
        return res.status(404).json({success:false,message:"Product not Found"})

    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}


export const getSingleProduct = async (req,res) =>{
    try {
        const {id} = req.query;
        
        if(!id) return res.status(404).json({success:false,message:"Id is required"})

        const product = await ProductModal.findById(id)
        if(product){
            return res.status(200).json({success:true,message:"Product found",product:product})
        }
        return res.status(404).json({success:false,message:"Product not found"})

    } catch (error) {
        return res.status(500).json({success:false,message:"error"})
    }
}