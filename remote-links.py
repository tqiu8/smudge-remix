import re

result = ""
with open('feelings.json') as f:
    data = f.read()
    result = re.sub(r"http\S+", "", data, flags=re.MULTILINE)

file = open('feelings-2.json', 'w')
file.write(result)
