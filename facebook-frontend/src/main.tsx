import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#050505",
		},
		secondary: {
			main: "#65676b",
		},
	},
	typography: {
		fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
		fontSize: 16,
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
	// </React.StrictMode>
);
