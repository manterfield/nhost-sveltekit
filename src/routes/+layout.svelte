<script lang="ts">
	import { setContext } from 'svelte';

	import { authStore } from '$lib/nhost/nhost.client';


	setContext('authStore', authStore);

	$: loggedIn = $authStore.isSignedIn;
</script>

<div class="bg-white dark:bg-black">
	<h1>Hello</h1>
	<slot />
</div>
