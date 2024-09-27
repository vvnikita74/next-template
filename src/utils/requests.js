/**
 * Fetches data from Strapi.
 *
 * @param {string} path - API ID for the Collection or Single type.
 * @param {Object} settings - Request settings.
 * @param {Object} [settings.params] - Request parameters.
 * @param {boolean} [settings.isSingle] - Whether the request is for a single type.
 * @param {Object} [settings.revalidateParams] - Revalidation parameters for the request.
 * @returns {Promise<Object|null>} - A promise that resolves to the fetched data or null if an error occurs.
 */

export default async function getContent(
	path = '',
	settings = {}
) {
	try {
		const request = await fetch(
			`${process.env.API_URL}/${path}?${settings.params || ''}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`
				},
				next: settings?.revalidateParams
			}
		)

		// TODO: test returning a json() method
		return request.json()
	} catch (error) {
		return null
	}
}
