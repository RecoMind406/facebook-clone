import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    Button,
    styled,
    CssBaseline,
    Avatar,
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
    borderRadius: "18px",
    color: "#000000",
    paddingTop: -2,
    paddingBottom: -2,
    marginRight: 3,
    backgroundColor: "#e4e6eb",
    "&:hover": {
        boxShadow: "none",
        backgroundColor: "#dadbde",
        border: 0,
    },
});

export const MarketPlaceMain = () => {
    return (
        <Container
            sx={{
                mt: 2,
                position: "relative",
                top: "56px",
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
                    <Avatar
                        sx={{
                            color: "#050505",
                            backgroundColor: "#e4e6eb",
                            ":hover:": {
                                backgroundColor: "#dadbde",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            <PersonIcon />
                        </Typography>
                    </Avatar>
                    <CustomButton variant="outlined">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#050505",
                            }}
                        >
                            Bán
                        </Typography>
                    </CustomButton>
                    <CustomButton variant="outlined">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#050505",
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
                    marginBottom: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Lựa chọn hôm nay
                </Typography>

                <Typography
                    color={"hsl(214, 89%, 52%)"}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                    }}
                >
                    <PlaceIcon />
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
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                }}
                            >
                                {convertToPrintFormat(product.price)} ₫
                            </Typography>
                            <Typography
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    color: "#050505",
                                    fontSize: "14px",
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
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
