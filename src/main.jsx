import Router from "./router.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TanstackQueryProvider } from "./tanstack-query/client.jsx";
import AuthProvider from "./contexts/auth.context.jsx";
import { MovieProvider } from "./contexts/movie.context.jsx";

createRoot(document.getElementById("root")).render(
	<TanstackQueryProvider>
		<AuthProvider>
			<MovieProvider>
				<Router />
			</MovieProvider>
		</AuthProvider>
	</TanstackQueryProvider>
);
