import { revalidateTime } from 'utils/config'
import BongIcon from 'public/bong.svg'

export const revalidate = revalidateTime

export default function HomePage() {
	return (
		<div className='container p-4'>
			<h1 className='text-4xl font-bold'>Next.js 15 Template</h1>
			<ul className='mt-4 list-inside list-disc text-lg'>
				<li>TailwindCSS 4.0</li>
				<li>ESLint + Prettier</li>
				<li>Postcss</li>
				<li>
					SVGR <BongIcon className='inline size-7' />
				</li>
			</ul>
		</div>
	)
}
