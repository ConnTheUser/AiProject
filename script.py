import  matlab.engine
import sys

try:
    eng  =  matlab.engine.connect_matlab('MATLABEngine3')
except Exception as e:
    eng  =  matlab.engine.start_matlab('-desktop -r "matlab.engine.shareEngine(\'MATLABEngine3\')"')

print("2566Connecting  to  existing  MATLAB  engine...")
with open('../code.py', 'r', encoding='utf-8') as file:
    # 读取文件内容到变量
    matlab_code = file.read()
# 关闭文件
file.close()
#matlab_code = sys.argv[1]
print(matlab_code)


eng.eval(matlab_code,nargout=0)
#input("")
