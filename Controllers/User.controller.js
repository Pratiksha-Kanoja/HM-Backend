import AuthModal from "../Modals/Auth.modal.js";
import ProductModal from "../Modals/Product.modal.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;

        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product are mandatory.." })

        await AuthModal.findByIdAndUpdate(userId, { $push: { cart: productId } })

        return res.status(201).json({ success: true, message: "Product added to cart successfully." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const yourCart = async (req, res) => {
    try {
        const { id } = req.query;
        
        if (!id) return res.status(404).json({ success: false, message: "UserID is mandatory.." })

        const buyer = await AuthModal.findById(id).select("cart -_id")
        //output:buyer:{cart:[],[]}
        if(buyer){
            var usecart = [];
            //cart is object where array store
            for(var i=0;i<buyer.cart.length;i++){
                const productData = await ProductModal.findById(buyer.cart[i])

                usecart.push(productData)
            }
            console.log(usecart);
        }
        
        return res.status(201).json({ success: true, usecart:usecart })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const deleteCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product are mandatory.." })

        const user = await AuthModal.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })

        const index = user.cart.indexOf(productId);
        user.cart.splice(index, 1)
        await user.save();

        var userCart = []
        for (var i = 0; i < user.cart.length; i++) {
            const productData = await ProductModal.findById(user.cart[i])
            userCart.push(productData)
        }
        return res.status(201).json({ success: true, message: "Product deleted successfully.", products: userCart })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
