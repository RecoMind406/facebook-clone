import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    IconButton,
    Typography,
    styled,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import User from "~/interfaces/user";
import { TopSection } from "~/components/Profile/TopSection";
import { PostsLeft } from "~/components/Profile/Posts/LeftSection";
import { PostsMain } from "~/components/Profile/Posts/MainSection";
import { ProfileAboutTab } from "~/components/Profile/About";
import { ProfilePhotosTab } from "~/components/Profile/Photos";
import { ProfileVideosTab } from "~/components/Profile/Videos";
import { ProfileReelsTab } from "~/components/Profile/Reels";
import { ProfileFriendsTab } from "~/components/Profile/Friends";

const NavButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "10%",
    padding: "12px 16px",
    marginTop: "5px",
    marginBottom: "5px",
    "&:hover": {
        backgroundColor: "#f2f2f2",
        boxShadow: "none",
    },
});

const NavTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: "bold",
    color: "#65676b",
});

export const Profile: React.FC = () => {
    // dummy data
    const user: User = new User();
    user.cover =
        "https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
    user.profilePicture =
        "https://images.unsplash.com/photo-1686557003767-86c1403ca607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
    user.name = "Nguyễn Văn Aaaaaaaaaaaa";
    user.phone = "0123456789";
    user.email = "johndoe@pm.com";
    const friend1: User = new User();
    friend1.profilePicture =
        "https://images.unsplash.com/photo-1685949079965-b0897dde2b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
    const friend2 = friend1;
    const friend3 = friend2;
    const friend4 = new User();
    friend4.profilePicture =
        "https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
    user.friends = [friend4, friend2, friend3];
    user.friends.push(friend1);
    const post0 = {
        id: "0",
        userID: user.id,
        content:
            "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        images: [
            "https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            "https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            "https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        ],
        timestamp: new Date(),
        reactions: [],
        comments: [],
        share: [],
        // originalID: "1",
    };
    const post1 = post0;
    const post2 = post0;

    user.posts = [post0, post1, post2];

    const [selectedNav, setSelectedNav] = useState("Bài viết");

    const handleNavClick = (nav: string) => {
        setSelectedNav(nav);
    };

    return (
        <Box>
            <TopSection {...user} />

            <Container>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <NavButton
                            onClick={() => handleNavClick("Bài viết")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Bài viết"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Bài viết" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Bài viết"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Bài viết
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            onClick={() => handleNavClick("Giới thiệu")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Giới thiệu"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Giới thiệu" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Giới thiệu"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Giới thiệu
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            onClick={() => handleNavClick("Bạn bè")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Bạn bè"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Bạn bè" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Bạn bè"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Bạn bè
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            onClick={() => handleNavClick("Ảnh")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Ảnh"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Ảnh" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Ảnh"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Ảnh
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            onClick={() => handleNavClick("Video")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Video"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Video" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Video"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Video
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            onClick={() => handleNavClick("Reels")}
                            sx={{
                                borderBottom:
                                    selectedNav === "Reels"
                                        ? "2px solid #1876f2"
                                        : "none",
                                borderRadius:
                                    selectedNav === "Reels" ? "0" : "10%",
                            }}
                        >
                            <NavTypography
                                sx={{
                                    color:
                                        selectedNav === "Reels"
                                            ? "#1876f2"
                                            : "#65676b",
                                }}
                            >
                                Reels
                            </NavTypography>
                        </NavButton>
                        <NavButton
                            endIcon={<ArrowDropDownIcon />}
                            onClick={() => handleNavClick("Xem thêm")}
                            sx={{
                                backgroundColor:
                                    selectedNav === "Xem thêm"
                                        ? "#f2f2f2"
                                        : undefined,
                            }}
                            disabled
                        >
                            <NavTypography>Xem thêm </NavTypography>
                        </NavButton>
                    </Box>
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
            </Container>

            {selectedNav === "Bài viết" && (
                <Container>
                    <Box
                        display="flex"
                        flexDirection={{
                            xs: "column",
                            sm: "column",
                            md: "row",
                        }}
                        height="100%"
                    >
                        <Box
                            flex={{ xs: "none", sm: "none", md: "2" }}
                            sx={{
                                marginRight: { md: "16px" },
                            }}
                        >
                            <Box position="sticky" top="10px">
                                <PostsLeft {...user} />
                            </Box>
                        </Box>
                        <Box flex={{ xs: "1", sm: "1", md: "3" }}>
                            <PostsMain {...user} />
                        </Box>
                    </Box>
                </Container>
            )}

            <Container>
                {selectedNav === "Giới thiệu" && (
                    <>
                        <ProfileAboutTab {...user} />
                        <ProfileFriendsTab {...user} />
                        <ProfilePhotosTab {...user} />
                        <ProfileVideosTab {...user} />
                        <ProfileReelsTab {...user} />
                    </>
                )}

                {selectedNav === "Bạn bè" && (
                    <>
                        <ProfileFriendsTab {...user} />
                        <ProfilePhotosTab {...user} />
                        <ProfileVideosTab {...user} />
                        <ProfileReelsTab {...user} />
                    </>
                )}

                {selectedNav === "Ảnh" && (
                    <>
                        <ProfilePhotosTab {...user} />
                        <ProfileVideosTab {...user} />
                        <ProfileReelsTab {...user} />
                    </>
                )}

                {selectedNav === "Video" && (
                    <>
                        <ProfileVideosTab {...user} />
                        <ProfileReelsTab {...user} />
                    </>
                )}

                {selectedNav === "Reels" && (
                    <>
                        <ProfileReelsTab {...user} />
                    </>
                )}
            </Container>
        </Box>
    );
};
