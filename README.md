# Antc

这是一个基于[Ant-Design](https://github.com/ant-design/ant-design)的企业级基础组件库。

## Introduction

其Fork自[Ant-Design](https://github.com/ant-design/ant-design)，并对其进行了一些适用于企业的定制化修改。具体如下：

* 设置默认语言为中文
* 分页组件调整了默认样式

## Installation

```bash
npm install antc --save
```

## Usage

```javascript
const { Button } from 'antc';
```

## FAQ

#### Q: 如何对版本进行升级？

```bash
# 从 ant-design的github上下载最新版本到本地
git clone git@github.com:ant-design/ant-design.git

# 拉取所有最新的版本
git fetch origin --prune --tags

# 切出最新的版本分支（如4.20.1）
git checkout -b v4_20_1 4.20.1

# 更换Git的remote地址为企业antc仓库的地址
git remote set-url origin git@github.com:yangin/ant-design.git

# 从企业的antc仓库拉取最新代码，获取上次修改的commit
git fetch

# 基于上一版本分支（如v4_19_4）查看之前企业定制化修改的commit
git log origin/v4_19_4

# 从log中找出定制化修改的commit，并将其cherry-pick到v4_20_1分支
git cherry-pick e525a4657edeb2085ecfee66d8f103a987c519db^..ade8962d67a056443314204414b344961e20edaf

# 将整理好后的v4_20_1分支push到企业antc仓库
git push

# 基于v4_20_1分支，发布antc的安装包
# 发布到npm官方仓库
npm publish --access=public
# 发布到私有仓库
npm publish --registry <私有仓库地址>
```

#### Q: 如何添加新的定制化内容并发版

A: Ant-Design官方对仓库的升级是[每周1个patch版本](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)

当频率 > 1patch/周时，在对齐官方最新版本的情况下，追加一些自己的定制化即可。

当频率 < 1patch/周时，在当前版本的基础上，+1 patch, 并在package.json中对description进行修改，说明对齐的Ant-Design官方版本。并在下次对齐官方版本时，移除该commit。
如：

```json
"version": "4.20.1",
"description": "对齐ant-design@4.20.0"
```

#### Q: 从Ant-Design中Clone的包过大（>800M），会有什么影响吗？

A: 查看了clone下来的包文件，导致包过大的原因是.git/objects/pack中的文件过大，这是由于历史提交过大文件积累下来导致，无需做特别处理，对最后打包发布的包体积没有影响。
