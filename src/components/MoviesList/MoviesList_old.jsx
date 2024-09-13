import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getMoviesOnCategory } from "../../api/api";

function MoviesList({ title, category }) {
	const [moviesOnCategory, setMoviesOnCategory] = useState([]);

	useEffect(() => {
		(async () => {
			const movies = await getMoviesOnCategory(category);
			setMoviesOnCategory(movies);
		})();
	}, [category]);

	return (
		<section className="mt-5 [&&]:mt-14">
			<h3 className="m-0 px-5 py-0 font-black text-3xl mx-[-20px] my-0">
				{title}
			</h3>

			<ul className="list-none px-10 py-0 flex gap-x-5 max-w-[100vw] overflow-scroll mx-[-40px] my-0 scrollbar-hide">
				{moviesOnCategory.map((movie) => (
					// key={중복되지 않는 유일한 값}
					<li
						key={movie.id}
						className="min-w-[calc((100vw-80px-40px)/5)]"
					>
						<MovieCard movie={movie} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default MoviesList;
