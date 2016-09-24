// Copyright 2012 Mark Cavage, Inc.  All rights reserved.

'use strict';

var qs = require('qs');

function queryParser() {
    function *parseQueryString(next) {
        if (!this.req._parsedUrl.query) {
            this.query = {};
            yield next;
        }

        this.query = qs.parse(this.req._parsedUrl.query);
        Object.keys(this.query).forEach(function (k) {
            this.params[k] = this.query[k];
        });
        yield next;
    }
    return (parseQueryString);
}

module.exports = queryParser;
