'use client'

/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useState } from 'react'

export const ExampleValueContext = createContext(null)
export const ExampleSetValueContext = createContext(null)

export function ExampleContextManager({ children }) {
	const [exampleValue, setExampleValue] = useState(null)

	return (
		<ExampleValueContext.Provider value={exampleValue}>
			<ExampleSetValueContext.Provider value={setExampleValue}>
				{children}
			</ExampleSetValueContext.Provider>
		</ExampleValueContext.Provider>
	)
}
