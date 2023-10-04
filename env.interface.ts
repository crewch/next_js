declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_API_URL: string
		GOOGLE_CLIENT: string
		GOOGLE_SECRET: string
		// Добавьте другие переменные среды, если необходимо
	}
}
