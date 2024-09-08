import useCharacterContext from "../hooks/useCharacterContext";
import Title from "../title";
import { CgClose } from "react-icons/cg";

const Modal = () => {
	const { toggleModal } = useCharacterContext();

	return (
		<div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50 h-screen w-full flex items-center justify-center">
			<div className="bg-red-500 w-4/5 md:w-2/5 md:h-2/5 rounded-xl flex flex-col items-center p-6 gap-6">
				<Title>Information</Title>
				<div className="flex flex-col md:gap-8 gap-4">
					<button onClick={toggleModal}>
						<CgClose className="relative bottom-11 left-[250px] md:left-[550px] text-black text-center" />
					</button>
					<p className="text-xl text-black">
						This is a Wikipedia for fans of the series House of the Dragon.
						Here, you can view some characters and interact with cards to see
						full details.
					</p>
					<p className="text-base md:text-xl text-black">
						Developed by Gabriel Melo
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
