const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
//const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

//app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/profileDB",{ useNewUrlParser: true , useUnifiedTopology: true })

const uploadSchema = new mongoose.Schema({
	nameInfo : String,
	otherInfo : String,
	imageInfo : String,
});

const uploadModel = mongoose.model('uploadDetail', uploadSchema);

const Storage = multer.diskStorage({
destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage:Storage
}).single('file');

app.get('/',function(req,res){
  res.render('index');
})


// app.post('/', upload, function(req, res, next) {
//
// 		const firstInfo = req.body.name1;
// 		const secondInfo = req.body.name2;
//     const imageFile = req.file.filename;
//
//     const allDetails= new uploadModel({
// 			nameInfo : firstInfo,
// 			otherInfo : secondInfo,
// 			imageInfo : imageFile,
//     });
// 		const id = allDetails._id;
//
//     allDetails.save(function(err,req1){
// 			if(err){
// 				console.log(err);
// 			}
// 			uploadModel.findOne({_id : id},function(err,data){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(data);
// 					console.log(data._id);
// 				res.render('index', {details:data});
// 				};
// 			});
// 		});
//
//
// });

app.post('/update/', upload, function(req, res, next) {
let allDetails = [];

if(req.file){
	const firstInfo = req.body.name1;
	const secondInfo = req.body.name2;
	const imageFile = req.file.filename;

	allDetails= new uploadModel({
		nameInfo : firstInfo,
		otherInfo : secondInfo,
		imageInfo : imageFile,
	});
}
else{
	const firstInfo = req.body.name1;
	const secondInfo = req.body.name2;

	allDetails = new uploadModel({
		nameInfo : firstInfo,
		otherInfo : secondInfo,
	});
}
console.log(allDetails);
if(allDetails.imageInfo === null){
	uploadModel.findByIdAndUpdate({_id : req.body.id},{nameInfo : allDetails.nameInfo, otherInfo: allDetails.otherInfo},allDetails,function(err,result){
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
			uploadModel.findOne({_id : result._id},function(err,data){
				if(err){
					console.log(err);
				}
				else{
					res.render('index',{details : data});
				}

			});
		}
	});
}
else{
	uploadModel.findByIdAndUpdate({_id : req.body.id},{nameInfo : allDetails.nameInfo, otherInfo: allDetails.otherInfo, imageInfo:allDetails.imageInfo},allDetails,function(err,result){
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
			 uploadModel.findOne({_id : result._id},function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(data);
					res.render('index',{details : data});
				}
			})
		}
	});
}
});

app.post('/delete',upload,function(req,res,next){
	uploadModel.findByIdAndRemove({_id : req.body.id},function(err,docs){
		if(err){
			console.log(err);
		}
		else{
			console.log(docs);
		}
	})

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("server is running on 3000 port");
})
