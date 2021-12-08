build:
	@docker run --rm -v `pwd`:/workdir -w /workdir \
	ghcr.io/amothic/protoc --proto_path=proto \
	--go_out=go/pb --go_opt=paths=source_relative \
	--go-grpc_out=go/pb --go-grpc_opt=paths=source_relative \
	--js_out=import_style=commonjs:ts --ts_out=service=grpc-web:ts \
	service.proto
