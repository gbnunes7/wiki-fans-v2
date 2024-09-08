import { createContext, Dispatch, SetStateAction, useState } from "react";
import CharacterInterface from "../interface/character";

interface ContextType {
	characters: CharacterInterface[];
	isOpenModal: boolean;
	setCharacters: Dispatch<SetStateAction<CharacterInterface[]>>;
	setIsOpenModal: (isOpenModal: boolean) => void;
	character: CharacterInterface | undefined;
	setCharacter: Dispatch<SetStateAction<CharacterInterface | undefined>>;
}

export const CharacterContext = createContext<ContextType | undefined>(
	undefined
);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
	const [characters, setCharacters] = useState<CharacterInterface[]>([]);
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [character, setCharacter] = useState<CharacterInterface | undefined>(
		undefined
	);

	return (
		<CharacterContext.Provider
			value={{
				characters,
				isOpenModal,
				setIsOpenModal,
				setCharacters,
				character,
				setCharacter,
			}}
		>
			{children}
		</CharacterContext.Provider>
	);
};

export default CharacterProvider;
