/**
 * Fetches data from Strapi.
 *
 * @param {string} path - API ID for the collection or single type.
 * @param {string} [params] - request parameters.
 * @param {object} [revalidateParams] - revalidation parameters for the request.
 * @returns {object|null} promise that resolves to the fetched data or null if an error occurs.
 */

export default async function getContent(
	path = '',
	params = '',
	revalidateParams = {}
) {
	try {
		const req = await fetch(
			`${process.env.API_URL}/${process.env.API_PREFIX}/${path}?${params || ''}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`
				},
				next: revalidateParams
			}
		)

		const res = await req.json()
		return res.data ? res.data : res
	} catch (error) {
		return null
	}
}
