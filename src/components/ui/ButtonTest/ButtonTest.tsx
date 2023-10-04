'use client'

import { useState } from 'react'

const ButtonTest = ({ children }: { children: string }) => {
	const [a, setA] = useState(false)

	return (
		<button
			className={
				a ? 'bg-red-600 p-3 rounded-xl' : 'p-3 rounded-xl bg-slate-200'
			}
			onClick={() => setA(!a)}
		>
			{children}
		</button>
	)
}

export default ButtonTest
