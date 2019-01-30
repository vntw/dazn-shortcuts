.PHONY: zip
zip:
	rm -f ext.zip && \
	zip -r ext.zip ext/ -x '*.git*' -x '*.DS_Store*'
