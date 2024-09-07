import { CiCircleInfo } from "react-icons/ci";
import Title from "../title";

const Header: React.FC = () => {
	return (
		<header className="w-full min-h-[70px] bg-red-600 flex items-center px-6 gap-2">
			<Title>Wikipedia for fans</Title>
			<button>
				<CiCircleInfo className="text-2xl mt-1.5" />
			</button>
		</header>
	);
};

export default Header;
