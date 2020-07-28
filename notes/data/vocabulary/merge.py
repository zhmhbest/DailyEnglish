"""
    将多个单词CSV文件合成一个CSV文件
"""
import numpy as np
import pandas as pd
import os
os.chdir(os.path.dirname(__file__))


if __name__ == '__main__':
    buffer = np.array([[None, None]])
    for filename in os.listdir('./'):
        split_filename = os.path.splitext(filename)
        if '.csv' == split_filename[-1].lower() and 'index' != split_filename[0].lower():
            tmp = pd.read_csv(filename, skiprows=1, names=['v', 't']).to_numpy()
            buffer = np.vstack((buffer, tmp))
    df = pd.DataFrame(buffer, columns=['v', 't']).drop(0)

    # 按字母表排序
    # df.sort_values('v', inplace=True)

    # 去除重复单词（保留第一次出现）
    df.drop_duplicates(subset='v', inplace=True)

    df.to_csv('./index.csv', index=False, header=['单词', '解释'])
