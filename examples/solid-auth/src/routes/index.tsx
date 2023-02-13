import { getSession } from '@auth/solid-start';
import { createRouteAction, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { logout } from '~/db/session';
import { authOpts } from './api/auth/[...solidauth]';
import { signIn, signOut } from '@auth/solid-start/client';
import Hello from '../pages/hello.astro';
import * as astro from 'astro/runtime/server/index.js';
console.log(astro);
console.log(astro.renderToString(Hello, {}));
export function routeData() {
	return createServerData$(async (_, { request }) => {
		const user = await getSession(request, authOpts);

		if (!user) {
			throw redirect('/login');
		}

		return user;
	});
}

export default function Home() {
	const user = useRouteData<typeof routeData>();
	const [, { Form }] = createServerAction$((f: FormData) =>
		signOut({
			callbackUrl: 'http://localhost:3000/login',
		})
	);

	return (
		<main class="w-full p-4 space-y-2">
			<h1 class="font-bold text-3xl">Hello {user()?.user?.name}</h1>
			<h3 class="font-bold text-xl">Message board</h3>
			<Form>
				<button name="logout" type="submit">
					Logout
				</button>
			</Form>
		</main>
	);
}
