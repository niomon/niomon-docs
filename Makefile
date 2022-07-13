.PHONY: all
all: build

.PHONY: build
build:
	yarn install --frozen-lockfile
	yarn build
