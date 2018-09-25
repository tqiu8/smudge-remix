import re
import json
import pandas as pd

# result = ""
# with open('feelings.json') as f:
#     data = json.load(f)
#     result = re.sub(r"http\S+", "", data, flags=re.MULTILINE)
df = pd.read_json('feelings.json')
df['text'] = df['text'].apply(lambda x: re.sub(r"http\S+", "", x, flags=re.MULTILINE))
df.to_json('feelings-2.json', orient='records')