const MainContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<main className="flex-grow p-6 flex flex-col items-center h-full gap-10 bg-[#f5f5f5)]">
			{children}
		</main>
	);
};

export default MainContainer;
