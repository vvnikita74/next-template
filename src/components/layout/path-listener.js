'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'

export default function PathListener() {
	const path = usePathname()
	const navLinks = useMemo(() => document.querySelectorAll('nav ul a'), [])

	useEffect(() => {
		navLinks.forEach(link => {
			link.classList.toggle(
				'text-opacity-60',
				link.getAttribute('href') !== path
			)
		})
	}, [path, navLinks])
}
