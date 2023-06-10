import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import data from "./ProductList.json";

interface Product {
    id: number;
    name: string;
    price: number;
    location: string;
    photo: string;
}

export const convertToPrintFormat = (aNumber: number) => {
    aNumber = aNumber * 1000;
    let result = "";
    while (aNumber > 1000) {
        const remainder = aNumber % 1000;
        aNumber = Math.floor(aNumber / 1000);
        result = "," + remainder.toString().padStart(3, "0") + result;
    }
    result = aNumber.toString() + result;

    return result;
};

export const MarketPlaceMain = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h6" fontWeight={"bold"}>
                    Lựa chọn hôm nay
                </Typography>

                <Typography
                    color={"hsl(214, 89%, 52%)"}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                    variant={"subtitle1"}
                >
                    <PlaceIcon></PlaceIcon>
                    Hồ Chí Minh · 65km
                </Typography>
            </Box>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                }}
            >
                {data.map((product: Product) => (
                    <Grid item xs={6} sm={4} md={3} key={product.id}>
                        <Paper
                            sx={{
                                p: 1,
                                cursor: "pointer",
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    borderRadius: "8%",
                                }}
                                alt={"Image of" + product.name}
                                src={product.photo}
                            />
                            <Typography fontWeight={"bold"}>
                                {convertToPrintFormat(product.price)} ₫
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    color: "#050505",
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#65676B",
                                }}
                            >
                                {product.location}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
