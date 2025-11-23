const ProductSchema = require('../model/ProductSchema');

const createProduct = async (req,resp) => {
    
    try{

    const {description,unitPrice,qtyOnHand} = req.body;
    const createdProduct = await ProductSchema.create({
        description, unitPrice, qtyOnHand
    });
    await createdProduct.save();
    resp.state(201).json({message:'Product saved...'});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
    
};
const updateProduct = async (req,resp) => {
    try{

    const {description,unitPrice,qtyOnHand} = req.body;
    
    const updatedData = ProductSchema.findByIdAndUpdate({_id: req.params.id}, 
        {description:description,unitPrice:unitPrice,qtyOnHand:qtyOnHand}, {new:true});

        if(!updatedData) return resp.status(500).json({'message':'Try again'});


    resp.state(201).json({message:'Product updated...'});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};
const updateProductQuantity = async (req,resp) => {
    try{

    const {qtyOnHand} = req.body;
    
    const updatedData = ProductSchema.findByIdAndUpdate({_id: req.params.id}, 
        {qtyOnHand:qtyOnHand}, {new:true});

        if(!updatedData) return resp.status(500).json({'message':'Try again'});


    resp.state(201).json({message:'Product updated...'});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};
const deleteProduct = async (req,resp) => {
    try{

    
    const updatedData = ProductSchema.findByIdAndDelete({_id: req.params.id}); 

        if(!updatedData) return resp.status(500).json({'message':'Try again'});


    resp.state(204).json({message:'Product deleted...'});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};
const findProductById = async (req,resp) => {
    try{

    
    const selectedProduct = ProductSchema.findOne({_id: req.params.id});

        if(!selectedProduct) return resp.status(404).json({'message':'Not found'});


    resp.state(200).json({message:'Product data', data:selectedProduct});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};
const loadAllProduct = async (req,resp) => {
    try{

    
    const Products = ProductSchema.find();


    resp.state(201).json({message:'Product data', dataList:Products});

    }catch (e) {

        resp.status(500).json({'message':'signup error',error:e})

    }
};

module.exports = {createProduct, updateProduct, updateProductQuantity, deleteProduct, findProductById, loadAllProduct};