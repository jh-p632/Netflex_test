import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	// console.log(movie);

	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

	return (
		<Link to={`/movies/${movie.id}`} className="no-underline text-white">
			<img
				src={IMAGE_BASE_URL + movie.backdrop_path}
				className="w-full aspect-video bg-white"
			/>

			<h6 className="pt-1 m-0 text-lg font-black">{movie.title}</h6>
		</Link>
	);
}

export default MovieCard;
