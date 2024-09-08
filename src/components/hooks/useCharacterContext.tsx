import { useContext, useEffect } from "react";
import { CharacterContext } from "../../context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CharacterInterface from "../../interface/character";

const useCharacterContext = () => {
	const {
		characters,
		isOpenModal,
		setIsOpenModal,
		setCharacters,
		setCharacter,
		character,
	} = useContext(CharacterContext)!;

	const { idParams } = useParams<{ idParams: string }>();
	const id = idParams ? parseInt(idParams, 10) : NaN; // Convert idParams to a number

	useEffect(() => {
		axios
			.get("http://localhost:3000/characters")
			.then((res) => setCharacters(res.data))
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		axios.get("http://localhost:3000/characters").then((res) => {
			const foundCharacter = res.data.find(
				(character: CharacterInterface) => character.id === id
			);
			setCharacter(foundCharacter);
		});
	}, [id, setCharacter]);

	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const navigate = useNavigate();

	return {
		characters,
		isOpenModal,
		toggleModal,
		navigate,
		character,
	};
};

export default useCharacterContext;
