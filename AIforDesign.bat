@echo off
start matlab -desktop -r "matlab.engine.shareEngine('MATLABEngine3')"
start cmd /k "wsl -d Ubuntu"
cd nodejs
start cmd /k "node server.js"
cd ..
cd ChatGPT-Next-Web-LangChain
yarn start --port 5000
