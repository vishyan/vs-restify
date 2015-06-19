# My Restify Utility:
Have extended the popular restify module to customize and enhance the communication experience for REST calls.
The Utility takes `job` object as the input from the client where the end-point URL, options to be set for microservice calls are passed to AquaJS Restify. 

The utility exposes 5 http operations for RESTful communication.
```
* get
* post
* put
* delete
* patch
```

####How to use AquaJs-Restify

Use Case 1:
For HTTP GET operation:

```
var VSRestify = require('vs-restify');
var job = {};
job.ms_url = 'http://<microservicehost>:<port>/<microservice-resourcepath>
job.options = {
                          path: "<microservice-resourcepath>",
                          retry: {
                              'retries': 2
                          },
                          connectTimeout: 5000,
                          requestTimeout: 100000,
                          agent: false
                      }
VSRestify.get(job, getCallBack);

function getCallBack(err, obj) {

}
```


Use Case 2:
For HTTP POST operation:

```
var VSRestify = require('vs-restify');
var job = {};
job.ms_url = 'http://<microservicehost>:<port>/<microservice-resourcepath>;
job.bodyParams = {} // Pass the body Json
job.options = {
                          path: "<microservice-resourcepath>",
                          retry: {
                              'retries': 2
                          },
                          connectTimeout: 5000,
                          requestTimeout: 100000,
                          agent: false
                      }
VSRestify.post(job, postCallBack);

function postCallBack(err, obj) {

}
```


Use Case 3:
For HTTP PUT operation:

```
var VSRestify = require('vs-restify');
var job = {};
job.ms_url = 'http://<microservicehost>:<port>/<microservice-resourcepath>;
job.bodyParams = {} // Pass the body Json
job.options = {
                          path: "<microservice-resourcepath>",
                          retry: {
                              'retries': 2
                          },
                          connectTimeout: 5000,
                          requestTimeout: 100000,
                          agent: false
                      }
VSRestify.put(job, putCallBack);

function putCallBack(err, obj) {

}
```


Use Case 4:
For HTTP DELETE operation:

```
var VSRestify = require('vs-restify');
var job = {};
job.ms_url = 'http://<microservicehost>:<port>/<microservice-resourcepath>;
job.bodyParams = {} // Pass the body Json
job.options = {
                          path: "<microservice-resourcepath>",
                          retry: {
                              'retries': 2
                          },
                          connectTimeout: 5000,
                          requestTimeout: 100000,
                          agent: false
                      }
VSRestify.del(job, deleteCallBack);

function deleteCallBack(err, obj) {

}
```



Use Case 5:
For HTTP PATCH operation:

```
var VSRestify = require('vs-restify');
var job = {};
job.ms_url = 'http://<microservicehost>:<port>/<microservice-resourcepath>;
job.bodyParams = {} // Pass the body Json
job.options = {
                          path: "<microservice-resourcepath>",
                          retry: {
                              'retries': 2
                          },
                          connectTimeout: 5000,
                          requestTimeout: 100000,
                          agent: false
                      }
VSRestify.patch(job, patchCallBack);

function patchCallBack(err, obj) {

}
```