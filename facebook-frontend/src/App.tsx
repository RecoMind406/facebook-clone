import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import routes from "./routes";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
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
		</>
	);
}

export default App;
