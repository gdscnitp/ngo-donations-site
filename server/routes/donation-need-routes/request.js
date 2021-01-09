const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Request = require('../../models/Request')
console.log('Hey')

router.get('/request',(req,res)=>{
    console.log('Hello')
})

router.post('/request',async(req,res)=>{
    console.log('Hello')
    const request = new Request({
        desc_problem:req.body.desc_problem,
        desc_need:req.body.desc_need,
        location:req.body.location,
        no_of_persons:req.body.no_of_persons,
        help_required_for:req.body.help_required_for
    })
    request.save().then(()=>{
        console.log('Request saved')
        console.log(request)
    })
    res.redirect('/need')
})
console.log('Hey there')

module.exports = router

