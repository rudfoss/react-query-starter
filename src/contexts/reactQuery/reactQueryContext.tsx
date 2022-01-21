import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false
		}
	}
})

interface ReactQueryProviderProps {
	children: React.ReactNode
}

const ReactQueryProviderComponent = ({ children }: ReactQueryProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export const ReactQueryProvider = React.memo(ReactQueryProviderComponent)
