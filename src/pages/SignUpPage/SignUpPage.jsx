import { useState } from "react";
import Page from "../../components/Page/Page";
import { useNavigate } from "react-router-dom";

function SignUpPage(props) {
	const { signup } = props;
	const navigate = useNavigate();

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [nickname, setNickname] = useState("");

	const handleClickSignUpButton = () => {
		const newUser = { id, password, nickname };
		signup(newUser);

		navigate("/");
	};

	return (
		<Page>
			<h1>회원가입</h1>

			<hr />

			<div className="text-black">
				<input
					onChange={(e) => setId(e.target.value)}
					value={id}
					type="text"
					placeholder="ID"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					placeholder="Password"
				/>
				<input
					onChange={(e) => setNickname(e.target.value)}
					value={nickname}
					type="text"
					placeholder="Nickname"
				/>

				<button
					onClick={handleClickSignUpButton}
					className="text-white border-"
				>
					회원가입하기
				</button>
			</div>
		</Page>
	);
}

export default SignUpPage;
