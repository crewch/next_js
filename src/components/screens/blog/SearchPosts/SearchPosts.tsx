'use client'

import { FormEventHandler, useState } from 'react'
import { postService } from '@/services/post'
import useSWR from 'swr'
import styles from './SearchPosts.module.scss'
import { Button, TextField } from '@mui/material'

const SearchPosts = () => {
	const { mutate } = useSWR('posts')
	const [search, setSearch] = useState('')

	const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault()

		const posts = await postService.getPostBySearch(search)

		mutate(posts)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<TextField
				variant='filled'
				label='Поиск'
				value={search}
				onChange={e => setSearch(e.target.value)}
				className={styles.input}
				id='TextFieldSearch'
			/>
			<Button sx={{ height: '40px' }} variant='outlined' type='submit'>
				Найти
			</Button>
		</form>
	)
}

export default SearchPosts
