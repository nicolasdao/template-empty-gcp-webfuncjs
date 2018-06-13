/**
 * Copyright (c) 2018, Neap Pty Ltd.
 * All rights reserved.
 * 
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const { app, appConfig: { env } } = require('webfunc')

app.get('/users/:username', (req, res) => res.status(200).send(`Hello ${req.params.username} from env ${env}`))

eval(app.listen('app', 4000))