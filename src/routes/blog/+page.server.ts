import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/content');
	const posts: Post[] = await response.json();
	// console.log( posts, 'Response');
	return { posts };
}
