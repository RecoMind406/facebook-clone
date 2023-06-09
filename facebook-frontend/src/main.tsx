import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Watch from "./pages/Watch/index.tsx";
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
    shape: {
        borderRadius: 18,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 44,
                },
            },
        },
    },
    spacing: 8,
    mixins: {
        toolbar: {
            minHeight: 56,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Watch />
        </ThemeProvider>
    </React.StrictMode>
);
