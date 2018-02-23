# SCEPTER-reducer-lib
Common reducer functions

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[![Build Status](https://travis-ci.org/source4societyorg/SCEPTER-reducer-lib.svg?branch=master)](https://travis-ci.org/source4societyorg/SCEPTER-reducer-lib)

[![codecov](https://codecov.io/gh/source4societyorg/SCEPTER-reducer-lib/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/SCEPTER-reducer-lib)

[![Serverless](http://public.serverless.com/badges/v1.svg)](http://serverless.com)

## namespacedReducerHandler

This function will take the state, action, reduceKey, and a callback and return the state if the keys do not match and the action has a type. Otherwise it passes the values into the callback and executes it