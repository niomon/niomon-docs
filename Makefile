.PHONY: all
all: fetch-api-docs build

.PHONY: build
build:
	yarn install --frozen-lockfile
	yarn build

.PHONY: fetch-api-docs
fetch-api-docs:
	rm -fr static/api
	@temp=$$(mktemp -d) && \
		curl -s -L -o $${temp}/artifacts.zip --header "PRIVATE-TOKEN: ${GITLAB_ACCESS_TOKEN}" https://gitlab.com/api/v4/projects/${GITLAB_PROJECT_ID}/jobs/artifacts/main/download?job=build%20api%20docs && \
		unzip -q -d $${temp} $${temp}/artifacts.zip && \
		mv $${temp}/api/dist static/api/ && \
		rm -fr $${temp}

.PHONY: fetch-walletkit-docs
fetch-walletkit-docs:
	rm -rf static/sdk/walletkit
	mkdir -p static/sdk
	@temp=$$(mktemp -d) && \
		curl -s -L -o $${temp}/artifacts.zip --header "PRIVATE-TOKEN: ${GITLAB_ACCESS_TOKEN}" https://gitlab.com/api/v4/projects/${GITLAB_PROJECT_ID}/jobs/artifacts/main/download?job=docs%20walletkit && \
		unzip -q -d $${temp} $${temp}/artifacts.zip && \
		mv $${temp}/js/walletkit/build/docs static/sdk/walletkit && \
		rm -fr $${temp}
