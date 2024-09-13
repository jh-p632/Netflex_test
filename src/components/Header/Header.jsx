import { Link } from "react-router-dom";

function Header({ currentUser }) {
	return (
		<header className="px-10 py-5 flex justify-between">
			<Link
				className="text-red-600 font-black text-5xl inline-block m-0 no-underline"
				to="/"
			>
				NETFLIX
			</Link>

			<div className="flex items-center gap-x-4">
				{currentUser === null ? (
					<Link to={"/my-page"} className="no-underline text-white">
						마이페이지
					</Link>
				) : (
					<>
						<Link
							to={"/sign-up"}
							className="no-underline text-white"
						>
							회원가입
						</Link>
						<Link
							to={"/log-in"}
							className="no-underline text-white"
						>
							로그인
						</Link>
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
