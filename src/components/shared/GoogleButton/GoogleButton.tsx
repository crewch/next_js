'use client'

import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'

const GoogleButton = () => {
	return (
		<Button
			variant='contained'
			className='bg-blue-600'
			onClick={() => signIn('google', { callbackUrl: '/' })}
		>
			Sign in with Google
		</Button>
	)
}

export default GoogleButton
