import { Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AdminComments from "../../components/admin/comments";
import AdminEntries from "../../components/admin/entries";
import AdminUsers from "../../components/admin/users";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			{...other}>
			{value === index && <>{children}</>}
		</div>
	);
}

const AdminPanel = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (e, value) => {
		setSelectedTab(value);
	};

	return (
		<Box style={{ margin: "auto", width: "70%" }}>
			<Toolbar />
			<Tabs value={selectedTab} onChange={handleChange}>
				<Tab
					style={{
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}
					label="Użytkownicy"
				/>
				<Tab
					style={{
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}
					label="Napisy"
				/>
				<Tab
					style={{
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}
					label="Komentarze"
				/>
			</Tabs>
			<Box style={{ width: "100%", marginTop: 10 }}>
				<TabPanel value={selectedTab} index={0}>
					<AdminUsers />
				</TabPanel>
				<TabPanel value={selectedTab} index={1}>
					<AdminEntries />
				</TabPanel>
				<TabPanel value={selectedTab} index={2}>
					<AdminComments />
				</TabPanel>
			</Box>
		</Box>
	);
};

export default AdminPanel;
