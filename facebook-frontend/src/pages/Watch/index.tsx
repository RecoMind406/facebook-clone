import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Typography,
} from "@mui/material/";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { WatchMain } from "../../components/WatchBody";
import Header from "~/components/Header";

const drawerWidth = 360;

const backgroundColor = {
    backgroundColor: "#f0f2f5",
};

export default function Watch() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Box sx={{ display: "flex" }} style={backgroundColor}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                    mx: "2",
                    display: { xs: "none", sm: "none", md: "block" },
                }}
                variant="permanent"
                anchor="left"
            >
                <Header />
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        p: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        Watch
                    </Typography>
                    <IconButton
                        sx={{
                            color: "#050505",
                            backgroundColor: "#e4e6e9",
                        }}
                    >
                        <SettingsIcon
                            sx={{ fontSize: "1.8rem", bgColor: "grey" }}
                        />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {[
                        "Trang chủ",
                        "Trực tiếp",
                        "Reels",
                        "Chương trình",
                        "Video đã lưu",
                    ].map((text, index) => (
                        <ListItem key={text}>
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) =>
                                    handleListItemClick(event, index)
                                }
                            >
                                <ListItemIcon>
                                    <IconButton
                                        sx={{
                                            color: "#050505",
                                            backgroundColor: "#e4e6e9",
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    >
                                        {index === 0 ? (
                                            <VideoLibraryIcon />
                                        ) : index === 1 ? (
                                            <VideoCameraBackIcon />
                                        ) : index === 2 ? (
                                            <MovieCreationIcon />
                                        ) : index === 3 ? (
                                            <MovieFilterIcon />
                                        ) : (
                                            <BookmarkIcon />
                                        )}
                                    </IconButton>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#050505",
                                    }}
                                >
                                    {text}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.default",
                    p: 3,
                    position: "relative",
                    top: "56px",
                }}
            >
                <Box
                    sx={{
                        display: { md: "none" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{ mx: 2, fontSize: "24px", fontWeight: "bold" }}
                        >
                            Watch
                        </Typography>
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            {["Trang chủ", "Trực tiếp", "Reels", "..."].map(
                                (text, index) => (
                                    <ListItem
                                        key={text}
                                        disablePadding
                                        sx={{
                                            width: "100%",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <ListItemButton
                                            selected={selectedIndex === index}
                                            sx={{
                                                borderRadius: 8,
                                                maxWidth: "100%",
                                            }}
                                            onClick={(event) =>
                                                handleListItemClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {text}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Box>
                </Box>
                <WatchMain></WatchMain>
            </Box>
        </Box>
    );
}
