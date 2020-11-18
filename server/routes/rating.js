const express = require('express')
const router = express.Router()
router.post("/rate_review",auth,async (req,res)=>{

  try{

    if(req.customer)
    {
    req.customer.feedback={rating:req.body.rating ,review:req.body.review};
    await req.customer.save().then(() =>
    {
      console.log('Added to customer database')
    })

  }
  else if(req.worker){

    req.worker.feedback={rating:req.body.rating ,review:req.body.review};
    await req.worker.save().then(() =>
    {
      console.log('Added to worker database ')
    })

  }
  res.status(200).send()
  }
  catch(e)
  {
    res.status(400).send(e);
  }
})
module.exports = router
