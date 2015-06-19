"use strict";

var restify = require('restify'),
    path = require('path'),
    util = require('util'),
    AquaJsRestClient = require('../clients/aquajs_client');

function createAquaJsRestClient(options) {
  if (typeof (options) === 'string') {
    options = {
      url: options
    };
  }

  var assert = require('assert-plus');
  var bunyan = require('./bunyan_helper');

  assert.object(options, 'options');

  var aquajsRestClient;
  var opts = shallowCopy(options);
  opts.agent = options.agent;
  opts.name = opts.name || 'aquajs-restify';
  opts.type = opts.type || 'application/octet-stream';
  opts.log = opts.log || bunyan.createLogger(opts.name);

  aquajsRestClient = new AquaJsRestClient(opts);
  return (aquajsRestClient);
}


/**
 * Return a shallow copy of the given object;
 */
function shallowCopy(obj) {
  if (!obj) {
    return (obj);
  }
  var copy = {};
  Object.keys(obj).forEach(function (k) {
    copy[k] = obj[k];
  });
  return (copy);
}

exports.get = function (job, getCallBack) {
  /* Create the Restify JsonClient with the Microservice host url */
  var AquaJsclient = createAquaJsRestClient({
    url: job.ms_url
  });

  /* Invoke the GET operation on the Microservice client object to fetch the details */
  AquaJsclient.get(job.options, function (err, req, res, obj) {
    if (err) {
      getCallBack(err, null);
    } else {
      getCallBack(null, obj);
    }
  });
};

exports.del = function(job, getCallBack) {
  /* Create the Restify JsonClient with the Microservice host url */
  var AquaJsclient = createAquaJsRestClient({
    url: job.ms_url
  });

  /* Invoke the DELETE operation on the Microservice client object to fetch the details */
  AquaJsclient.del(job.options, job.bodyParams, function (err, req, res, obj) {
    if (err) {
      getCallBack(err, null);
    } else {
      getCallBack(null, obj);
    }
  });
};


exports.post = function(job, getCallBack) {
  /* Create the Restify JsonClient with the Microservice host url */
  var AquaJsclient = createAquaJsRestClient({
    url: job.ms_url
  });

  /* Invoke the GET operation on the Microservice client object to fetch the details */
  AquaJsclient.post(job.options, job.bodyParams, function (err, req, res, obj) {
    if (err) {
      getCallBack(err, null);
    } else {
      getCallBack(null, obj);
    }
  });
};


exports.put = function(job, getCallBack) {
  /* Create the Restify JsonClient with the Microservice host url */
  var AquaJsclient = createAquaJsRestClient({
    url: job.ms_url
  });

  /* Invoke the GET operation on the Microservice client object to fetch the details */
  AquaJsclient.put(job.options, job.bodyParams, function (err, req, res, obj) {
    if (err) {
      getCallBack(err, null);
    } else {
      getCallBack(null, obj);
    }
  });
};


exports.patch = function(job, patchCallBack) {
  /* Create the Restify JsonClient with the Microservice host url */
  var AquaJsclient = createAquaJsRestClient({
    url: job.ms_url
  });

  /* Invoke the patch operation on the Microservice client object to fetch the details */
  AquaJsclient.patch(job.options, job.bodyParams, function (err, req, res, obj) {
    if (err) {
      getCallBack(err, null);
    } else {
      getCallBack(null, obj);
    }
  });
};
