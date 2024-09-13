import { useParams } from "react-router-dom";
import { getMovie } from "../../api/api";
import Page from "../../components/Page/Page";
import { FaPlay } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import LikeMovieButton from "../../components/LikeMovieButton/LikeMovieButton";

function MovieDetailPage() {
	const { movieId } = useParams();

	const { data: movie } = useQuery({
		queryKey: ["movies", { id: movieId }],
		queryFn: () => getMovie(movieId),
	});

	if (!movie) return null;

	return (
		<Page>
			<main className="flex flex-col gap-y-2">
				<h1 className="font-bold text-4xl">{movie.title}</h1>
				<h2 className="font-medium text-lg">{movie.tagline}</h2>
				<p className="font-normal text-sm">{movie.overview}</p>
				<span>{movie.release_date}</span>

				{/* <div className="flex gap-4 text-black">
          <button className="bg-white rounded-md">
            #{movie.genres[0].name}
          </button>
          <button className="bg-white rounded-md">
            #{movie.genres[1].name}
          </button>
          <button className="bg-white rounded-md">
            #{movie.genres[2].name}
          </button>
          <button className="bg-white rounded-md">
            #{movie.genres[3].name}
          </button>
        </div> */}

				<button className="bg-white text-black w-36 h-14 rounded-lg flex ">
					재생
					<FaPlay />
				</button>

				<LikeMovieButton />
			</main>
		</Page>
	);
}

export default MovieDetailPage;
