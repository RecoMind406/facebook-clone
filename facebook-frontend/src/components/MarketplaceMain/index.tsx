import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    Button,
    styled,
    CssBaseline,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import data from "./ProductList.json";
import PersonIcon from "@mui/icons-material/Person";

interface Product {
    id: number;
    name: string;
    price: number;
    location: string;
    photo: string;
}

const convertToPrintFormat = (aNumber: number) => {
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

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    border: 0,
    color: "#000000",
    paddingTop: -2,
    paddingBottom: -2,
    marginRight: 3,
    backgroundColor: "#e4e6eb",
    "&:hover": {
        border: "0px",
        boxShadow: "none",
        backgroundColor: "#dadbde",
    },
});

export const MarketPlaceMain = () => {
    return (
        <Container
            sx={{
                mt: 2,
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    display: {
                        md: "none",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <CustomButton variant="outlined">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            <PersonIcon
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            ></PersonIcon>
                        </Typography>
                    </CustomButton>
                    <CustomButton variant="outlined">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >
                            Bán
                        </Typography>
                    </CustomButton>
                    <CustomButton variant="outlined">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >
                            Tất cả hạng mục
                        </Typography>
                    </CustomButton>
                </Box>
            </Box>
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
