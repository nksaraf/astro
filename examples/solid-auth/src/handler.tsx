let devEnv = {
	__dev: {
		collectStyles(matches) {
			return {};
		},
		manifest: [],
	},
};

import { StartServer, createHandler, renderAsync } from 'solid-start/entry-server';

export let startHandler = createHandler(renderAsync((event) => <StartServer event={event} />));

export let astroHandler = async ({ cookies, request }) => {
	try {
		const load = await startHandler({
			request,
			env: devEnv as unknown as Env,
			clientAddress: request.headers.get('x-forwarded-for'),
			locals: {},
		});
		return load;
	} catch (e) {
		return new Response(e.message, { status: 500 });
	}
};
