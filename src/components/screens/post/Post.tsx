import PostCard from '@/components/ui/PostCard/PostCard'
import { postService } from '@/services/post'

const Post = async ({ id }: { id: string }) => {
	const post = await postService.getPostById(id)

	return <PostCard title={post.title} body={post.body} />
}

export default Post
