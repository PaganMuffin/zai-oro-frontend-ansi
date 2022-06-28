import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useDebugValue, useEffect, useState } from "react";
import { useDebounce } from "../../utills";
import CommentBox from "../CommentBox";

const comments1 = [
	{
		id: "27d4a1c7-c5ac-429d-8ec5-0ba1fb8e8242",
		content: '{\n\t"content": "TESTOWY KOMENTARZ"\n}',
		createdAt: 1656209617,
		user: {
			id: "8a0afd78-a7f5-49cc-b988-9cb2bb10075d",
			username: "PaganMuffin",
			avatar: null,
		},
	},
	{
		id: "24c1f7ac-debe-4601-96ba-60c6bfd77d80",
		content: "TESTOWY KOMENTARZ",
		createdAt: 1656209719,
		user: {
			id: "8a0afd78-a7f5-49cc-b988-9cb2bb10075d",
			username: "PaganMuffin",
			avatar: null,
		},
	},
];

const AdminComments = () => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [comments, setComments] = useState([]);
	const [search, setSearch] = useState("");
	const debounceSearchTerm = useDebounce(search, 500);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		if (localStorage.getItem("isAdmin") === "true") {
			setIsAdmin(true);
		}
	}, []);

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/admin/comments";

			const queryString = new URLSearchParams();

			queryString.append("p", page);
			queryString.append("limit", 10);

			if (debounceSearchTerm != "") queryString.append("q", debounceSearchTerm);

			api_url.search = queryString.toString();

			const f = await fetch(api_url.toString(), {
				credentials: "include",
				mode: "cors",
			});

			const f_data = await f.json();

			if (!f.ok) {
				enqueueSnackbar(f_data.error ?? f_data.message, {
					variant: "error",
					preventDuplicate: true,
				});
			} else {
				setComments(f_data.result);
				setHasNextPage(f_data.hasNext);
			}
		})();
	}, [debounceSearchTerm, page]);

	const incrementPage = () => {
		if (hasNextPage) setPage(page + 1);
	};

	const decrementPage = () => {
		if (page > 1) setPage(page - 1);
	};

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				width: "100%",
				margin: "auto",
			}}>
			{comments.map((x) => {
				return <CommentBox key={x.id} comment={x} isAdmin={isAdmin} />;
			})}
			<Box
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}>
				<Button
					disabled={page === 1}
					onClick={decrementPage}
					style={{
						color:
							page === 1 ? `rgba(${process.env.REACT_APP_TEXT},0.2)` : null,
					}}
					variant="contained">
					Poprzednia strona
				</Button>
				<Button
					disabled={!hasNextPage}
					style={{
						color: !hasNextPage
							? `rgba(${process.env.REACT_APP_TEXT},0.2)`
							: null,
					}}
					onClick={incrementPage}
					variant="contained">
					Następna strona
				</Button>
			</Box>
		</Box>
	);
};

export default AdminComments;
