import { CiCircleInfo } from "react-icons/ci";
import Title from "../title";
import Modal from "../modal";
import useCharacterContext from "../hooks/useCharacterContext";

const Header: React.FC = () => {
	const { isOpenModal, toggleModal } = useCharacterContext();

	return (
		<>
			{isOpenModal && <Modal />}
			<header className="w-full min-h-[70px] bg-red-600 flex items-center px-6 gap-2">
				<Title>Wikipedia for fans</Title>
				<button onClick={toggleModal}>
					<CiCircleInfo className="text-2xl text-black mt-1.5" />
				</button>
			</header>
		</>
	);
};

export default Header;
