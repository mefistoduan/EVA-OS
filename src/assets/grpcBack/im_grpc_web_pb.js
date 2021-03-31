/**
 * @fileoverview gRPC-Web generated client stub for im
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.im = require('./im_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.im.ApiClient =
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
proto.im.ApiPromiseClient =
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
 *   !proto.im.SignUpRequest,
 *   !proto.im.SignUpReply>}
 */
const methodDescriptor_Api_SignUpUserCode = new grpc.web.MethodDescriptor(
  '/im.Api/SignUpUserCode',
  grpc.web.MethodType.UNARY,
  proto.im.SignUpRequest,
  proto.im.SignUpReply,
  /**
   * @param {!proto.im.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SignUpReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SignUpRequest,
 *   !proto.im.SignUpReply>}
 */
const methodInfo_Api_SignUpUserCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.SignUpReply,
  /**
   * @param {!proto.im.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SignUpReply.deserializeBinary
);


/**
 * @param {!proto.im.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.SignUpReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.SignUpReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.signUpUserCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SignUpUserCode',
      request,
      metadata || {},
      methodDescriptor_Api_SignUpUserCode,
      callback);
};


/**
 * @param {!proto.im.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.SignUpReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.signUpUserCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SignUpUserCode',
      request,
      metadata || {},
      methodDescriptor_Api_SignUpUserCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SignUpRequest,
 *   !proto.im.SignUpReply>}
 */
const methodDescriptor_Api_SignUpPhone = new grpc.web.MethodDescriptor(
  '/im.Api/SignUpPhone',
  grpc.web.MethodType.UNARY,
  proto.im.SignUpRequest,
  proto.im.SignUpReply,
  /**
   * @param {!proto.im.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SignUpReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SignUpRequest,
 *   !proto.im.SignUpReply>}
 */
const methodInfo_Api_SignUpPhone = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.SignUpReply,
  /**
   * @param {!proto.im.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SignUpReply.deserializeBinary
);


/**
 * @param {!proto.im.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.SignUpReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.SignUpReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.signUpPhone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SignUpPhone',
      request,
      metadata || {},
      methodDescriptor_Api_SignUpPhone,
      callback);
};


/**
 * @param {!proto.im.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.SignUpReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.signUpPhone =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SignUpPhone',
      request,
      metadata || {},
      methodDescriptor_Api_SignUpPhone);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SignInPasswordRequest,
 *   !proto.im.TokenParam>}
 */
const methodDescriptor_Api_SignInUserCode = new grpc.web.MethodDescriptor(
  '/im.Api/SignInUserCode',
  grpc.web.MethodType.UNARY,
  proto.im.SignInPasswordRequest,
  proto.im.TokenParam,
  /**
   * @param {!proto.im.SignInPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SignInPasswordRequest,
 *   !proto.im.TokenParam>}
 */
const methodInfo_Api_SignInUserCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.TokenParam,
  /**
   * @param {!proto.im.SignInPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @param {!proto.im.SignInPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.TokenParam)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.TokenParam>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.signInUserCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SignInUserCode',
      request,
      metadata || {},
      methodDescriptor_Api_SignInUserCode,
      callback);
};


/**
 * @param {!proto.im.SignInPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.TokenParam>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.signInUserCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SignInUserCode',
      request,
      metadata || {},
      methodDescriptor_Api_SignInUserCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SignInPasswordRequest,
 *   !proto.im.TokenParam>}
 */
const methodDescriptor_Api_SignInWithPhonePassword = new grpc.web.MethodDescriptor(
  '/im.Api/SignInWithPhonePassword',
  grpc.web.MethodType.UNARY,
  proto.im.SignInPasswordRequest,
  proto.im.TokenParam,
  /**
   * @param {!proto.im.SignInPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SignInPasswordRequest,
 *   !proto.im.TokenParam>}
 */
const methodInfo_Api_SignInWithPhonePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.TokenParam,
  /**
   * @param {!proto.im.SignInPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @param {!proto.im.SignInPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.TokenParam)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.TokenParam>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.signInWithPhonePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SignInWithPhonePassword',
      request,
      metadata || {},
      methodDescriptor_Api_SignInWithPhonePassword,
      callback);
};


/**
 * @param {!proto.im.SignInPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.TokenParam>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.signInWithPhonePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SignInWithPhonePassword',
      request,
      metadata || {},
      methodDescriptor_Api_SignInWithPhonePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.TokenParam,
 *   !proto.im.SessionCheckReply>}
 */
const methodDescriptor_Api_SubSessionCheck = new grpc.web.MethodDescriptor(
  '/im.Api/SubSessionCheck',
  grpc.web.MethodType.UNARY,
  proto.im.TokenParam,
  proto.im.SessionCheckReply,
  /**
   * @param {!proto.im.TokenParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SessionCheckReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.TokenParam,
 *   !proto.im.SessionCheckReply>}
 */
const methodInfo_Api_SubSessionCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.SessionCheckReply,
  /**
   * @param {!proto.im.TokenParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SessionCheckReply.deserializeBinary
);


/**
 * @param {!proto.im.TokenParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.SessionCheckReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.SessionCheckReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.subSessionCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SubSessionCheck',
      request,
      metadata || {},
      methodDescriptor_Api_SubSessionCheck,
      callback);
};


/**
 * @param {!proto.im.TokenParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.SessionCheckReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.subSessionCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SubSessionCheck',
      request,
      metadata || {},
      methodDescriptor_Api_SubSessionCheck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.PermissionCheck,
 *   !proto.im.SessionCheckReply>}
 */
const methodDescriptor_Api_SubPermissionCheck = new grpc.web.MethodDescriptor(
  '/im.Api/SubPermissionCheck',
  grpc.web.MethodType.UNARY,
  proto.im.PermissionCheck,
  proto.im.SessionCheckReply,
  /**
   * @param {!proto.im.PermissionCheck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SessionCheckReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.PermissionCheck,
 *   !proto.im.SessionCheckReply>}
 */
const methodInfo_Api_SubPermissionCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.SessionCheckReply,
  /**
   * @param {!proto.im.PermissionCheck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.SessionCheckReply.deserializeBinary
);


/**
 * @param {!proto.im.PermissionCheck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.SessionCheckReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.SessionCheckReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.subPermissionCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SubPermissionCheck',
      request,
      metadata || {},
      methodDescriptor_Api_SubPermissionCheck,
      callback);
};


/**
 * @param {!proto.im.PermissionCheck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.SessionCheckReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.subPermissionCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SubPermissionCheck',
      request,
      metadata || {},
      methodDescriptor_Api_SubPermissionCheck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.TokenParam,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_SubSignOut = new grpc.web.MethodDescriptor(
  '/im.Api/SubSignOut',
  grpc.web.MethodType.UNARY,
  proto.im.TokenParam,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.TokenParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.TokenParam,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_SubSignOut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.TokenParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.TokenParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.subSignOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SubSignOut',
      request,
      metadata || {},
      methodDescriptor_Api_SubSignOut,
      callback);
};


/**
 * @param {!proto.im.TokenParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.subSignOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SubSignOut',
      request,
      metadata || {},
      methodDescriptor_Api_SubSignOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SaveServiceListRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_SubServiceSaveList = new grpc.web.MethodDescriptor(
  '/im.Api/SubServiceSaveList',
  grpc.web.MethodType.UNARY,
  proto.im.SaveServiceListRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SaveServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SaveServiceListRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_SubServiceSaveList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SaveServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.SaveServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.subServiceSaveList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SubServiceSaveList',
      request,
      metadata || {},
      methodDescriptor_Api_SubServiceSaveList,
      callback);
};


/**
 * @param {!proto.im.SaveServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.subServiceSaveList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SubServiceSaveList',
      request,
      metadata || {},
      methodDescriptor_Api_SubServiceSaveList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.UserListRequest,
 *   !proto.im.UserListReply>}
 */
const methodDescriptor_Api_UserList = new grpc.web.MethodDescriptor(
  '/im.Api/UserList',
  grpc.web.MethodType.UNARY,
  proto.im.UserListRequest,
  proto.im.UserListReply,
  /**
   * @param {!proto.im.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.UserListRequest,
 *   !proto.im.UserListReply>}
 */
const methodInfo_Api_UserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.UserListReply,
  /**
   * @param {!proto.im.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserListReply.deserializeBinary
);


/**
 * @param {!proto.im.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.UserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.UserListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.userList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/UserList',
      request,
      metadata || {},
      methodDescriptor_Api_UserList,
      callback);
};


/**
 * @param {!proto.im.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.UserListReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.userList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/UserList',
      request,
      metadata || {},
      methodDescriptor_Api_UserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.UserGetInfoRequest,
 *   !proto.im.UserInfo>}
 */
const methodDescriptor_Api_UserGetInfo = new grpc.web.MethodDescriptor(
  '/im.Api/UserGetInfo',
  grpc.web.MethodType.UNARY,
  proto.im.UserGetInfoRequest,
  proto.im.UserInfo,
  /**
   * @param {!proto.im.UserGetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.UserGetInfoRequest,
 *   !proto.im.UserInfo>}
 */
const methodInfo_Api_UserGetInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.UserInfo,
  /**
   * @param {!proto.im.UserGetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserInfo.deserializeBinary
);


/**
 * @param {!proto.im.UserGetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.UserInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.UserInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.userGetInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/UserGetInfo',
      request,
      metadata || {},
      methodDescriptor_Api_UserGetInfo,
      callback);
};


/**
 * @param {!proto.im.UserGetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.UserInfo>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.userGetInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/UserGetInfo',
      request,
      metadata || {},
      methodDescriptor_Api_UserGetInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.UserRolesRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_UserAddRoles = new grpc.web.MethodDescriptor(
  '/im.Api/UserAddRoles',
  grpc.web.MethodType.UNARY,
  proto.im.UserRolesRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.UserRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.UserRolesRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_UserAddRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.UserRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.UserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.userAddRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/UserAddRoles',
      request,
      metadata || {},
      methodDescriptor_Api_UserAddRoles,
      callback);
};


/**
 * @param {!proto.im.UserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.userAddRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/UserAddRoles',
      request,
      metadata || {},
      methodDescriptor_Api_UserAddRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.UserRolesRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_UserRemoveRoles = new grpc.web.MethodDescriptor(
  '/im.Api/UserRemoveRoles',
  grpc.web.MethodType.UNARY,
  proto.im.UserRolesRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.UserRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.UserRolesRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_UserRemoveRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.UserRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.UserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.userRemoveRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/UserRemoveRoles',
      request,
      metadata || {},
      methodDescriptor_Api_UserRemoveRoles,
      callback);
};


/**
 * @param {!proto.im.UserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.userRemoveRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/UserRemoveRoles',
      request,
      metadata || {},
      methodDescriptor_Api_UserRemoveRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.UserGetColumnListRequest,
 *   !proto.im.UserGetColumnListReply>}
 */
const methodDescriptor_Api_UserGetColumnList = new grpc.web.MethodDescriptor(
  '/im.Api/UserGetColumnList',
  grpc.web.MethodType.UNARY,
  proto.im.UserGetColumnListRequest,
  proto.im.UserGetColumnListReply,
  /**
   * @param {!proto.im.UserGetColumnListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserGetColumnListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.UserGetColumnListRequest,
 *   !proto.im.UserGetColumnListReply>}
 */
const methodInfo_Api_UserGetColumnList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.UserGetColumnListReply,
  /**
   * @param {!proto.im.UserGetColumnListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserGetColumnListReply.deserializeBinary
);


/**
 * @param {!proto.im.UserGetColumnListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.UserGetColumnListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.UserGetColumnListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.userGetColumnList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/UserGetColumnList',
      request,
      metadata || {},
      methodDescriptor_Api_UserGetColumnList,
      callback);
};


/**
 * @param {!proto.im.UserGetColumnListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.UserGetColumnListReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.userGetColumnList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/UserGetColumnList',
      request,
      metadata || {},
      methodDescriptor_Api_UserGetColumnList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.CreateRoleRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_RoleCreate = new grpc.web.MethodDescriptor(
  '/im.Api/RoleCreate',
  grpc.web.MethodType.UNARY,
  proto.im.CreateRoleRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.CreateRoleRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_RoleCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.roleCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/RoleCreate',
      request,
      metadata || {},
      methodDescriptor_Api_RoleCreate,
      callback);
};


/**
 * @param {!proto.im.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.roleCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/RoleCreate',
      request,
      metadata || {},
      methodDescriptor_Api_RoleCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RoleListRequest,
 *   !proto.im.RoleListReply>}
 */
const methodDescriptor_Api_RoleList = new grpc.web.MethodDescriptor(
  '/im.Api/RoleList',
  grpc.web.MethodType.UNARY,
  proto.im.RoleListRequest,
  proto.im.RoleListReply,
  /**
   * @param {!proto.im.RoleListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.RoleListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RoleListRequest,
 *   !proto.im.RoleListReply>}
 */
const methodInfo_Api_RoleList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.RoleListReply,
  /**
   * @param {!proto.im.RoleListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.RoleListReply.deserializeBinary
);


/**
 * @param {!proto.im.RoleListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.RoleListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.RoleListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.roleList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/RoleList',
      request,
      metadata || {},
      methodDescriptor_Api_RoleList,
      callback);
};


/**
 * @param {!proto.im.RoleListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.RoleListReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.roleList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/RoleList',
      request,
      metadata || {},
      methodDescriptor_Api_RoleList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.Role,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_RoleEdit = new grpc.web.MethodDescriptor(
  '/im.Api/RoleEdit',
  grpc.web.MethodType.UNARY,
  proto.im.Role,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.Role} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.Role,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_RoleEdit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.Role} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.Role} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.roleEdit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/RoleEdit',
      request,
      metadata || {},
      methodDescriptor_Api_RoleEdit,
      callback);
};


/**
 * @param {!proto.im.Role} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.roleEdit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/RoleEdit',
      request,
      metadata || {},
      methodDescriptor_Api_RoleEdit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RolePermissionRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_RoleAddPermissions = new grpc.web.MethodDescriptor(
  '/im.Api/RoleAddPermissions',
  grpc.web.MethodType.UNARY,
  proto.im.RolePermissionRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.RolePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RolePermissionRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_RoleAddPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.RolePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.RolePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.roleAddPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/RoleAddPermissions',
      request,
      metadata || {},
      methodDescriptor_Api_RoleAddPermissions,
      callback);
};


/**
 * @param {!proto.im.RolePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.roleAddPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/RoleAddPermissions',
      request,
      metadata || {},
      methodDescriptor_Api_RoleAddPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.RolePermissionRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_RoleRemovePermissions = new grpc.web.MethodDescriptor(
  '/im.Api/RoleRemovePermissions',
  grpc.web.MethodType.UNARY,
  proto.im.RolePermissionRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.RolePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.RolePermissionRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_RoleRemovePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.RolePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.RolePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.roleRemovePermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/RoleRemovePermissions',
      request,
      metadata || {},
      methodDescriptor_Api_RoleRemovePermissions,
      callback);
};


/**
 * @param {!proto.im.RolePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.roleRemovePermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/RoleRemovePermissions',
      request,
      metadata || {},
      methodDescriptor_Api_RoleRemovePermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.ServiceListRequest,
 *   !proto.im.ServiceListReply>}
 */
const methodDescriptor_Api_ServiceList = new grpc.web.MethodDescriptor(
  '/im.Api/ServiceList',
  grpc.web.MethodType.UNARY,
  proto.im.ServiceListRequest,
  proto.im.ServiceListReply,
  /**
   * @param {!proto.im.ServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.ServiceListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.ServiceListRequest,
 *   !proto.im.ServiceListReply>}
 */
const methodInfo_Api_ServiceList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.ServiceListReply,
  /**
   * @param {!proto.im.ServiceListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.ServiceListReply.deserializeBinary
);


/**
 * @param {!proto.im.ServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.ServiceListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.ServiceListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.serviceList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/ServiceList',
      request,
      metadata || {},
      methodDescriptor_Api_ServiceList,
      callback);
};


/**
 * @param {!proto.im.ServiceListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.ServiceListReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.serviceList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/ServiceList',
      request,
      metadata || {},
      methodDescriptor_Api_ServiceList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.ServiceRemoveRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_ServiceRemoveList = new grpc.web.MethodDescriptor(
  '/im.Api/ServiceRemoveList',
  grpc.web.MethodType.UNARY,
  proto.im.ServiceRemoveRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.ServiceRemoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.ServiceRemoveRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_ServiceRemoveList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.ServiceRemoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.ServiceRemoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.serviceRemoveList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/ServiceRemoveList',
      request,
      metadata || {},
      methodDescriptor_Api_ServiceRemoveList,
      callback);
};


/**
 * @param {!proto.im.ServiceRemoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.serviceRemoveList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/ServiceRemoveList',
      request,
      metadata || {},
      methodDescriptor_Api_ServiceRemoveList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.CreateShopRequest,
 *   !proto.im.CreateReply>}
 */
const methodDescriptor_Api_ShopCreate = new grpc.web.MethodDescriptor(
  '/im.Api/ShopCreate',
  grpc.web.MethodType.UNARY,
  proto.im.CreateShopRequest,
  proto.im.CreateReply,
  /**
   * @param {!proto.im.CreateShopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.CreateReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.CreateShopRequest,
 *   !proto.im.CreateReply>}
 */
const methodInfo_Api_ShopCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.CreateReply,
  /**
   * @param {!proto.im.CreateShopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.CreateReply.deserializeBinary
);


/**
 * @param {!proto.im.CreateShopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.CreateReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.CreateReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.shopCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/ShopCreate',
      request,
      metadata || {},
      methodDescriptor_Api_ShopCreate,
      callback);
};


/**
 * @param {!proto.im.CreateShopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.CreateReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.shopCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/ShopCreate',
      request,
      metadata || {},
      methodDescriptor_Api_ShopCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.ShopListRequest,
 *   !proto.im.ShopListReply>}
 */
const methodDescriptor_Api_ShopList = new grpc.web.MethodDescriptor(
  '/im.Api/ShopList',
  grpc.web.MethodType.UNARY,
  proto.im.ShopListRequest,
  proto.im.ShopListReply,
  /**
   * @param {!proto.im.ShopListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.ShopListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.ShopListRequest,
 *   !proto.im.ShopListReply>}
 */
const methodInfo_Api_ShopList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.ShopListReply,
  /**
   * @param {!proto.im.ShopListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.ShopListReply.deserializeBinary
);


/**
 * @param {!proto.im.ShopListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.ShopListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.ShopListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.shopList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/ShopList',
      request,
      metadata || {},
      methodDescriptor_Api_ShopList,
      callback);
};


/**
 * @param {!proto.im.ShopListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.ShopListReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.shopList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/ShopList',
      request,
      metadata || {},
      methodDescriptor_Api_ShopList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SystemAddShopRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_SystemAddShop = new grpc.web.MethodDescriptor(
  '/im.Api/SystemAddShop',
  grpc.web.MethodType.UNARY,
  proto.im.SystemAddShopRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SystemAddShopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SystemAddShopRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_SystemAddShop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SystemAddShopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.SystemAddShopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.systemAddShop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SystemAddShop',
      request,
      metadata || {},
      methodDescriptor_Api_SystemAddShop,
      callback);
};


/**
 * @param {!proto.im.SystemAddShopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.systemAddShop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SystemAddShop',
      request,
      metadata || {},
      methodDescriptor_Api_SystemAddShop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.SystemAddUserRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_SystemAddUser = new grpc.web.MethodDescriptor(
  '/im.Api/SystemAddUser',
  grpc.web.MethodType.UNARY,
  proto.im.SystemAddUserRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SystemAddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.SystemAddUserRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_SystemAddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.SystemAddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.SystemAddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.systemAddUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/SystemAddUser',
      request,
      metadata || {},
      methodDescriptor_Api_SystemAddUser,
      callback);
};


/**
 * @param {!proto.im.SystemAddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.systemAddUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/SystemAddUser',
      request,
      metadata || {},
      methodDescriptor_Api_SystemAddUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.CreateSystemRequest,
 *   !proto.im.TokenParam>}
 */
const methodDescriptor_Api_IMSystemCreate = new grpc.web.MethodDescriptor(
  '/im.Api/IMSystemCreate',
  grpc.web.MethodType.UNARY,
  proto.im.CreateSystemRequest,
  proto.im.TokenParam,
  /**
   * @param {!proto.im.CreateSystemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.CreateSystemRequest,
 *   !proto.im.TokenParam>}
 */
const methodInfo_Api_IMSystemCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.TokenParam,
  /**
   * @param {!proto.im.CreateSystemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.TokenParam.deserializeBinary
);


/**
 * @param {!proto.im.CreateSystemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.TokenParam)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.TokenParam>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.iMSystemCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/IMSystemCreate',
      request,
      metadata || {},
      methodDescriptor_Api_IMSystemCreate,
      callback);
};


/**
 * @param {!proto.im.CreateSystemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.TokenParam>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.iMSystemCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/IMSystemCreate',
      request,
      metadata || {},
      methodDescriptor_Api_IMSystemCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.DefaultRequest,
 *   !proto.im.DefaultReply>}
 */
const methodDescriptor_Api_IMSignOut = new grpc.web.MethodDescriptor(
  '/im.Api/IMSignOut',
  grpc.web.MethodType.UNARY,
  proto.im.DefaultRequest,
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.DefaultRequest,
 *   !proto.im.DefaultReply>}
 */
const methodInfo_Api_IMSignOut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.DefaultReply,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.DefaultReply.deserializeBinary
);


/**
 * @param {!proto.im.DefaultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.DefaultReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.DefaultReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.iMSignOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/IMSignOut',
      request,
      metadata || {},
      methodDescriptor_Api_IMSignOut,
      callback);
};


/**
 * @param {!proto.im.DefaultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.DefaultReply>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.iMSignOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/IMSignOut',
      request,
      metadata || {},
      methodDescriptor_Api_IMSignOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.DefaultRequest,
 *   !proto.im.UserInfo>}
 */
const methodDescriptor_Api_IMSelfInfo = new grpc.web.MethodDescriptor(
  '/im.Api/IMSelfInfo',
  grpc.web.MethodType.UNARY,
  proto.im.DefaultRequest,
  proto.im.UserInfo,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.DefaultRequest,
 *   !proto.im.UserInfo>}
 */
const methodInfo_Api_IMSelfInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.UserInfo,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.UserInfo.deserializeBinary
);


/**
 * @param {!proto.im.DefaultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.im.UserInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.im.UserInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.iMSelfInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/im.Api/IMSelfInfo',
      request,
      metadata || {},
      methodDescriptor_Api_IMSelfInfo,
      callback);
};


/**
 * @param {!proto.im.DefaultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.im.UserInfo>}
 *     Promise that resolves to the response
 */
proto.im.ApiPromiseClient.prototype.iMSelfInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/im.Api/IMSelfInfo',
      request,
      metadata || {},
      methodDescriptor_Api_IMSelfInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.im.DefaultRequest,
 *   !proto.im.Message>}
 */
const methodDescriptor_Api_IMMessageRcv = new grpc.web.MethodDescriptor(
  '/im.Api/IMMessageRcv',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.im.DefaultRequest,
  proto.im.Message,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.im.DefaultRequest,
 *   !proto.im.Message>}
 */
const methodInfo_Api_IMMessageRcv = new grpc.web.AbstractClientBase.MethodInfo(
  proto.im.Message,
  /**
   * @param {!proto.im.DefaultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.im.Message.deserializeBinary
);


/**
 * @param {!proto.im.DefaultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.im.Message>}
 *     The XHR Node Readable Stream
 */
proto.im.ApiClient.prototype.iMMessageRcv =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/im.Api/IMMessageRcv',
      request,
      metadata || {},
      methodDescriptor_Api_IMMessageRcv);
};


/**
 * @param {!proto.im.DefaultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.im.Message>}
 *     The XHR Node Readable Stream
 */
proto.im.ApiPromiseClient.prototype.iMMessageRcv =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/im.Api/IMMessageRcv',
      request,
      metadata || {},
      methodDescriptor_Api_IMMessageRcv);
};


module.exports = proto.im;

