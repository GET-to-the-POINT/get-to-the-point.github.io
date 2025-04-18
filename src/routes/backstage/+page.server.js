import Category from '$lib/post/Category.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const pathname = '/posts' + url.pathname;
	const category = await Category.getCategory(pathname)?.toSerialize();

	return {
		posts: category.allPosts
	};
}
