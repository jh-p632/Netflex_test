import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkIsLikedMovie, likeMovie, unlikeMovie } from "../../api/api";
import { FaRegHeart } from "react-icons/fa";

function LikeMovieButton({ movieId }) {
	const queryClient = useQueryClient();
	const queryKey = ["isLikedMovie", { movieId }];
	const { data: isLikedMovie } = useQuery({
		queryKey,
		queryFn: () => checkIsLikedMovie(movieId),
	});
	const { mutateAsync: likeMovieMutationFn } = useMutation({
		mutationFn: (movieId) => likeMovie(movieId),
	});
	const { mutateAsync: unlikeMovieMutationFn } = useMutation({
		mutation: (movieId) => unlikeMovie(movieId),
	});

	const handleClickLikeButton = async () => {
		if (isLikedMovie) {
			await unlikeMovieMutationFn(movieId);
		} else {
			await likeMovieMutationFn(movieId);
		}
		queryClient.invalidateQueries({ queryKey, exact: true });
	};

	return (
		<div>
			<button
				onChange={handleClickLikeButton}
				className={`border-white/20 p-4 rounded-full border-2 bg-white/20 ${
					isLikedMovie ? "text-red-500" : "text-white/70"
				} active:brightness-50 transition`}
			>
				<FaRegHeart className="text-4xl transition" />
			</button>
		</div>
	);
}

export default LikeMovieButton;
