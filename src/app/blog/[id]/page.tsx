import Post from '@/components/screens/post/Post'
import { postService } from '@/services/post'
import { Metadata } from 'next'

type MetadataProps = {
	params: {
		id: string
	}
}

export const generateMetadata = async ({
	params: { id },
}: MetadataProps): Promise<Metadata> => {
	return {
		title: `Post ${id}`,
	}
}

export async function generateStaticParams() {
	const posts = await postService.getPosts()

	return posts.map(post => ({
		slug: post.id.toString(),
	}))
}

const PostPage = ({ params: { id } }: MetadataProps) => {
	return <Post id={id} />
}

export default PostPage
