ROOT:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

server:
	yarn run start

watch:
	# this needs to export to public
	sass styles:static --watch

dist:
	yarn run build

.PHONY: server watch dist
