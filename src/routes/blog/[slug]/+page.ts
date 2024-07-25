import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log(params, 'Params');
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		// console.log(post, 'Post');
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
