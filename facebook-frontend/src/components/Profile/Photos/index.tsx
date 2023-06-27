import React from "react";
import User from "../../../models/user";
import {
    Container,
    Box,
    Paper,
    Typography,
    styled,
    Button,
    IconButton,
    Grid,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";

const Title = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    fontWeight: "bold",
    color: "#050505",
    fontSize: "20px",
}));
const BlueButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    color: "#1877f2",
    fontWeight: "bold",
    fontSize: "14px",
    ":hover": {
        backgroundColor: "#F0F2F5",
    },
}));
const DefaultButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "10%",
    padding: "12px 16px",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#65676b",
    "&:hover": {
        backgroundColor: "#f2f2f2",
        boxShadow: "none",
    },
});

export const ProfilePhotosTab: React.FC<User> = (aUser) => {
    return (
        <Container>
            <Paper
                sx={{
                    textAlign: "center",
                    marginBottom: "15px",
                    padding: "16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Title>Ảnh</Title>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <BlueButton
                            sx={{
                                marginRight: "8px",
                            }}
                        >
                            Thêm ảnh/video{" "}
                        </BlueButton>
                        <IconButton
                            sx={{
                                borderRadius: "10%",
                                backgroundColor: "#e4e6eb",
                                color: "#000000",
                                marginTop: "5px",
                                marginBottom: "5px",
                                ":hover": {
                                    backgroundColor: "#c4c4c4",
                                },
                            }}
                        >
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <BlueButton
                        sx={{
                            borderBottom: "2px solid #1876f2",
                            borderRadius: 0,
                            ":hover": {
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        Ảnh của {aUser.name}
                    </BlueButton>

                    <DefaultButton>Album</DefaultButton>
                </Box>

                <Grid container spacing={1}>
                    {[...Array(7)].map((_, index) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                            xl={2}
                            key={index}
                        >
                            <img
                                src={`https://picsum.photos/seed/${index}/200`}
                                alt={`Photo ${index} of ${aUser.name}`}
                                width={"100%"}
                                height={"100%"}
                            />
                            {/* <IconButton
                                sx={{
                                    position: "relative",
                                    top: "-230px",
                                    right: "-65px",
                                    color: "white",
                                    backgroundColor: "#00000066",
                                    width: "32px",
                                    height: "32px",
                                }}
                            >
                                <EditIcon
                                    sx={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                            </IconButton> */}
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
};
