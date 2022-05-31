import { Paper, Box, Typography } from "@mui/material";

const SubEntry = ({ data, width = "100%" }) => {
	return (
		<Paper
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
				}}>
				<Typography>
					{data.title} #{data.ep}
				</Typography>
				<Typography>Rozmiar pliku: {data.size}</Typography>
				<Typography>Ilość pobrań: {data.downloads}</Typography>
				<Typography>Autor: {data.author}</Typography>
				<a href={data.file} download="100MB.bin" target="_blank">
					Pobierz
				</a>
			</Box>
		</Paper>
	);
};

export default SubEntry;
