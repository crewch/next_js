import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: '/signin',
	},
}
