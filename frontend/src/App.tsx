import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import FormFill from "../pages/FormFill/FormFill";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NotFound from "../pages/NotFound/NotFound"

const App = () => {
	const theme = createTheme({
		colorSchemes: {
			dark: true,
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/create" element={<FormFill isNew />} />
					<Route path="/edit/:id" element={<FormFill isNew={false} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer theme="colored" limit={5} autoClose={2000} />
		</ThemeProvider>
	);
};

export default App;
