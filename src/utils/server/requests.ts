/**
 * Fetches data from Strapi.
 *
 * @param {string} path - API ID for the collection or single type.
 * @param {string} [params] - Request parameters.
 * @param {object} [next] - Next fetch parameters for the request.
 * @returns {Promise<object | null>} Promise that resolves to the fetched data or null if an error occurs.
 */
export default async function getContent(
	path: string = '',
	params: string = '',
	next: object = {}
): Promise<object | null> {
	try {
		const response = await fetch(
			`${process.env.API_URL}/${process.env.API_PREFIX}/${path}?${params}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`
				},
				...next
			}
		)

		const result = await response.json()

		return result.data ? result.data : result
	} catch (error) {
		console.error('Error fetching content:', error)
		return null
	}
}
