import dynamic from 'next/dynamic'
import Link from 'next/link'

const PathListener = dynamic(() => import('./path-listener'), {
	ssr: false
})

export default function Header() {
	return (
		<header
			role='banner'
			className='sticky top-0 flex w-full flex-row items-center justify-between bg-white p-4
				md:px-10 md:py-5'>
			<nav role='navigation'>
				<ul className='flex flex-row items-center'>
					<li className='text-sm'>
						<Link
							href='/'
							className='text-black text-opacity-60 transition-colors'>
							Главная
						</Link>
					</li>
					<li className='text-sm'>
						<Link
							href='/catalog'
							className='my-8 text-black text-opacity-60 transition-colors md:mx-4 md:my-0 lg:mx-8'>
							Каталог
						</Link>
					</li>
					<li className='text-sm'>
						<Link
							href='/contacts'
							className='text-black text-opacity-60 transition-colors'>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<div className='flex flex-row items-center'>
				<Link href='tel:88008008080' className='text-sm text-red-500'>
					8 (800) 800 80-80
				</Link>
			</div>
			<PathListener />
		</header>
	)
}
