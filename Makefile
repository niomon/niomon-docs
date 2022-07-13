API_DIR = $(CURDIR)/../api

GIT_COMMIT = $(shell git rev-parse HEAD)
GIT_SHA    = $(shell git rev-parse --short HEAD)
GIT_TAG    = $(shell git describe --tags --abbrev=0 --exact-match 2>/dev/null)
GIT_DIRTY  = $(shell test -n "`git status --porcelain`" && echo "dirty" || echo "clean")

VERSION ?= $(or ${GIT_TAG}, ${GIT_SHA})
REGISTRY_IMAGE ?= niomon

.PHONY: all
all: build

.PHONY: api-docs
api-docs:
	make -C "${API_DIR}" all
	cp -R "${API_DIR}"/dist/docs/api static

.PHONY: ios-sdk-docs
ios-sdk-docs:
	mkdir -p static/sdk
	cp -R $(CURDIR)/../ios/NiomonSDK/docs static/sdk/NiomonSDK

.PHONY: copy-ditto-demo
copy-ditto-demo:
	mkdir -p static/demo
	cp -R $(CURDIR)/../demo/ditto-demo/build static/demo/ditto-demo

.PHONY: build
build: api-docs copy-ditto-demo
	yarn --cwd ../js/niomon-js install
	yarn install
	yarn build

.PHONY: dist-image
dist-image:
	docker build --build-arg VERSION=${VERSION} -t ${REGISTRY_IMAGE}/docs:${VERSION} .

.PHONY: push-dist-image
push-dist-image: dist-image
	docker push ${REGISTRY_IMAGE}/docs:${VERSION}