import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HouseIcon from "@mui/icons-material/House";
import BuildIcon from "@mui/icons-material/Build";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import HardwareIcon from "@mui/icons-material/Hardware";
import PianoIcon from "@mui/icons-material/Piano";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PetsIcon from "@mui/icons-material/Pets";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const drawerWidth = 360;

const MarketplaceList = [
    { name: "Lướt xem tất cả", icon: <StoreIcon /> },
    { name: "Thông báo", icon: <NotificationsIcon /> },
    { name: "Hộp thư", icon: <MailIcon /> },
    { name: "Đang mua", icon: <ShoppingBagIcon /> },
    { name: "Bán hàng", icon: <LocalOfferIcon /> },
];

const Categories = [
    { name: "Xe cộ", icon: <DirectionsCarIcon /> },
    { name: "Tài sản cho thuê", icon: <HouseIcon /> },
    { name: "Bán nhà", icon: <HouseIcon /> },
    { name: "Dụng cụ sửa chữa nhà cửa", icon: <BuildIcon /> },
    { name: "Gia đình", icon: <FavoriteIcon /> },
    { name: "Giải trí", icon: <VideoCallIcon /> },
    { name: "Làm vườn & hoạt động ngoài trời", icon: <HardwareIcon /> },
    { name: "Nhạc cụ", icon: <PianoIcon /> },
    { name: "Rao vặt", icon: <LocalOfferIcon /> },
    { name: "Sản phẩm miễn phí", icon: <LocalOfferIcon /> },
    { name: "Sản phẩm thể thao", icon: <DirectionsRunIcon /> },
    { name: "Sở thích", icon: <ColorLensIcon /> },
    { name: "Văn phòng phẩm", icon: <LocalOfferIcon /> },
    { name: "Đồ chơi & trò chơi", icon: <SportsEsportsIcon /> },
    { name: "Đồ dùng cho thú cưng", icon: <PetsIcon /> },
    { name: "Đồ gia dụng", icon: <LocalOfferIcon /> },
    { name: "Đồ may mặc", icon: <CheckroomIcon /> },
    { name: "Đồ điện tử", icon: <PhoneAndroidIcon /> },
    { name: "Nhóm mua và bán", icon: <Groups2Icon /> },
];
import Header from "../Header";

export const MarketplaceSidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    const [selectedCatIndex, setSelectedCatIndex] = React.useState(1);
    const handleCategoryClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedCatIndex(index);
    };
    return (
        <Box sx={{ display: "flex" }}>
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
                        Marketplace
                    </Typography>
                    <IconButton
                        sx={{ color: "#050505", backgroundColor: "#e4e6e9" }}
                    >
                        <SettingsIcon
                            sx={{ fontSize: "25px", bgColor: "grey" }}
                        />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {MarketplaceList.map((item, index) => (
                        <ListItem key={item.name} disablePadding>
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
                                        {item.icon}
                                    </IconButton>
                                </ListItemIcon>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                    {index === 3 || index === 4 ? (
                                        <ArrowForwardIosIcon
                                            sx={{
                                                width: "16px",
                                                height: "16px",
                                                color: "#385898",
                                            }}
                                        />
                                    ) : null}
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                        }}
                    >
                        Bộ lọc
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: "#1877F2",
                        }}
                    >
                        Thành phố Hồ Chí Minh · Trong vòng 65km
                    </Typography>
                </Box>
                <Divider />
                <List>
                    {Categories.map((item, index) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                selected={selectedCatIndex === index}
                                onClick={(event) =>
                                    handleCategoryClick(event, index)
                                }
                            >
                                <ListItemIcon>
                                    <IconButton
                                        sx={{
                                            color: "#050505",
                                            backgroundColor: "#e4e6e9",
                                            width: "15px",
                                            height: "15px",
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#050505",
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
