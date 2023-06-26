import React, { useEffect, useState } from "react";
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

import User from "~/models/user";
import { TopSection } from "~/components/Profile/TopSection";
import { PostsLeft } from "~/components/Profile/Posts/LeftSection";
import { PostsMain } from "~/components/Profile/Posts/MainSection";
import { ProfileAboutTab } from "~/components/Profile/About";
import { ProfilePhotosTab } from "~/components/Profile/Photos";
import { ProfileVideosTab } from "~/components/Profile/Videos";
import { ProfileReelsTab } from "~/components/Profile/Reels";
import { ProfileFriendsTab } from "~/components/Profile/Friends";
import Header from "~/components/Header";
import Post from "~/models/post";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth, storage } from "~/../config/firebase";
import {
    getDocs,
    getDoc,
    collection,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
    query,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useParams } from "react-router-dom";

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

export const Profile = (profileId: string) => {
    const usersCollectionRef = collection(db, "users");

    // Get login user
    const [loginUserId, setLoginUserId] = useState("");

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            setLoginUserId(user.uid);
        }
    });

    // Get all users from firestore
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            const usersQuery = query(usersCollectionRef);
            const usersSnapshot = await getDocs(usersQuery);
            const usersData = usersSnapshot.docs.map(
                (doc) => doc.data() as User
            );
            setUsers(usersData);
        };
        getUsers();
    }, []);

    // Get the user with user.id = loginUserId from firestore
    const loginUser = users.find((user) => user.id === loginUserId);
    // Get the user with user.id = profileId from firestore
    const { id } = useParams<{ id: string }>();
    const profileUser = users.find((user) => user.id === id);

    // Navigation
    const [selectedNav, setSelectedNav] = useState("Bài viết");
    const handleNavClick = (nav: string) => {
        setSelectedNav(nav);
    };

    return (
        <Box>
            <Header />
            {loginUser && (
                <TopSection
                    aLoginUser={loginUser}
                    aProfileUser={profileUser ? profileUser : loginUser}
                />
            )}

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
                                {loginUser && <PostsLeft {...loginUser} />}
                            </Box>
                        </Box>
                        <Box flex={{ xs: "1", sm: "1", md: "3" }}>
                            {loginUser && <PostsMain {...loginUser} />}
                        </Box>
                    </Box>
                </Container>
            )}

            <Container>
                {selectedNav === "Giới thiệu" && (
                    <>
                        {loginUser && <ProfileAboutTab {...loginUser} />}
                        {loginUser && <ProfileFriendsTab {...loginUser} />}
                        {loginUser && <ProfilePhotosTab {...loginUser} />}
                        {loginUser && <ProfileVideosTab {...loginUser} />}
                        {loginUser && <ProfileReelsTab {...loginUser} />}
                    </>
                )}

                {selectedNav === "Bạn bè" && (
                    <>
                        {loginUser && <ProfileFriendsTab {...loginUser} />}
                        {loginUser && <ProfilePhotosTab {...loginUser} />}
                        {loginUser && <ProfileVideosTab {...loginUser} />}
                        {loginUser && <ProfileReelsTab {...loginUser} />}
                    </>
                )}

                {selectedNav === "Ảnh" && (
                    <>
                        {loginUser && <ProfilePhotosTab {...loginUser} />}
                        {loginUser && <ProfileVideosTab {...loginUser} />}
                        {loginUser && <ProfileReelsTab {...loginUser} />}
                    </>
                )}

                {selectedNav === "Video" && (
                    <>
                        {loginUser && <ProfileVideosTab {...loginUser} />}
                        {loginUser && <ProfileReelsTab {...loginUser} />}
                    </>
                )}

                {selectedNav === "Reels" && (
                    <>{loginUser && <ProfileReelsTab {...loginUser} />}</>
                )}
            </Container>
        </Box>
    );
};
