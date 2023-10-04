import { Post } from '@/shared/interfaces/Post'
import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_API_URL

export const postService = {
	async getPosts() {
		const data: Post[] = await (await axios.get(URL)).data

		return data
	},
	async getPostById(id: string) {
		const data: Post = await (await axios.get(`${URL}/${id}`)).data

		return data
	},
	async getPostBySearch(search: string) {
		const data: Post[] = await (
			await axios.get(URL, {
				params: {
					q: search,
				},
			})
		).data

		return data
	},
}
