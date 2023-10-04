import ListLinks from '@/components/screens/blog/ListLinks/ListLinks'
import SearchPosts from '@/components/screens/blog/SearchPosts/SearchPosts'
import styles from './Blog.module.scss'
import { Box } from '@mui/material'

const Blog = () => {
	return (
		<Box className={styles.container}>
			<SearchPosts />
			<ListLinks />
		</Box>
	)
}

export default Blog
