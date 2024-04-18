import { NhostClient } from '@nhost/nhost-js';

export const nhost = new NhostClient({
	subdomain: 'local'
});

import { readable } from 'svelte/store';

export const authStore = readable(null, () => {
	// console.log('---user', nhost.auth.getUser());
	// nhost.auth.onAuthStateChanged((event, session) => {
	// 	console.log(`Auth state changed! Event: ${event} - Session: ${session}`);
	// });

	return () => {
		console.log('No more auth subscribers!');
	};
});
