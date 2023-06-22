import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import routes from "./routes";
import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";

function App() {
	return (
		<>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{routes.map((route: any, index: number) => {
						const Page = route.component;

						return (
							<Route key={index} path={route.path} element={<Page />}></Route>
						);
					})}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
		</>
	);
}

export default App;
