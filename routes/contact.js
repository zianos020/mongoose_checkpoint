// require express
const express = require("express");

// expess router
const router = express.Router();

// req model
const User = require("../Model/User");

// add contact
router.post('/add', async (req, res) => {
    try {
        const { name, email} = req.body ;
        const newContact = new User ({name, email});
        await newContact.save();
        res.status(200).send({msg: "contact added SUCC"});
    } catch (error) {
        res.status(400).send({msg: "failed to add contact ", error});
    }
});

// gat all contact
router.get('/getall', async (res, req) => {
    try {
        const listContacts = await User.find();
        res.status(200).send({msg: "this is the full clients list"})
    } catch (error) {
        res.status(400).send({msg: "failed to get the clients list", error});
    }
});

//get one client
router.get('_id', async (req, res) => {
    try {
        const contactToGet = await User.findOne({_id})
        res.status(200).send({msg: "found contact by id"});
    } catch (error) {
        res.status(400).send({msg: "failed to get the user"});
    }
});

// delete contact
router.delete('/_id', async (res, req) => {
    try {
        const {_id} = req.params;
        await User.findOneAndDelete ({_id} );
        res.status(200).send({msg: "contact deleted SUCC"})
    } catch (error) {
        res.status(400).send({msg: "failed to delete the user"});
    }
});

// edit contact
router.put('_id', async (res, req) => {
    try {
        const {_id} = req.params;
        const result = await User.updateMany({_id}, {$set: {...req.body}});
        res.status(200).send({msg: "user updated SUCC"})
    } catch (error) {
        res.status(400).send({msg: "failed to upate the user"});
    }
})

// export
module.exports = router;