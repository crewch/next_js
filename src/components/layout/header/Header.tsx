import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'About', href: '/about' },
	{ label: 'test1', href: '/test1' },
	{ label: 'test2', href: '/test2' },
]

const Header = () => {
	return (
		<header className={styles.header}>
			<Navigation navLinks={navLinks} />
		</header>
	)
}

export default Header
