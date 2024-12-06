/**
 * @typedef {Object} Post - a single post
 * @property {number} timeCreated - unix timestamp, can be formatted with new Date()
 * @property {{name: string; href: string}} author - name and socials of the post author
 * @property {string} title - post title
 * @property {string[]} tags - post tags - related keywords or general categories the post fits into.
 * @property {string} body - post contents, can either be a string or stringified HTML.
 */

async function getPosts() {
	const postsRes = await fetch('./public/data/posts.json', { method: 'GET' });

	/**
	 * @type {Post[]}
	 */
	const posts = await postsRes.json();

	const postsContainer = document.getElementById('blogpost-links');
	/**
	 * @type {HTMLTemplateElement | null}
	 */
	const template = document.getElementById('blogPostLink_template');

	if (!postsContainer || !template) {
		return;
	}

	posts
		.sort((a, b) => b.timeCreated - a.timeCreated)
		.forEach((post) => {
			console.log({ post });
			/**
			 * @type {HTMLTemplateElement | null}
			 */
			const postTemplateClone = template.content.cloneNode(true);
			if (!postTemplateClone) return;
			/**
			 * @type {HTMLTimeElement | null}
			 */
			const time = postTemplateClone.querySelector('#blogPostLink_time');
			if (!time) return;

			const createdDate = new Date(post.timeCreated);
			time.innerHTML = createdDate.toDateString();
			time.dateTime = createdDate.toISOString();

			/**
			 * @type {HTMLAnchorElement | null}
			 */
			const titleLink = postTemplateClone.querySelector('#blogPostLink_href');
			if (!titleLink) return;

			// titleLink.innerHTML = post.title;
			titleLink.href = `./pages/posts/?id=${post.timeCreated}`;

			/**
			 * @type {HTMLAnchorElement | null}
			 */
			const titleName = postTemplateClone.querySelector('#blogPostLink_name');
			if (!titleName) return;

			titleName.innerHTML = post.title + titleName.innerHTML;

			postsContainer.appendChild(postTemplateClone);
		});
	document.getElementById('loading')?.remove();
}

getPosts();