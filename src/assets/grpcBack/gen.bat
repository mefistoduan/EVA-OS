protoc -I . grpcweb.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
protoc -I . grpcweb.proto --js_out=import_style=commonjs:.