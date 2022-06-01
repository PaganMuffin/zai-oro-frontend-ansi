import { Box } from "@mui/material";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
const demoSub = {
	title: "SPY×FAMILY",
	ep: 1,
	size: 213,
	downloads: 30,
	file: "https://speed.hetzner.de/100MB.bin",
	cover:
		"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png",
	author: "PaganMuffin",
};
const SearchPage = () => {
    const [search, setSearch] = useState("");
    return (
        <Box
        style={{
            display: "flex",
            flexDirection: "column",
            gap: 25,
        }}>
        <SearchBar value={search} setFunction={setSearch} width={"50%"} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
        <SubEntry width="50%" data={demoSub} />
    </Box>

    )
}

export default SearchPage;