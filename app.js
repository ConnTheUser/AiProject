const { spawn } = require('child_process');

// 创建一个子进程来执行Python脚本
const pythonProcess = spawn('python', ['script.py', 'arg1', 'arg2']);

// 监听Python脚本的输出
pythonProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
