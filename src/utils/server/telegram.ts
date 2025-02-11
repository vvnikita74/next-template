/**
 * Sends a message to a specified Telegram chat using the Telegram Bot API.
 *
 * @param {string} message - The message to be sent.
 * @returns {Promise<boolean>} - Returns true if the message was sent successfully, otherwise false.
 */
export default async function sendMessage(
	message: string
): Promise<boolean> {
	try {
		const response = await fetch(
			`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					chat_id: process.env.TG_BOT_CHAT_ID,
					text: message,
					parse_mode: 'Markdown'
				})
			}
		)

		// Check if the response status is 200 (OK)
		return response.status === 200
	} catch (error) {
		console.error('Error sending message:', error)
		return false
	}
}
