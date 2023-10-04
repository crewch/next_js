'use client'

import { ReactNode } from 'react'
import ReduxProvider from './ReduxProvider'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ReduxProvider>
			<QueryClientProvider client={queryClient}>
				<SessionProvider>{children}</SessionProvider>
			</QueryClientProvider>
		</ReduxProvider>
	)
}

export default Providers
