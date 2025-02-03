export const SideBar = ({ children }) => {
	return (
		<div className="absolute h-full w-40 border border-red-500 z-10">
			{children}
		</div>
	);
};
