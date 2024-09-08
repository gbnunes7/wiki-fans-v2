import { Outlet } from "react-router-dom";
import Header from "../header";

const FixedLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default FixedLayout;
