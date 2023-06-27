import React, { useState } from "react";
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
    Input,
    Avatar,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
const Title = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    fontWeight: "bold",
    color: "#050505",
    fontSize: "20px",
}));
const BlueButton = styled(Button)(() => ({
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
const Name = styled(Typography)({
    fontWeight: "bold",
    fontSize: "16px",
    color: "#050505",
    marginLeft: "8px",
});
interface SearchBarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f2f5",
            borderRadius: "50px",
            paddingLeft: "4px",
            marginRight: "9px",
        }}
    >
        <SearchIcon
            sx={{
                color: "#BCC0C4",
                width: "26px",
                height: "36px",
            }}
        />
        <Input
            disableUnderline
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery((e.target as HTMLInputElement).value);
            }}
            placeholder="Tìm kiếm"
            size="small"
            sx={{
                border: 0,
                width: "180px",
                color: "#050505",
                fontSize: ".9375rem",
            }}
        />
    </Box>
);
const filterData = (query: string, data: string[]) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
};
const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin",
];

export const ProfileFriendsTab: React.FC<User> = (aUser) => {
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, data);
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
                    <Title>Bạn bè</Title>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <SearchBar setSearchQuery={setSearchQuery} />

                        <BlueButton
                            sx={{
                                marginRight: "8px",
                                display: {
                                    sm: "none",
                                    xs: "none",
                                    md: "block",
                                },
                            }}
                        >
                            Lời mời kết bạn
                        </BlueButton>
                        <BlueButton
                            sx={{
                                marginRight: "8px",
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block",
                                },
                            }}
                        >
                            Tìm bạn bè
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
                        Tất cả bạn bè
                    </BlueButton>

                    <DefaultButton>Sinh nhật</DefaultButton>
                    <DefaultButton>Đang theo dõi</DefaultButton>
                </Box>

                <Grid container spacing={1}>
                    {[...Array(7)].map((_, index) => (
                        <Grid item xs={6} key={index}>
                            <Paper
                                sx={{
                                    padding: "16px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Avatar
                                        src={`https://picsum.photos/seed/${index}/200`}
                                        alt={`Friend ${index} of ${aUser.name}`}
                                        sx={{
                                            borderRadius: "8px",
                                            width: "80px",
                                            height: "80px",
                                        }}
                                    />
                                    <Name
                                        sx={{
                                            fontSize: {
                                                xs: "14px",
                                                sm: "16px",
                                            },
                                        }}
                                    >{`Friend ${index} name`}</Name>
                                </Box>

                                <IconButton
                                    sx={{
                                        borderRadius: "50%",
                                        backgroundColor: "transparent",
                                        color: "#000000",
                                        width: "32px",
                                        height: "32px",
                                        ":hover": {
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.05)",
                                            borderRadius: "50%",
                                        },
                                    }}
                                >
                                    <MoreHorizIcon fontSize="small" />
                                </IconButton>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
};
