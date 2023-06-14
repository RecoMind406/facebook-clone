import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import User from "../../../interfaces/user";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";

export const TopSection: React.FC<User> = (aUser) => {
    return (
        <Container fixed>
            <CssBaseline />
            <Box
                sx={{
                    maxWidth: "1250px",
                    maxHeight: "462px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "1%",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    alt={"Cover photo of" + aUser.name}
                    src={aUser.cover}
                />
            </Box>
            <Box
                sx={{
                    position: "relative",
                    bottom: "25px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={aUser.profilePicture}
                    sx={{
                        width: "168px",
                        height: "168px",
                        marginRight: "50px",
                    }}
                />
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h5" fontWeight="bold">
                            {aUser.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "#65676b",
                                fontWeight: "bold",
                            }}
                        >
                            {aUser.friends.length} bạn bè
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <AvatarGroup max={8}>
                                {aUser.friends.slice(0, 8).map((friend) => (
                                    <Avatar
                                        key={friend.id}
                                        alt={"Photo of" + friend.name}
                                        src={friend.profilePicture}
                                        sx={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                    />
                                ))}
                            </AvatarGroup>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        backgroundColor: "#1b74e4",
                                        fontWeight: "bold",
                                        maxHeight: "36px",
                                        ":hover": {
                                            backgroundColor: "#1352a3",
                                        },
                                        marginRight: "8px",
                                    }}
                                    startIcon={<AddIcon />}
                                >
                                    Thêm vào tin
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        backgroundColor: "#e4e6eb",
                                        color: "#050505",
                                        maxHeight: "36px",
                                        ":hover": {
                                            backgroundColor: "#cfd2d6",
                                        },
                                    }}
                                    startIcon={<CreateIcon />}
                                >
                                    Chỉnh sửa trang cá nhân
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Container>
    );
};
