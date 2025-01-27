/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * Creates a debounced function that delays invoking the provided function until after
 * the specified wait time has elapsed since the last time the debounced function was invoked.
 *
 * @template F - The type of the function to debounce
 * @param {F} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {(...args: Parameters<F> & ThisParameterType<F>) => void} The debounced function
 */
export default function debounce<
	F extends (...args: unknown[]) => unknown
>(
	func: F,
	wait: number
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null

	return function (
		this: ThisParameterType<F>,
		...args: Parameters<F>
	) {
		const context = this

		if (timeout !== null) {
			clearTimeout(timeout)
		}

		timeout = setTimeout(() => {
			func.apply(context, args)
		}, wait)
	}
}
