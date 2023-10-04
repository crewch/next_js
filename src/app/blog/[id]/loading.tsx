import { Skeleton } from '@mui/material'

const Loading = () => {
	return (
		<Skeleton
			animation='wave'
			variant='rectangular'
			height={68}
			className='m-5'
		/>
	)
}

export default Loading
