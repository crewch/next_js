'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Navigation.module.scss'
import { signOut, useSession } from 'next-auth/react'

interface NavLink {
	label: string
	href: string
}

interface NavigationProps {
	navLinks: NavLink[]
}

const Navigation: FC<NavigationProps> = ({ navLinks }) => {
	const pathname = usePathname()
	const session = useSession()

	return (
		<>
			<nav className={styles.nav}>
				{navLinks.map(link => {
					const isActive = link.href === pathname

					return (
						<Link
							href={link.href}
							className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
							key={link.label}
						>
							{link.label}
						</Link>
					)
				})}

				{session.status === 'authenticated' && (
					<>
						<Link href='/profile' className={styles.link}>
							Profile
						</Link>
						<Link
							href='#'
							className={styles.link}
							onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
						>
							Sign out
						</Link>
					</>
				)}
				{session.status === 'unauthenticated' && (
					<Link
						href='#'
						className={styles.link}
						onClick={() =>
							signOut({ callbackUrl: 'http://localhost:3000/api/auth/signin' })
						}
					>
						Sign in
					</Link>
				)}
			</nav>
		</>
	)
}

export default Navigation
