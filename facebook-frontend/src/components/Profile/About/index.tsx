import React, { useState } from "react";
import User from "../../../interfaces/user";
import {
    Container,
    Paper,
    Typography,
    styled,
    Button,
    Grid,
    Box,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Title = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    fontWeight: "bold",
    color: "#050505",
    fontSize: "20px",
}));
const ChosenButton = styled(Button)(() => ({
    justifyContent: "flex-start",
    textTransform: "none",
    color: "#1877f2",
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "#e7f3ff",
    width: "100%",
}));
const DefaultButton = styled(ChosenButton)({
    color: "#65676b",
    backgroundColor: "transparent",
    "&:hover": {
        backgroundColor: "#f2f2f2",
    },
});
const TongQuan = [
    "Thêm nơi làm việc",
    "Thêm trường trung học",
    "Thêm trường cao đẳng/đại học",
    "Thêm tỉnh/thành phố hiện tại",
    "Thêm quê quán",
    "Thêm tình trạng mối quan hệ",
];
const NoiTungSong = [
    "Thêm tỉnh/thành phố hiện tại",
    "Thêm quê quán",
    "Thêm thành phố",
];

export const ProfileAboutTab: React.FC<User> = (aUser) => {
    const [selectedButton, setSelectedButton] = useState("Tổng quan");

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };
    return (
        <Container>
            <Paper
                sx={{
                    textAlign: "center",
                    marginBottom: "15px",
                    padding: "16px",
                }}
            >
                <Title>Giới thiệu</Title>
                <Grid container spacing="10px">
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        sx={{
                            borderRight: "1px solid #ddd",
                            paddingRight: "10px",
                        }}
                    >
                        <Box>
                            {selectedButton === "Tổng quan" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick("Tổng quan")
                                    }
                                >
                                    Tổng quan
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick("Tổng quan")
                                    }
                                >
                                    Tổng quan
                                </DefaultButton>
                            )}
                            {selectedButton === "Công việc và học vấn" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Công việc và học vấn"
                                        )
                                    }
                                >
                                    Công việc và học vấn
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Công việc và học vấn"
                                        )
                                    }
                                >
                                    Công việc và học vấn
                                </DefaultButton>
                            )}
                            {selectedButton === "Nơi từng sống" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick("Nơi từng sống")
                                    }
                                >
                                    Nơi từng sống
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick("Nơi từng sống")
                                    }
                                >
                                    Nơi từng sống
                                </DefaultButton>
                            )}
                            {selectedButton ===
                            "Thông tin liên hệ và cơ bản" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Thông tin liên hệ và cơ bản"
                                        )
                                    }
                                >
                                    Thông tin liên hệ và cơ bản
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Thông tin liên hệ và cơ bản"
                                        )
                                    }
                                >
                                    Thông tin liên hệ và cơ bản
                                </DefaultButton>
                            )}
                            {selectedButton ===
                            "Gia đình và các mối quan hệ" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Gia đình và các mối quan hệ"
                                        )
                                    }
                                >
                                    Gia đình và các mối quan hệ
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick(
                                            "Gia đình và các mối quan hệ"
                                        )
                                    }
                                >
                                    Gia đình và các mối quan hệ
                                </DefaultButton>
                            )}
                            {selectedButton === "Chi tiết về bạn" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick("Chi tiết về bạn")
                                    }
                                >
                                    Chi tiết về bạn
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick("Chi tiết về bạn")
                                    }
                                >
                                    Chi tiết về bạn
                                </DefaultButton>
                            )}
                            {selectedButton === "Sự kiện trong đời" ? (
                                <ChosenButton
                                    onClick={() =>
                                        handleButtonClick("Sự kiện trong đời")
                                    }
                                >
                                    Sự kiện trong đời
                                </ChosenButton>
                            ) : (
                                <DefaultButton
                                    onClick={() =>
                                        handleButtonClick("Sự kiện trong đời")
                                    }
                                >
                                    Sự kiện trong đời
                                </DefaultButton>
                            )}
                        </Box>
                    </Grid>

                    {selectedButton === "Tổng quan" && (
                        <Grid item xs>
                            {TongQuan.map((item) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        textAlign: "left",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <ControlPointIcon
                                        sx={{
                                            color: "#1876f2",
                                            marginRight: "6px",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            color: "#1876f2",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                    )}

                    {selectedButton === "Công việc và học vấn" && (
                        <Grid item xs>
                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Công việc
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm nơi làm việc
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Đại học
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm trường cao đẵng/đại học
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Trường trung học
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm trường trung học
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    {selectedButton === "Nơi từng sống" && (
                        <Grid item xs>
                            <Title sx={{ fontSize: "16px" }}>
                                Nơi từng sống
                            </Title>
                            {TongQuan.map((item) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        textAlign: "left",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <ControlPointIcon
                                        sx={{
                                            color: "#1876f2",
                                            marginRight: "6px",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            color: "#1876f2",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                    )}

                    {selectedButton === "Thông tin liên hệ và cơ bản" && (
                        <Grid item xs>
                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Thông tin liên hệ
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                        display: aUser.phone ? "none" : "block",
                                    }}
                                />
                                <SmartphoneIcon
                                    sx={{
                                        color: "#050505",
                                        marginRight: "6px",
                                        display: aUser.phone ? "block" : "none",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: aUser.phone
                                            ? "#050505"
                                            : "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    {aUser.phone
                                        ? aUser.phone
                                        : "Thêm số điện thoại"}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                        display: aUser.email ? "none" : "block",
                                    }}
                                />
                                <MailOutlineIcon
                                    sx={{
                                        color: "#050505",
                                        marginRight: "6px",
                                        display: aUser.email ? "block" : "none",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: aUser.email
                                            ? "#050505"
                                            : "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    {aUser.email
                                        ? aUser.email
                                        : "Thêm địa chỉ email"}
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Các trang web và liên kết xã hội
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm một trang web
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm liên kết xã hội
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Thông tin cơ bản
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm một ngôn ngữ
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/wfYa2HPiNGU.png"
                                    alt=""
                                    height="24"
                                    width="24"
                                    style={{
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#050505",
                                        fontSize: "14px",
                                    }}
                                >
                                    {aUser.gender ? aUser.gender : "Giới tính"}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/8h5bbU4i43W.png"
                                    alt=""
                                    height="24"
                                    width="24"
                                    style={{
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#050505",
                                        fontSize: "14px",
                                    }}
                                >
                                    {aUser.birthdate
                                        ? aUser.birthdate
                                              .toDateString()
                                              .slice(4)
                                        : "Ngày tháng năm sinh"}
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    {selectedButton === "Gia đình và các mối quan hệ" && (
                        <Grid item xs>
                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Mối quan hệ
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm tình trạng mối quan hệ
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Thành viên trong gia đình
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm người thân
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    {selectedButton === "Chi tiết về bạn" && (
                        <Grid item xs>
                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Giới thiệu về bãn thân
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Viết một số điều về chính bạn
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Cách phát âm tên
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm cách đọc tên
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Các tên khác
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm biệt danh, tên thường gọi, ...
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Trích dẫn yêu thích
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm trích dẫn yêu thích
                                </Typography>
                            </Box>

                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Hiến máu
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Tìm hiểu về hiến máu
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    {selectedButton === "Sự kiện trong đời" && (
                        <Grid item xs>
                            <Title
                                sx={{
                                    fontSize: "16px",
                                }}
                            >
                                Sự kiện trong đời
                            </Title>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <ControlPointIcon
                                    sx={{
                                        color: "#1876f2",
                                        marginRight: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#1876f2",
                                        fontSize: "14px",
                                    }}
                                >
                                    Thêm một sự kiện trong đời
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    textAlign: "left",
                                    marginBottom: "20px",
                                }}
                            >
                                <i
                                    style={{
                                        backgroundImage:
                                            'url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/w2gqa5dgoE9.png")',
                                        backgroundPosition: "0px -75px",
                                        backgroundSize: "auto",
                                        width: "24px",
                                        height: "24px",
                                        backgroundRepeat: "no-repeat",
                                        display: "inline-block",
                                        marginRight: "6px",
                                        color: "#65676b",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#65676b",
                                        fontSize: "14px",
                                    }}
                                >
                                    Không có sự kiện trong đời để hiển thị
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Container>
    );
};
