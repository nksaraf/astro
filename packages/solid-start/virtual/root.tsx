// @refresh reload
import { Suspense } from 'solid-js';
import { Body, Head, Html, Meta, Scripts } from '../root';
import { Routes } from '@solidjs/router';
import FileRoutes from '../root/FileRoutes';

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
