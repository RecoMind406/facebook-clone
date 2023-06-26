import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Container,
	CssBaseline,
	Divider,
	IconButton,
	Modal,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import User from "~/models/user";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, auth, storage } from "~/../config/firebase";
import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { v4 } from "uuid";
interface TopSectionProps {
	aLoginUser: User;
	aProfileUser: User;
}

export const TopSection = ({ aLoginUser, aProfileUser }: TopSectionProps) => {
	const [openChangeCover, setOpenChangeCover] = React.useState(false);
	const [openChangeProfilePicture, setOpenChangeProfilePicture] =
		React.useState(false);
	const [profilePicture, setProfilePicture] = useState<File | null>(null);
	const [profilePictureUrl, setProfilePictureUrl] = useState("");
	const [cover, setCover] = useState<File | null>(null);
	const [coverUrl, setCoverUrl] = useState("");

	const handleOpenChangeCover = () => {
		setOpenChangeCover(true);
	};
	const handleCloseChangeCover = () => {
		setOpenChangeCover(false);
	};
	const handleOpenChangeProfilePicture = () => {
		setOpenChangeProfilePicture(true);
	};
	const handleCloseChangeProfilePicture = () => {
		setOpenChangeProfilePicture(false);
	};

	const usersCollectionRef = collection(db, "users");

	const [uploadImageProfile, setUploadImageProfile] = useState("");
	const handleUploadProfilePicture = async (event: any) => {
		const file = event.target.files[0];
		console.log("vào hàm upload profile picture");

		const imageRef = ref(storage, `images/${file.name + v4()}`);
		uploadBytes(imageRef, file).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				// url là path image
				setUploadImageProfile(url);
			});
		});

		// if (!profilePicture) {
		//     handleCloseChangeProfilePicture();
		// }
		// if (profilePicture && aLoginUser) {
		//     const imageRef = ref(
		//         storage,
		//         `users/${aLoginUser.id}/profilePicture`
		//     );
		//     try {
		//         uploadBytes(imageRef, profilePicture).then((snapshot) => {
		//             getDownloadURL(snapshot.ref).then((url) => {
		//                 setProfilePictureUrl(url);
		//                 console.log("Profile Picture Url:", profilePictureUrl);
		//             });
		//         });
		//     } catch (err) {
		//         console.error(err);
		//     }
		// }
		// // Update profile picture url in firestore
		// const querySnapshot = await getDocs(
		//     query(usersCollectionRef, where("id", "==", aLoginUser.id))
		// );
		// const docId = querySnapshot.docs[0].id;
		// await updateDoc(doc(usersCollectionRef, docId), {
		//     profilePicture: profilePictureUrl,
		// });
		// console.log(aLoginUser.profilePicture);
		// handleCloseChangeProfilePicture();
	};

	const handleUploadCover = async () => {
		if (!cover) {
			handleCloseChangeCover();
		}
		if (cover && aLoginUser) {
			const imageRef = ref(storage, `users/${aLoginUser.id}/cover`);
			try {
				uploadBytes(imageRef, cover).then((snapshot) => {
					getDownloadURL(snapshot.ref).then((url) => {
						setCoverUrl(url);
						console.log(url);
					});
				});
			} catch (err) {
				console.error(err);
			}
		}
		// Update cover url in firestore
		const querySnapshot = await getDocs(
			query(usersCollectionRef, where("id", "==", aLoginUser.id))
		);
		const docId = querySnapshot.docs[0].id;
		await updateDoc(doc(usersCollectionRef, docId), {
			cover: coverUrl,
		});
		handleCloseChangeCover();
	};

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
				}}>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						justifyContent: "flex-end",
					}}>
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
						onClick={handleOpenChangeCover}>
						<CameraAltIcon
							sx={{
								color: "black",
							}}
						/>
					</IconButton>
					<Modal
						open={openChangeCover}
						onClose={handleCloseChangeCover}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "400px",
								p: 4,
								bgcolor: "background.paper",
								boxShadow: 24,
								borderRadius: "16px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<Typography
								variant="h6"
								component="h2"
								mb={2}
								sx={{
									fontWeight: "bold",
									fontSize: "32px",
									textAlign: "center",
								}}>
								Thay đổi ảnh bìa
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}>
								<input
									type="file"
									onChange={(e) => {
										if (e.target.files) {
											setCover(e.target.files[0]);
										}
									}}
									style={{ marginBottom: 2 }}
								/>
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
									onClick={handleUploadCover}>
									Tải Ảnh Lên
								</Button>
							</Box>
						</Box>
					</Modal>
				</Box>
				<img
					alt={"Cover photo of" + aLoginUser.name}
					src={
						aLoginUser.cover
							? aLoginUser.cover
							: "http://getwallpapers.com/wallpaper/full/1/f/a/475590.jpg"
					}
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
				}}>
				<Avatar
					src={aLoginUser.profilePicture}
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
					onClick={handleOpenChangeProfilePicture}>
					<CameraAltIcon
						sx={{
							color: "black",
						}}
					/>
				</IconButton>
				<Modal
					open={openChangeProfilePicture}
					onClose={handleCloseChangeProfilePicture}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "400px",
							p: 4,
							bgcolor: "background.paper",
							boxShadow: 24,
							borderRadius: "16px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Typography
							variant="h6"
							component="h2"
							mb={2}
							sx={{
								fontWeight: "bold",
								fontSize: "32px",
								textAlign: "center",
							}}>
							Thay đổi ảnh đại diện
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<input
								type="file"
								// onChange={(e) => {
								//     if (e.target.files) {
								//         setProfilePicture(e.target.files[0]);
								//     }
								// }}
								onChange={(event) => handleUploadProfilePicture(event)}
								style={{ marginBottom: 2 }}
							/>
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
								onClick={handleUploadProfilePicture}>
								Tải Ảnh Lên
							</Button>
						</Box>
					</Box>
				</Modal>
				<Box
					sx={{
						width: "100%",
					}}>
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
							}}>
							{aLoginUser.name}
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
							}}>
							{aLoginUser.friends.length} bạn bè
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
							}}>
							<AvatarGroup
								max={8}
								sx={{
									marginBottom: {
										xs: "10px",
										sm: "10px",
										md: "0px",
									},
								}}>
								{aLoginUser.friends.slice(0, 8).map((friend) => (
									<Avatar
										// key={friend.id}
										// alt={"Photo of" + friend.name}
										// src={friend.profilePicture}
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
								}}>
								<Box
									sx={{
										display: "flex",
									}}>
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
										startIcon={<AddIcon />}>
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
										startIcon={<CreateIcon />}>
										Chỉnh sửa trang cá nhân
									</Button>
								</Box>

								<Box
									sx={{
										display: "none",
									}}>
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
										startIcon={<AddIcon />}>
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
										}>
										Nhắn tin
									</Button>
								</Box>

								<Box
									sx={{
										display: "none",
									}}>
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
										}>
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
										}>
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
