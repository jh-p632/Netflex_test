import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function RootLayout({ currentUser }) {
	return (
		<main className="m-0 text-white">
			<div className="bg-black h-screen min-w-[100vh] pb-5">
				<Header currentUser={currentUser} />

				<Outlet />
			</div>
		</main>
	);
}

export default RootLayout;
