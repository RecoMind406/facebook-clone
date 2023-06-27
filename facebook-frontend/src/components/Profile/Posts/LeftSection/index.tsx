import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import User from "../../../../models/user";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    marginBottom: "15px",
}));
const Title = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    fontWeight: "bold",
    color: "#050505",
    fontSize: "20px",
}));
const PrimaryButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: "#e4e6eb",
    width: "100%",
    marginBottom: "15px",
    color: "#050505",
    fontSize: "14px",
    ":hover": {
        backgroundColor: "#cfd2d6",
    },
}));
const SecondaryButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    textTransform: "none",
    marginBottom: "15px",
    color: "#216fdb",
    fontSize: "16px",
    ":hover": {
        backgroundColor: "#F0F2F5",
    },
}));

export const PostsLeft: React.FC<User> = (aUser) => {
    return (
        <Box>
            <Item>
                <Title>Giới thiệu</Title>
                <PrimaryButton variant="contained">
                    Chỉnh sửa chi tiết
                </PrimaryButton>

                <PrimaryButton variant="contained">Thêm sở thích</PrimaryButton>
                <PrimaryButton variant="contained">
                    Thêm nội dung đáng chú ý
                </PrimaryButton>
            </Item>

            <Item>
                <Box
                    display="flex"
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Title>Ảnh</Title>
                    <SecondaryButton>Xem tất cả ảnh</SecondaryButton>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: "100%",
                                maxHeight: "150px",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            alt={"Profile picture  of " + aUser.name}
                            src={
                                aUser.profilePicture
                                    ? aUser.profilePicture
                                    : "http://getwallpapers.com/wallpaper/full/1/f/a/475590.jpg"
                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: "100%",
                                maxHeight: "150px",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            alt={"Cover photo of " + aUser.name}
                            src={
                                aUser.cover
                                    ? aUser.cover
                                    : "http://getwallpapers.com/wallpaper/full/1/f/a/475590.jpg"
                            }
                        />
                    </Grid>
                </Grid>
            </Item>

            <Item>
                <Box
                    display="flex"
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Title
                            sx={{
                                padding: "0px",
                            }}
                        >
                            Bạn bè
                        </Title>
                        <Typography
                            sx={{
                                color: "#65676b",
                                fontSize: "16px",
                            }}
                        >
                            {aUser.friends.length} người bạn
                        </Typography>
                    </Box>
                    <SecondaryButton>Xem tất cả bạn bè</SecondaryButton>
                </Box>
                <Grid container spacing={1}>
                    {aUser.friends.map((friend) => (
                        <Grid
                            item
                            xs={4}
                            // key={friend.id}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                                // alt={"Profile picture of " + friend.name}
                                // src={friend.profilePicture}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Item>
        </Box>
    );
};
