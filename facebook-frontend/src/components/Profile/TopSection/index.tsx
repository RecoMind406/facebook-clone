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
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: {
                                xs: "260px",
                                sm: "320px",
                                md: "410px",
                            },
                            right: "10px",
                            backgroundColor: "#e4e6eb",
                            ":hover": {
                                backgroundColor: "#cfd2d6",
                            },
                        }}
                    >
                        <CameraAltIcon
                            sx={{
                                color: "black",
                            }}
                        />
                    </IconButton>
                </Box>
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
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                    },
                }}
            >
                <Avatar
                    src={aUser.profilePicture}
                    sx={{
                        width: "168px",
                        height: "168px",
                        marginRight: {
                            xs: "0px",
                            sm: "0px",
                            md: "50px",
                        },
                        position: "relative",
                        bottom: {
                            xs: "84px",
                            sm: "84px",
                            md: "0px",
                        },
                        marginBottom: {
                            xs: "-80px",
                            sm: "-80px",
                            md: "0px",
                        },
                    }}
                />
                <IconButton
                    sx={{
                        position: "absolute",
                        bottom: {
                            xs: "170px",
                            sm: "170px",
                            md: "10px",
                        },
                        left: {
                            xs: "280px",
                            sm: "330px",
                            md: "130px",
                        },
                        backgroundColor: "#e4e6eb",
                        ":hover": {
                            backgroundColor: "#cfd2d6",
                        },
                    }}
                >
                    <CameraAltIcon
                        sx={{
                            color: "black",
                        }}
                    />
                </IconButton>
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "32px",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "left",
                                },
                            }}
                        >
                            {aUser.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#65676b",
                                fontWeight: "bold",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "left",
                                },
                            }}
                        >
                            {aUser.friends.length} bạn bè
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    sm: "column",
                                    md: "row",
                                },
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <AvatarGroup
                                max={8}
                                sx={{
                                    marginBottom: {
                                        xs: "10px",
                                        sm: "10px",
                                        md: "0px",
                                    },
                                }}
                            >
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
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                    }}
                                >
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

                                <Box
                                    sx={{
                                        display: "none",
                                    }}
                                >
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
                                        Thêm bạn bè
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
                                        startIcon={
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/YjBUcSAL8TC.png"
                                                height="16"
                                                width="16"
                                            />
                                        }
                                    >
                                        Nhắn tin
                                    </Button>
                                </Box>

                                <Box
                                    sx={{
                                        display: "none",
                                    }}
                                >
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
                                        startIcon={
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/5nzjDogBZbf.png"
                                                height="16"
                                                width="16"
                                            />
                                        }
                                    >
                                        Bạn bè
                                    </Button>

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
                                        startIcon={
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/YjBUcSAL8TC.png"
                                                height="16"
                                                width="16"
                                                style={{ filter: "invert(1)" }}
                                            />
                                        }
                                    >
                                        Nhắn tin
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Container>
    );
};
