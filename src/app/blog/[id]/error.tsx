'use client'

import { Typography } from '@mui/material'

const Error = ({ error }: { error: Error }) => {
	return (
		<Typography variant='h1' className='text-3xl text-center text-red-500'>
			Oops! {error.message}
		</Typography>
	)
}

export default Error
