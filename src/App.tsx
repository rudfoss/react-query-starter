import { BrowserRouter } from "react-router-dom"
import { JSONPlaceholderAPIProvider } from "contexts/jsonPlaceholderAPI"
import { ReactQueryProvider } from "contexts/reactQuery"
import { BaseRouter } from "pages/BaseRouter"

function App() {
	return (
		<BrowserRouter>
			<ReactQueryProvider>
				<JSONPlaceholderAPIProvider>
					<BaseRouter />
				</JSONPlaceholderAPIProvider>
			</ReactQueryProvider>
		</BrowserRouter>
	)
}

export default App
