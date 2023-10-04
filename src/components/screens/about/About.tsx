import { Box, Typography } from '@mui/material'
import styles from './About.module.scss'

const About = () => {
	return (
		<Box className={styles.container}>
			<Typography className={styles.title} variant='h1'>
				My name is Tom, I am a nextjs developer
			</Typography>
		</Box>
	)
}

export default About
