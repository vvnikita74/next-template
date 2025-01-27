/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * Creates a throttled function that only invokes the provided function at most once per every wait milliseconds.
 *
 * @template F - The type of the function to throttle
 * @param {F} func - The function to throttle
 * @param {number} wait - The number of milliseconds to throttle invocations to
 * @returns {(this: ThisParameterType<F>, ...args: Parameters<F>) => void} The throttled function
 */
export default function throttle<
	F extends (...args: unknown[]) => unknown
>(
	func: F,
	wait: number
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
	let lastTime = 0

	return function (
		this: ThisParameterType<F>,
		...args: Parameters<F>
	) {
		const context = this
		const now = Date.now()

		if (now - lastTime >= wait) {
			func.apply(context, args)
			lastTime = now
		}
	}
}
