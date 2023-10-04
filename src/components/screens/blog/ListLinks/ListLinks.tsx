'use client'

import { postService } from '@/services/post'
import Link from 'next/link'
import useSWR from 'swr'
import styles from './ListLinks.module.scss'
import { Box } from '@mui/material'

const ListLinks = () => {
	const {
		data: posts,
		isLoading,
		error,
	} = useSWR('posts', postService.getPosts)

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>Oops... Error</h1>
	}

	return (
		<>
			{posts && posts.length > 0 && (
				<Box className={styles.links}>
					{posts.map(post => (
						<Link
							href={`/blog/${post.id}`}
							className={styles.link}
							key={post.id}
						>
							{post.id} {post.title}
						</Link>
					))}
				</Box>
			)}
		</>
	)
}

export default ListLinks
