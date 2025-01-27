import '@/styles/global.css'
import type { ReactNode } from 'react'

export default function RootLayout({
	children
}: {
	children: ReactNode
}) {
	return (
		<html lang='ru'>
			<body className='mx-auto min-w-80'>{children}</body>
		</html>
	)
}
