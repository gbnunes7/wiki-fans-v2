import { IoArrowBack } from "react-icons/io5";
import useCharacterContext from "../hooks/useCharacterContext";

const CharacterDetail = () => {
	const { navigate, character } = useCharacterContext();

	if (!character) {
		return <div>oi</div>;
	}

	return (
		<div className="h-screen bg-grey flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-2xl mx-2 py-4 md:max-w-4xl md:w-full flex flex-col md:pb-24 md:pt-12 md:px-4 md:mb-24">
				<div className="flex justify-center md:justify-around">
					<button
						onClick={() => navigate("/")}
						className="md:relative md:right-8 md:bottom-2"
					>
						<IoArrowBack />
					</button>
					<h2 className="text-3xl mb-4 md:relative md:right-28">
						House of Dragons
					</h2>
				</div>
				<div className="mt-4 mr-3 flex flex-col md:flex-row gap-8 justify-between items-center mx-24 ">
					src={character.imagem}
					alt={character.alt}
				</div>
				<div className="mr-16 w-full">
					<h1 className="mt-3 text-2xl">Name: {character.nome}</h1>
					<p className="mt-3 text-2xl">Nickname: {character.nickname} </p>
					<p className="mt-3 text-2xl">Dragon: {character.dragao}</p>
					<p className="mt-3 text-2xl">Age: {character.age} </p>
					<p className="mt-3 text-2xl">Enemies: {character.enemies} </p>
				</div>
			</div>
		</div>
	);
};

export default CharacterDetail;
