const OrderSchema = require('../model/OrderSchema');

const createOrder = async (req,resp) => {
    try{
    
        const {date,totalCost,products,customer} = req.body;
        const createdOrder = await ProductSchema.create({
            date,totalCost,products,customer
        });
        await createdOrder.save();
        resp.state(201).json({message:'Product saved...'});
    
        }catch (e) {
    
            resp.status(500).json({'message':'error',error:e})
    
        }
};
const findAllOrders = async (req,resp) => {
    try{
        const dataList = await OrderSchema.find();
        resp.state(201).json({message:'Orders...', dataList:dataList});
    
        }catch (e) {
    
            resp.status(500).json({'message':'error',error:e})
    
        }
};

module.exports = {createOrder, findAllOrders};