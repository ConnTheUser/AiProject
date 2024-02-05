const express = require('express');
const fs = require('fs');
const { exec } = require('child_process'); 
const cors = require('cors');
const app = express();
const { spawn } = require('child_process');

app.use(express.json());  // 解析JSON请求体
app.use(express.urlencoded({ extended: true }));  // 解析URL编码的请求体

app.use(cors());

app.post('/write-to-file', (req, res) => {
  const data = req.body.data;  
  //console.log(data);
  const outputPath = req.body.outputPath;  
  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
    } else {
		//const cmd = "matlab -r \"\pyrunfile('"+outputPath+"')\"";
    const cmd = "python script.py";
    console.log(cmd);
		exec(cmd, (error, stdout, stderr) => {  
  if (error) {  
    console.error(`执行错误: ${error}`);  
    return;  
  }  
    
  console.log(`stdout: ${stdout}`);  
  console.error(`stderr: ${stderr}+"matlab error"`);  
});
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});