import "../styles/global";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {render} from "../../render";
import CssBaseline from "@mui/material/CssBaseline";
import {YugiohTelop} from "../components/yugiohCard";

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<YugiohTelop />
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
