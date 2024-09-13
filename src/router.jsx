import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import RootLayout from "./layouts/RootLayout/RootLayout";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import MyPage from "./pages/MyPage/MyPage";
import { useEffect, useState } from "react";
import LogInPage from "./pages/LogInPage/LogInPage";

function Router() {
	
	const [users, setUsers] = useState([]);
	const [likedMovieIds, setLikedMovies] = useState([]);

	const signUp = (newUser) => {
		const newUsers = [...users, newUser];
		setUsers(newUsers);
	};

	const logIn = ({ id, password }) => {
		const user = users.find((user) => user.id === id);
		if (!user) return alert("존재하지 않는 ID입니다.");
		if (user.password !== password) return alert("잘못된 비밀번호입니다.");

		alert("로그인 되었습니다");
	};

	const toggleLikeMovie = (movieId) => {
		const isLiked = likedMovieIds.includes(movieId);

		let newLikedMovieIds = [];

		if (isLiked) {
			newLikedMovieIds = likedMovieIds.filter(
				(movieId) => movieId !== movieId
			);
		} else {
			newLikedMovieIds = [...likedMovieIds, movieId];
		}
		setLikedMovies(newLikedMovieIds);
	};

	const checkIsLiked = (movieId) => likedMovieIds.includes(movieId);

	useEffect(() => {
		console.log(users);
	}, [users]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/sign-up"
						element={<SignUpPage signUp={signUp} />}
					/>
					<Route
						path="/log-in"
						element={<LogInPage logIn={logIn} />}
					/>
					<Route
						path="/my-page"
						element={
							<MyPage
								likedMovies={likedMovieIds}
								toggleLikeMovie={toggleLikeMovie}
							/>
						}
					/>
					<Route
						path="/movies/:movieId"
						element={
							<MovieDetailPage
								checkIsLiked={checkIsLiked}
								toggleLikeMovie={toggleLikeMovie}
							/>
						}
						loader={movieDetailPageLoader}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
