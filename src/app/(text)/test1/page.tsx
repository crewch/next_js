'use client'
import { postService } from '@/services/post'
import { Post } from '@/shared/interfaces/Post'
import { Box, Button, LinearProgress } from '@mui/material'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export async function getStaticProps() {
	const posts = await postService.getPosts()
	return { props: { posts } }
}

const Page = ({ posts }: { posts: Post[] }) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getPosts(),
		initialData: posts,
	})

	const queryClient = useQueryClient()

	return (
		<Box>
			{isLoading && <LinearProgress />}
			<Button
				onClick={() => queryClient.invalidateQueries({ queryKey: ['posts'] })}
			>
				refresh
			</Button>
			{isSuccess &&
				data.map((item, index) => (
					<Box key={index}>
						{item.id} {item.title}
					</Box>
				))}
		</Box>
	)
}

export default Page
