"use strict";

var restify = require('restify'),
    path = require('path'),
    util = require('util'),
    assert = require('assert-plus');

var StringClient = restify.StringClient;

function AquaJsRestClient(options) {
    options.accept = 'application/json';
    options.name = options.name || 'AquaJsRestClient';
    options.contentType = 'application/json';

    StringClient.call(this, options);

    this._super = StringClient.prototype;
}
util.inherits(AquaJsRestClient, StringClient);
module.exports = AquaJsRestClient;

AquaJsRestClient.prototype.write = function write(options, body, callback) {
    assert.ok(body !== undefined, 'body');
    assert.object(body, 'body');

    body = JSON.stringify(body !== null ? body : {});
    return (this._super.write.call(this, options, body, callback));
};


AquaJsRestClient.prototype.parse = function parse(req, callback) {
    var log = this.log;

    function parseResponse(err, req2, res, data) {
        var obj;
        try {
            if (data && !/^\s*$/.test(data))
                obj = JSON.parse(data);
        } catch (e) {
            // Not really sure what else we can do here, besides
            // make the client just keep going.
            log.trace(e, 'Invalid JSON in response');
        }
        obj = obj || {};

        if (res && res.statusCode >= 400) {
            // Upcast error to a RestError (if we can)
            // Be nice and handle errors like
            // { error: { code: '', message: '' } }
            // in addition to { code: '', message: '' }.
            if (obj.code || (obj.error && obj.error.code)) {
                var _c = obj.code ||
                    (obj.error ? obj.error.code : '') ||
                    '';
                var _m = obj.message ||
                    (obj.error ? obj.error.message : '') ||
                    '';

                err = new RestError({
                    message: _m,
                    restCode: _c,
                    statusCode: res.statusCode
                });
                err.name = err.restCode;
                if (!/Error$/.test(err.name))
                    err.name += 'Error';
            } else if (!err) {
                err = codeToHttpError(res.statusCode,
                    obj.message || '', data);
            }
        }

        if (err)
            err.body = obj;

        callback((err || null), req2, res, obj);
    }

    return (this._super.parse.call(this, req, parseResponse));
};

AquaJsRestClient.prototype.del = function del(options, body, callback) {
    var opts = this._options('DELETE', options);
    if (typeof (body) === 'function') {
        callback = body;
        body = null;
    }

    return (this.write(opts, body, callback));
};
