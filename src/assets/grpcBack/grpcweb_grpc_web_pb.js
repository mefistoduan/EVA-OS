/**
 * @fileoverview gRPC-Web generated client stub for grpcweb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpcweb = require('./grpcweb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpcweb.ApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpcweb.ApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcweb.SignInRequest,
 *   !proto.grpcweb.SignInReply>}
 */
const methodDescriptor_Api_SignIn = new grpc.web.MethodDescriptor(
  '/grpcweb.Api/SignIn',
  grpc.web.MethodType.UNARY,
  proto.grpcweb.SignInRequest,
  proto.grpcweb.SignInReply,
  /**
   * @param {!proto.grpcweb.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.SignInReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcweb.SignInRequest,
 *   !proto.grpcweb.SignInReply>}
 */
const methodInfo_Api_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcweb.SignInReply,
  /**
   * @param {!proto.grpcweb.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.SignInReply.deserializeBinary
);


/**
 * @param {!proto.grpcweb.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpcweb.SignInReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcweb.SignInReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcweb.ApiClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcweb.Api/SignIn',
      request,
      metadata || {},
      methodDescriptor_Api_SignIn,
      callback);
};


/**
 * @param {!proto.grpcweb.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcweb.SignInReply>}
 *     Promise that resolves to the response
 */
proto.grpcweb.ApiPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcweb.Api/SignIn',
      request,
      metadata || {},
      methodDescriptor_Api_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcweb.SignInRequest,
 *   !proto.grpcweb.SignInReply>}
 */
const methodDescriptor_Api_SignInWithError = new grpc.web.MethodDescriptor(
  '/grpcweb.Api/SignInWithError',
  grpc.web.MethodType.UNARY,
  proto.grpcweb.SignInRequest,
  proto.grpcweb.SignInReply,
  /**
   * @param {!proto.grpcweb.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.SignInReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcweb.SignInRequest,
 *   !proto.grpcweb.SignInReply>}
 */
const methodInfo_Api_SignInWithError = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcweb.SignInReply,
  /**
   * @param {!proto.grpcweb.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.SignInReply.deserializeBinary
);


/**
 * @param {!proto.grpcweb.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpcweb.SignInReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcweb.SignInReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcweb.ApiClient.prototype.signInWithError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcweb.Api/SignInWithError',
      request,
      metadata || {},
      methodDescriptor_Api_SignInWithError,
      callback);
};


/**
 * @param {!proto.grpcweb.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcweb.SignInReply>}
 *     Promise that resolves to the response
 */
proto.grpcweb.ApiPromiseClient.prototype.signInWithError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcweb.Api/SignInWithError',
      request,
      metadata || {},
      methodDescriptor_Api_SignInWithError);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcweb.FlushDataRequest,
 *   !proto.grpcweb.Data>}
 */
const methodDescriptor_Api_FlushData = new grpc.web.MethodDescriptor(
  '/grpcweb.Api/FlushData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.grpcweb.FlushDataRequest,
  proto.grpcweb.Data,
  /**
   * @param {!proto.grpcweb.FlushDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.Data.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcweb.FlushDataRequest,
 *   !proto.grpcweb.Data>}
 */
const methodInfo_Api_FlushData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcweb.Data,
  /**
   * @param {!proto.grpcweb.FlushDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcweb.Data.deserializeBinary
);


/**
 * @param {!proto.grpcweb.FlushDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpcweb.Data>}
 *     The XHR Node Readable Stream
 */
proto.grpcweb.ApiClient.prototype.flushData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpcweb.Api/FlushData',
      request,
      metadata || {},
      methodDescriptor_Api_FlushData);
};


/**
 * @param {!proto.grpcweb.FlushDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpcweb.Data>}
 *     The XHR Node Readable Stream
 */
proto.grpcweb.ApiPromiseClient.prototype.flushData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpcweb.Api/FlushData',
      request,
      metadata || {},
      methodDescriptor_Api_FlushData);
};


module.exports = proto.grpcweb;

