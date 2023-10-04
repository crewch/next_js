'use client'

import { FC, ReactNode, useState } from 'react'
import styles from './ToolTip.module.scss'

const ToolTip: FC<{
	children: ReactNode
	content: ReactNode
}> = ({ children, content }) => {
	return (
		<div className={styles.container}>
			{children}
			<div className={styles.toolTip}>{content}</div>
		</div>
	)
}

export default ToolTip
