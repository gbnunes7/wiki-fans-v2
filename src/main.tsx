import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
