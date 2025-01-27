/**
 * Formats the given text by inserting non-breaking spaces after certain prepositions and numbers.
 * This helps in maintaining proper text flow and prevents unwanted line breaks.
 *
 * @param {string | null | undefined} text - The text to be formatted (can be null/undefined)
 * @returns {string} The formatted text with non-breaking spaces
 */
export default function formatText(
	text: string | null | undefined
): string {
	if (!text) return ' '

	return text.replace(
		/(?<=^|[\s,:;])(за|вы|во|[а-яёА-ЯЁ]|вне|внутри|для|до|за|из|из-за|из-под|ко|кроме|между|на|над|надо|об|обо|около|перед|передо|по|под|подо|после|при|про|со|через|\d+%|не|от|без|\d+)\s+/gimu,
		(_, group1) => `${group1}\u00A0`
	)
}
