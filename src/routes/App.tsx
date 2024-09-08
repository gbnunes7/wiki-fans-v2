import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CharacterProvider from "../context";
import FixedLayout from "../components/fixedLayout";
import CharacterDetail from "../components/characterDetail";

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<CharacterProvider>
					<Routes>
						<Route path="/" element={<FixedLayout />}>
							<Route path="/" element={<Home />} />
							<Route
								path="/characterDetail/:idParams"
								element={<CharacterDetail />}
							/>
						</Route>
					</Routes>
				</CharacterProvider>
			</BrowserRouter>
		</>
	);
}

export default AppRoutes;
