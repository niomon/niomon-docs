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