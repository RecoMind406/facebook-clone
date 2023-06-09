import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
    ThumbUpOutlined,
    ChatBubbleOutline,
    IosShareOutlined,
    MoreHoriz,
} from "@mui/icons-material";

interface Video {
    id: number;
    userImageURL: string;
    userName: string;
    name: string;
    url: string;
    likes: number;
    comments: number;
    views: number;
}

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    border: "0px",
    borderRadius: "10%",
    paddingTop: "-3px",
    paddingBottom: "-3px",
    fontSize: ".9rem",
    color: "#65676b",
    "&:hover": {
        backgroundColor: "#f2f2f2",
        border: "0px",
        boxShadow: "none",
    },
});

const API_KEY = "37123908-375339584965a75f135c570a3";
const query = "dusk";

const toTitleCase = (str: string) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const splitBySpecialCharacters = (str: string) => {
    return str.split(/[-_,]/);
};

export const WatchMain: React.FC = () => {
    const [videoList, setvideoList] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(
                    `https://pixabay.com/api/videos/?key=${API_KEY}&q=${query}&hits=20`
                );

                interface PixabayVideo {
                    id: number;
                    tags: string;
                    videos: {
                        large: {
                            url: string;
                        };
                    };
                    views: number;
                    likes: number;
                    comments: number;
                    user_id: number;
                    user: string;
                    userImageURL: string;
                }

                const videos: Video[] = response.data.hits.map(
                    (video: PixabayVideo) => ({
                        id: video.id,
                        userImageURL: video.userImageURL,
                        userName: toTitleCase(
                            splitBySpecialCharacters(video.user).join(" ")
                        ),
                        name: splitBySpecialCharacters(video.tags).join(" "),
                        url: video.videos.large.url,
                        likes: video.likes,
                        comments: video.comments,
                        views: video.views,
                    })
                );

                setvideoList(videos);
            } catch (error) {
                console.error("Error fetching API: ", error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <Container
            sx={{
                mx: "auto",
                borderRadius: "2%",
            }}
        >
            {videoList.map((video) => (
                <Paper key={video.id}>
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            my: 2,
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar
                                alt="video.userName"
                                src={video.userImageURL}
                                sx={{
                                    mr: 1,
                                    ":hover": {
                                        cursor: "pointer",
                                        filter: "brightness(0.9)",
                                    },
                                }}
                            />
                            <Typography
                                fontWeight="bold"
                                fontSize="14px"
                                sx={{
                                    ":hover": {
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                {video.userName}
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                color: "#050505",
                            }}
                        >
                            <MoreHoriz sx={{ fontSize: "1.8rem" }} />
                        </IconButton>
                    </Container>
                    <Container>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#050505",
                            }}
                        >
                            {toTitleCase(video.name)}
                        </Typography>
                    </Container>
                    <video
                        controls
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                    >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Container>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                color: "#65676b",
                            }}
                        >
                            <Box
                                sx={{
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <CustomButton
                                    variant="outlined"
                                    startIcon={<ThumbUpOutlined />}
                                >
                                    <Typography
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                            fontSize: ".9rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Thích
                                    </Typography>
                                </CustomButton>
                                <CustomButton
                                    variant="outlined"
                                    startIcon={<ChatBubbleOutline />}
                                >
                                    <Typography
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                            fontSize: ".9rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Bình luận
                                    </Typography>
                                </CustomButton>
                                <CustomButton
                                    variant="outlined"
                                    startIcon={<IosShareOutlined />}
                                >
                                    <Typography
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                            fontSize: ".9rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Chia sẻ
                                    </Typography>
                                </CustomButton>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <AvatarGroup>
                                    <Avatar
                                        src={loveIcon}
                                        sx={{
                                            maxWidth: "12px",
                                            maxHeight: "12px",
                                        }}
                                    />
                                    <Avatar
                                        src={hahaIcon}
                                        sx={{
                                            maxWidth: "12px",
                                            maxHeight: "12px",
                                        }}
                                    />
                                </AvatarGroup>
                                <Typography variant="caption" sx={{ mr: 1 }}>
                                    {video.likes}
                                </Typography>
                                <Typography variant="caption" sx={{ mr: 1 }}>
                                    {video.comments} bình luận
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "block",
                                        },
                                    }}
                                >
                                    {video.views} lượt xem
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Paper>
            ))}
        </Container>
    );
};

const loveIcon =
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e";

const hahaIcon =
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e";
