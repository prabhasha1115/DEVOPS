const CustomerSchema = require('../model/CustomerSchema');

const createCustomer = async (req,resp) => {
    
    try{

    const {name,address,salary,contact} = req.body;
    const createdCustomer = await CustomerSchema.create({
        name, address, salary, contact
    });
    await createdCustomer.save();
    resp.state(201).json({message:'Customer saved...'});

    }catch (e) {

        resp.status(500).json({'message':'error',error:e})

    }
    
};
const updateCustomer = async (req,resp) => {
    try{

    const {name,address,salary,contact} = req.body;
    
    const updatedData = CustomerSchema.findByIdAndUpdate({_id: req.params.id}, 
        {name:name,address:address,salary:salary,contact:contact}, {new:true});

        if(!updatedData) return resp.status(500).json({'message':'Try again'});


    resp.state(201).json({message:'Customer updated...'});

    }catch (e) {

        resp.status(500).json({'message':'error',error:e})

    }
};
const deleteCustomer = async (req,resp) => {
    try{

    
    const updatedData = CustomerSchema.findByIdAndDelete({_id: req.params.id}); 

        if(!updatedData) return resp.status(500).json({'message':'Try again'});


    resp.state(204).json({message:'Customer deleted...'});

    }catch (e) {

        resp.status(500).json({'message':'error',error:e})

    }
};
const findCustomerById = async (req,resp) => {
    try{

    
    const selectedCustomer = CustomerSchema.findOne({_id: req.params.id});

        if(!selectedCustomer) return resp.status(404).json({'message':'Not found'});


    resp.state(200).json({message:'Customer data', data:selectedCustomer});

    }catch (e) {

        resp.status(500).json({'message':'error',error:e})

    }
};
const loadAllCustomer = async (req,resp) => {
    try{

    
    const customers = CustomerSchema.find();


    resp.state(201).json({message:'Customer data', dataList:customers});

    }catch (e) {

        resp.status(500).json({'message':'error',error:e})

    }
};

module.exports = {createCustomer, updateCustomer, deleteCustomer, findCustomerById, loadAllCustomer};