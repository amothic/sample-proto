// package: 
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Sample = (function () {
  function Sample() {}
  Sample.serviceName = "Sample";
  return Sample;
}());

Sample.Create = {
  methodName: "Create",
  service: Sample,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.CreateRequest,
  responseType: service_pb.CreateResponse
};

Sample.Delete = {
  methodName: "Delete",
  service: Sample,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.DeleteRequest,
  responseType: service_pb.DeleteResponse
};

exports.Sample = Sample;

function SampleClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SampleClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sample.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SampleClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sample.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SampleClient = SampleClient;

