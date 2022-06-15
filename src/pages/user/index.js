import { Avatar, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const demoUser = {
	id: 1,
	username: "PaganMuffin",
	avatar: "",
	subCount: 120,
};

const demoLatestSubs = [{}];

const User = () => {
	const [data, setData] = useState(null);
	const [subs, setSubs] = useState([]);
	const params = useParams();
	useEffect(() => {
		setData(demoUser);
	}, []);
	if (data == null) return <div>LOADING</div>;
	return (
		<div>
			<Paper>
				<Avatar sx={{ width: 56, height: 56 }} />
				<Typography>{data.username}</Typography>
				<Typography>{data.subCount}</Typography>
			</Paper>
		</div>
	);
};

export default User;
