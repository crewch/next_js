import { FC } from 'react'
import styles from './PostCard.module.scss'
import { Box, Typography } from '@mui/material'

interface PostCardProps {
	title: string
	body: string
}

const PostCard: FC<PostCardProps> = ({ title, body }) => {
	return (
		<Box className={styles.container}>
			<Typography variant='h1' className={styles.title}>
				{title}
			</Typography>
			<Typography>{body}</Typography>
		</Box>
	)
}

export default PostCard
