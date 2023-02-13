import crypto from 'crypto';
import Streams from 'stream/web';
import { fetch, Headers, Request, Response } from 'undici';

Object.assign(globalThis, Streams, {
	Request,
	Response,
	fetch,
	Headers,
});

if (!globalThis.crypto) {
	globalThis.crypto = crypto.webcrypto;
}
// @ts-ignore
if (!globalThis.crypto.subtle) {
	globalThis.crypto.subtle = crypto.webcrypto.subtle;
}

// @ts-ignore
if (!globalThis.crypto.randomUUID) {
	globalThis.crypto.randomUUID = crypto.webcrypto.randomUUID.bind(crypto.webcrypto);
}
// }
