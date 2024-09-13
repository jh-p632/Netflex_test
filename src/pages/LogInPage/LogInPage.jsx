import { useState } from "react";
import Page from "../../components/Page/Page";
import { useNavigate } from "react-router-dom";

function LogInPage(props) {
	const { logIn } = props;

	const [id, setId] = useState("");

	const navigate = useNavigate();

	const [password, setPassword] = useState("");

	const handleClickLogIn = () => {
		logIn({ id, password });
		navigate("/");
	};

	return (
		<Page>
			<input
				value={id}
				onClick={(e) => setId(e.target.value)}
				type="text"
			/>
			<input
				value={password}
				onClick={(e) => setPassword(e.target.value)}
				type="password"
			/>
			<button onClick={handleClickLogIn}>로그인</button>
		</Page>
	);
}

export default LogInPage;
