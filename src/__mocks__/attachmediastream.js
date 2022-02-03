// Basic "attachmediastream" implementation without using "webrtc-adapter", as
// "browserDetails" is null in unit tests.
export default function(stream, element, options) {
	if (!element) {
		element = document.createElement(options.audio ? 'audio' : 'video')
	}

	element.srcObject = stream;

	return element
}
