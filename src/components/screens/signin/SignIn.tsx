import GoogleButton from '@/components/shared/GoogleButton/GoogleButton'
import { Box } from '@mui/material'

const SignIn = async () => {
	return (
		<Box className='h-full flex flex-col items-center justify-center gap-2'>
			<h1 className='text-4xl'>SignIn</h1>
			<GoogleButton />
		</Box>
	)
}

export default SignIn
