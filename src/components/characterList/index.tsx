import { Link } from "react-router-dom";
import Card from "../card";
import useCharacterContext from "../hooks/useCharacterContext";
import MainContainer from "../mainContainer";
import Title from "../title";

const CharacterList = () => {
	const { characters } = useCharacterContext();
	return (
		<MainContainer>
			<Title>House of Dragons</Title>
			<div className="bg-white min-h-[500px] w-4/5 p-8 rounded-lg shadow-2xl flex items-center">
				<ul className="flex flex-col ml-[25px] md:ml-0 md:p-4 md:flex-row gap-10">
					{characters.map((item) => (
						<Link key={item.id} to={`/characterDetail/${item.id}`}>
							<li>
								<Card alt={item.alt} nome={item.nome} src={item.imagem} />
							</li>
						</Link>
					))}
				</ul>
			</div>
		</MainContainer>
	);
};

export default CharacterList;
