
const express = require('express')
const cors = require('cors');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path')
const app = express()
const port = 3000
app.use(cors())

app.enable('trust proxy');
app.use(
	cors({
		origin: 'http://localhost:3001',
		credentials: true,
	})
);

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, path.join(path.dirname(__dirname), 'uploads'))
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
	  cb(null, shortid.generate() + '-' + file.originalname)
	}
  })

const upload = multer({ storage: storage });

// function callName() {  
//     var spawn = require("child_process").spawn;
//     var process = spawn('python',["./main.py"] );
  
    
    // process.stdout.on('data', function(data) {
    //     res.send(data.toString());
    // })
//}

app.get('/', (req, res) => {
    console.log("hello");
  res.send('<h1>Hello World!</h1>')
})

app.post('/test', upload.array('productPicture'), (req, res) => {
	console.log(req.files);
	// if(req.files.length > 0){
	// 	console.log("Yippee")
	// 	return res.status(200).json({message: 'Successful'});
	// } else{
	// 	return res.status(400).json({message: 'Wrong'});
	// }
	return res.status(200).json({message: 'Successful'});
	
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})