import { useParams } from "react-router-dom";

const User = () => {
	const params = useParams();
	return <div>{JSON.stringify(params)}</div>;
};

export default User;
