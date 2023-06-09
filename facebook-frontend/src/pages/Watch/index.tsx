import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    AppBar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Typography,
} from "@mui/material/";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { WatchMain } from "../../components/WatchBody";

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
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            ></AppBar>
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
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        p: 2,
                    }}
                >
                    <Typography variant="h4" fontWeight="fontWeightBold">
                        Watch
                    </Typography>
                    <IconButton
                        sx={{ color: "#050505", backgroundColor: "#e4e6e9" }}
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
                        <ListItem key={text} disablePadding>
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
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
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
                            variant="h4"
                            fontWeight="fontWeightBold"
                            sx={{ mx: 2 }}
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
                                            <ListItemText primary={text} />
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
