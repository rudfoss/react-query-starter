import { JSONPlaceholderClient } from "api/jsonPlaceholder"
import React, { createContext, useContext, useRef } from "react"

export interface JSONPlaceholderAPIContextProps {
	api: JSONPlaceholderClient
}

const JSONPlaceholderAPIContext = createContext<JSONPlaceholderAPIContextProps>(undefined as any)
JSONPlaceholderAPIContext.displayName = "JSONPlaceholderAPIContext"

export const useJSONPlaceholderAPI = () => {
	const ctx = useContext(JSONPlaceholderAPIContext)
	if (!ctx) throw new Error("useJSONPlaceholderAPI must be provided before use")
	return ctx
}

interface JSONPlaceholderAPIProviderProps {
	children: React.ReactNode
}

const JSONPlaceholderAPIProviderComponent = ({ children }: JSONPlaceholderAPIProviderProps) => {
	const api = useRef(new JSONPlaceholderClient())
	return (
		<JSONPlaceholderAPIContext.Provider value={{ api: api.current }}>
			{children}
		</JSONPlaceholderAPIContext.Provider>
	)
}

export const JSONPlaceholderAPIProvider = React.memo(JSONPlaceholderAPIProviderComponent)
