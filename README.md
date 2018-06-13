# Empty Zeit Now Project &middot;  [![NPM](https://img.shields.io/npm/v/webfunc.svg?style=flat)](https://www.npmjs.com/package/webfunc) [![Tests](https://travis-ci.org/nicolasdao/webfunc.svg?branch=master)](https://travis-ci.org/nicolasdao/webfunc) [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![Neap](https://neap.co/img/made_by_neap.svg)](#this-is-what-we-re-up-to)
__*Empty Zeit Now Project*__ is built on top of the [emptyjs project](https://github.com/nicolasdao/template-emptyjs#license). It adds to it some extra tools and config to easily deploy to Zeit Now.

# Table of Contents

> * [Install](#install) 
> * [How To Use It](#how-to-use-it) 
>   - [Basic](#basic)
>   - [Config](#config)
> * [FAQ](#faq)
> * [Annexes](#annexes)
>   - [now-CLI Commands](#now-cli-commands)
> * [About Neap](#this-is-what-we-re-up-to)
> * [License](#license)


# Install
```
git clone https://github.com/nicolasdao/template-emptynowjs.git new-project-name
cd new-project-name
npm install
npm test
npm start
```

Browse to [http://localhost:4000/users/nic](http://localhost:4000/users/nic) to see the result. 

# How To Use It
## Basic

| # |Task             | Command                                                       | Note                                               | 
|:-:| :--------------- |:------------------------------------------------------------- |:---------------------------------------------------|
| 1 | Start            | `npm start`                                                   | Start node with hot reload thanks to `node-dev`.   |
| 2 | Lint             | `npm run eslint`                                              | Lint and automatically fixes errors when possible. |
| 3 | Increase version | `npm run release`<br/>`npm run release -- --release-as 1.1.0` | The 1st command increments the version, while the 2nd sets the version to a specific number. |
| 4 | Test             | `npm test`                                                    | Test all files in the `test` folder.               |

## Config

__*Update The git Repo:*__ `git remote set-url origin https://github.com/nicolasdao/project.git`

## Deploy
> Prerequisites: Make sure you have `now-CLI` installed!

__*Test you have now-cli installed*__: `now -v`
__*Test you're on the right account'*__: `now switch`
__*Deploy*__: `npm run deploy:staging`


# FAQ
Blablabla

# Annexes
## now-CLI Commands

| # | Task                 | Command                       |
|:-:| :------------------- |:----------------------------- |
| 1 | List all deployments | `now ls`                      |
| 2 | Delete a deployment  | `now rm <deployment-name>`    |

# This Is What We re Up To
We are Neap, an Australian Technology consultancy powering the startup ecosystem in Sydney. We simply love building Tech and also meeting new people, so don't hesitate to connect with us at [https://neap.co](https://neap.co).

Our other open-sourced projects:
#### Web Framework & Deployment Tools
* [__*webfunc*__](https://github.com/nicolasdao/webfunc): Write code for serverless similar to Express once, deploy everywhere. 
* [__*now-flow*__](https://github.com/nicolasdao/now-flow): Automate your Zeit Now Deployments.

#### GraphQL
* [__*graphql-serverless*__](https://github.com/nicolasdao/graphql-serverless): GraphQL (incl. a GraphiQL interface) middleware for [webfunc](https://github.com/nicolasdao/webfunc).
* [__*schemaglue*__](https://github.com/nicolasdao/schemaglue): Naturally breaks down your monolithic graphql schema into bits and pieces and then glue them back together.
* [__*graphql-s2s*__](https://github.com/nicolasdao/graphql-s2s): Add GraphQL Schema support for type inheritance, generic typing, metadata decoration. Transpile the enriched GraphQL string schema into the standard string schema understood by graphql.js and the Apollo server client.
* [__*graphql-authorize*__](https://github.com/nicolasdao/graphql-authorize.git): Authorization middleware for [graphql-serverless](https://github.com/nicolasdao/graphql-serverless). Add inline authorization straight into your GraphQl schema to restrict access to certain fields based on your user's rights.

#### React & React Native
* [__*react-native-game-engine*__](https://github.com/bberak/react-native-game-engine): A lightweight game engine for react native.
* [__*react-native-game-engine-handbook*__](https://github.com/bberak/react-native-game-engine-handbook): A React Native app showcasing some examples using react-native-game-engine.

#### Tools
* [__*aws-cloudwatch-logger*__](https://github.com/nicolasdao/aws-cloudwatch-logger): Promise based logger for AWS CloudWatch LogStream.

# License
Copyright (c) 2018, Neap Pty Ltd.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Neap Pty Ltd nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL NEAP PTY LTD BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

<p align="center"><a href="https://neap.co" target="_blank"><img src="https://neap.co/img/neap_color_horizontal.png" alt="Neap Pty Ltd logo" title="Neap" height="89" width="200"/></a></p>
