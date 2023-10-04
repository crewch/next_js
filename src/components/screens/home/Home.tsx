'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks'
import styles from './Home.module.scss'
import { Box, Button, TextField, Typography } from '@mui/material'
import {
	decrement,
	decrementAsync,
	increment,
	incrementAsync,
} from '@/store/counterSlice/counterSlice'
import { useState } from 'react'

const Home = () => {
	const dispatch = useAppDispatch()
	const counter = useAppSelector(state => state.counter.value)

	const [num, setNum] = useState('')

	return (
		<Box className={styles.container}>
			<Box className={styles.changeContainer}>
				<Button className={styles.btn} onClick={() => dispatch(decrement())}>
					-1
				</Button>
				<Typography variant='h1'>{counter}</Typography>
				<Button className={styles.btn} onClick={() => dispatch(increment())}>
					+1
				</Button>
			</Box>
			<Box className={styles.asyncIncrement}>
				<TextField
					value={num}
					onChange={e => setNum(e.target.value)}
					id='TextFieldIncrementAsync'
				/>
				<Button
					className={styles.btn}
					variant='contained'
					onClick={() =>
						dispatch(incrementAsync(parseInt(num) ? parseInt(num) : 1))
					}
				>
					async increment
				</Button>
				<Button
					className={styles.btn}
					variant='contained'
					onClick={() =>
						dispatch(decrementAsync(parseInt(num) ? parseInt(num) : 1))
					}
				>
					async decrement
				</Button>
			</Box>
		</Box>
	)
}

export default Home
