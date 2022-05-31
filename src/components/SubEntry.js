import { Paper, Box, Typography, Button } from "@mui/material";

const SubEntry = ({ data, width = "100%" }) => {
	return (
		<Paper
			elevation={10}
			style={{
				display: "flex",
				margin: "auto",
				width: width,
				padding: 10,
				gap: 10,
			}}>
			<div
				style={{
					backgroundImage: `url(${data.cover})`,
					backgroundSize: "cover",
					height: "250px",
					aspectRatio: 8 / 11,
					borderRadius: "10px",
				}}
			/>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 10,
					width: "100%",
				}}>
				<Typography variant="h5">
					{data.title} #{data.ep}
				</Typography>
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
						flex: 1,
					}}>
					<Typography variant="h6">Rozmiar pliku: {data.size}Kb</Typography>
					<Typography variant="h6">Ilość pobrań: {data.downloads}</Typography>
					<Typography variant="h6">Autor: {data.author}</Typography>
				</Box>
				<a
					href={data.file}
					download="100MB.bin"
					target="_blank"
					style={{
						textDecoration: "none",
						alignSelf: "end",
						marginBottom: "0 auto",
					}}>
					<Button variant="contained" size="large">
						Pobierz
					</Button>
				</a>
			</Box>
		</Paper>
	);
};

export default SubEntry;
