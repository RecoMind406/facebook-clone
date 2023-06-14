import { Box } from "@mui/material";
import React from "react";
import { MarketplaceSidebar } from "../../components/MarketplaceSidebar";
import { MarketPlaceMain } from "../../components/MarketplaceMain";
import Header from "~/components/Header";

export const Marketplace = () => {
	return (
		<>
			<Header />
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<MarketplaceSidebar />
				<MarketPlaceMain />
			</Box>
		</>
	);
};
