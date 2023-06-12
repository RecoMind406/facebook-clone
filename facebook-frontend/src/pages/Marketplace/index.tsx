import { Box } from "@mui/material";
import React from "react";
import { MarketplaceSidebar } from "../../components/MarketplaceSidebar";
import { MarketPlaceMain } from "../../components/MarketplaceMain";

export const Marketplace = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <MarketplaceSidebar />
            <MarketPlaceMain />
        </Box>
    );
};
