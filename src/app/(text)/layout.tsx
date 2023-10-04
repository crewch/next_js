import ButtonTest from '@/components/ui/ButtonTest/ButtonTest'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
	return (
		<div className='m-4 flex flex-col items-center'>
			{children}
			<ButtonTest>Click</ButtonTest>
		</div>
	)
}
