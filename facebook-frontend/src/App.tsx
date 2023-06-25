import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import routesConfig from "./routes";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

const {routes, publicRoutes}=routesConfig;
function App() {
	return (
		<>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{routes.map((route: any, index: number) => {
						const Page = route.component;

						return (
							<Route key={index} path={route.path} element={<PrivateRoute><Page /></PrivateRoute> }></Route>
						);
					})}
				</Routes>
				<Routes>
					{publicRoutes.map((route: any, index: number) => {
						const Page = route.component;

						return (
							<Route key={index} path={route.path} element={<Page /> }></Route>
						);
					})}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
		</>
	);
}

export default App;
