/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module '*&image' {
	const out: string;
	export default out;
}

declare module '*&imagearray' {
	const out: Array<string>;
	export default out;
}

declare module '*&metadata' {
	const out: OutputMetadata;
	export default out;
}

declare module '*&srcset' {
	const out: string;
	export default out;
}
