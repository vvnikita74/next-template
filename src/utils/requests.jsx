/**
 * Fetches data from Strapi.
 *
 * @param {string} path - API ID for the Collection or Single type.
 * @param {Object} settings - Request settings.
 * @param {boolean} [settings.populate] - Whether to fetch all internal data.
 * @param {Object} [settings.params] - Request parameters.
 * @param {boolean} [settings.isSingle] - Whether the request is for a single type.
 * @param {Object} [settings.revalidateParams] - Revalidation parameters for the request.
 * @returns {Promise<Object|null>} - A promise that resolves to the fetched data or null if an error occurs.
 */
export default async function getContent(path, settings) {
	let requestParams = ''

	requestParams += settings?.populate ? 'populate=deep' : ''
	requestParams += settings?.params ? `&${settings.params}` : ''

	try {
		const request = await fetch(`${process.env.API_URL}/${path}?${requestParams}`, {
			headers: { Authorization: `Bearer ${process.env.API_KEY}` },
			next: settings?.revalidateParams
		})

		const data = await request.json()

		return settings?.isSingle ? data : data.data
	} catch (error) {
		return null
	}
}
