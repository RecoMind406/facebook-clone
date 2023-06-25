import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Header from "~/components/Header";
import SidebarItem from "~/components/SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faBullhorn,
	faChevronDown,
	faChevronUp,
	faClapperboard,
	faEllipsis,
	faMagnifyingGlass,
	faPlus,
	faUserGear,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
// Import tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ButtonNextSlide from "../../components/ButtonSlideSwiper/ButtonNext";
import ButtonPrevSlide from "../../components/ButtonSlideSwiper/ButtonPrev";
import { Link } from "react-router-dom";
import PostItem from "~/components/PostItem";
import BoxChatItem from "~/components/BoxChatItem";


import { useAuth } from "~/contexts/AuthContext";

// firestore database
import { db } from "~/../config/firebase";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import User from "~/models/user";
import ContactItem from "~/components/ContactItem/indes";
import Dialogue from "~/models/dialogue";


const cx = classNames.bind(styles);

const Home = () => {
	const [showMore, setShowMore] = useState(false);
	const [showScrollSidebar, setShowScrollSidebar] = useState(false);
	const [showScrollContact, setShowScrollContact] = useState(false);
	const [countClickSlide, setCountClickSlide] = useState(0);
	const [boxChats, setBoxChats] = useState<string[]>([]);

	const totalStory = 8;
	const slidesPerView = 4.5;

	// count = 0 --> disabled prev button
	// count = totalStory -  slidesPerView --> disabled next button
	const [showPostModal, setShowPostModal] = useState(false);
	const [postContent, setPostContent] = useState("");
	const [canPost, setCanPost] = useState(false);
	const handleInputPost = (e: any) => {
		const value = e.target.value;
		setPostContent(value);
		if (value == "") {
			setCanPost(false);
			console.log(canPost);
		} else setCanPost(true);
	};
	const showModal = () => {
		setShowPostModal(true);
	};
	const hideModal = () => {
		setShowPostModal(false);
	};

	const handleShowBoxChat = (id: string) => {
		const index = boxChats.findIndex((boxChatId) => boxChatId === id);
		if (index === -1) {
			setBoxChats([...boxChats, id]);
		}
	};

	const hanleCloseBoxChat = (id: string) => {
		const newBoxChat = boxChats.filter((boxChatId) => boxChatId !== id);
		setBoxChats(newBoxChat);
	};

	//const {currentUser} =useAuth()


	// firestore database
	const myUserId = "iaaHqVx5CpkiJUvuCCh8";
	const [userData, setUserData] = useState<User>(new User());

	useEffect(() => {
		const fetchUserData = async () => {
			const userRef = doc(db, "users", myUserId);
			const userDoc = await getDoc(userRef);
			const user = {
				...userDoc.data(),
				id: userDoc.id,
			};
			setUserData(user);
		};

		fetchUserData();
	}, []);

	return (
		<>
			<Header userId="iaaHqVx5CpkiJUvuCCh8" />
			<div className={cx("wrapper")}>
				<div
					className={cx(
						"sidebar",
						"scrollbar",
						showScrollSidebar && "hover-scrollbar"
					)}
					onMouseOver={() => {
						setShowScrollSidebar(true);
					}}
					onMouseOut={() => {
						setShowScrollSidebar(false);
					}}>
					<div className={cx("item")}>
						<SidebarItem
							image={currentUser.profilePicture}
							to="/"
							position=""
							title={currentUser.name}
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/friends"
							position="0px -296px"
							title="Bạn bè"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/groups"
							position="0px -37px"
							title="Nhóm"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
							to="/groups"
							position=""
							title="Bảng feed (Gần đây nhất)"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/marketplace"
							position="0px -407px"
							title="Marketplace"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/watch"
							position="0px -518px"
							title="Watch"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/"
							position="0px -333px"
							title="Chiến dịch gây quỹ"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/gaming"
							position="0px -74px"
							title="Chơi game"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
							to="/"
							position="0px -185px"
							title="Đã lưu"
						/>
					</div>
					<div className={cx("item")}>
						<SidebarItem
							image="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png"
							to="/"
							position=""
							title="Đơn đã đặt và thanh toán"
						/>
					</div>
					{!showMore && (
						<div
							onClick={() => {
								setShowMore(true);
							}}
							className={cx("item")}>
							<SidebarItem
								image={<FontAwesomeIcon icon={faChevronDown} />}
								to=""
								position=""
								title="Xem thêm"
							/>
						</div>
					)}

					{showMore && (
						<div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/z3JoyCWlf8g.png"
									to="/"
									position="-722px -175px"
									title="Hiến máu"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/x2_LFd7gCqg.png"
									to="/"
									position=""
									title="Hoạt động quảng cáo gần dây"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
									to="/"
									position="0px -444px"
									title="Kỷ niệm"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png"
									to="/"
									position="0px -111px"
									title="Trang"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png"
									to="/"
									position=""
									title="Trình quản lý quảng cáo"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"
									to="/"
									position=""
									title="Trung tâm khoa học khí hậu"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/fNPcDZC-2PD.png"
									to="/"
									position=""
									title="Ứng phó khẩn cấp"
								/>
							</div>
							<div className={cx("item")}>
								<SidebarItem
									image="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png"
									to="/"
									position=""
									title="Video chơi game"
								/>
							</div>
							<div
								onClick={() => {
									setShowMore(false);
								}}
								className={cx("item")}>
								<SidebarItem
									image={<FontAwesomeIcon icon={faChevronUp} />}
									to=""
									position=""
									title="Ẩn bớt"
								/>
							</div>
						</div>
					)}
				</div>
				<div className={cx("main")}>
					{/* Story start */}
					<div className={cx("story")}>
						<div className={cx("heading")}>
							<div className={cx("tab-item-box", "active")}>
								<div className={cx("tab-item")}>
									<div className={cx("icon")}>
										<FontAwesomeIcon icon={faBookOpen} />
									</div>
									<span className={cx("title")}>Tin</span>
								</div>
							</div>
							<div className={cx("tab-item-box")}>
								<div className={cx("tab-item")}>
									<div className={cx("icon")}>
										<FontAwesomeIcon icon={faClapperboard} />
									</div>
									<span className={cx("title")}>Reels</span>
								</div>
							</div>
							<div className={cx("tab-item-box")}>
								<div className={cx("tab-item")}>
									<div className={cx("icon")}>
										<FontAwesomeIcon icon={faVideo} />
									</div>
									<span className={cx("title")}>Phòng họp mặt</span>
								</div>
							</div>
						</div>
						{/* Story-list */}
						<div className={cx("story-list")}>
							<Swiper
								// install Swiper modules
								modules={[Navigation, Pagination, Scrollbar, A11y]}
								spaceBetween={8}
								slidesPerView={slidesPerView}>
								<SwiperSlide>
									<div className={cx("create-story")}>
										<div className={cx("content")}>
											<img
												src="https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2023/1/3/avatar1672722560384-16727225610462097679469.png"
												alt=""
											/>
										</div>
										<div className={cx("bottom")}>
											<span>Tạo tin</span>
											<div className={cx("create-box")}>
												<div className={cx("create-icon")}>
													<FontAwesomeIcon icon={faPlus} />
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://play-lh.googleusercontent.com/HHJb4ew7S16SHjqNjp1nEkVKn8L2j1rXPjVmF4fqf-mGjZYYIjhHYKjUJSLbB7SRx1HS"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Lâm Lê</span>
										<div className={cx("content")}>
											<img
												src="https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Do Duong</span>
										<div className={cx("content")}>
											<img
												src="https://imageio.forbes.com/specials-images/imageserve/628e342d212d97dae27d4f15/yelan/960x0.jpg?format=jpg&width=960"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://upload-os-bbs.mihoyo.com/upload/2020/10/13/7888068/bc650f8debc58f02f6e975880cec76e3_5604291575937496709.jpg?x-oss-process\u003dimage/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,jpg"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Thanh Danh</span>
										<div className={cx("content")}>
											<img
												src="https://wallpaperaccess.com/full/59110.png"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://gamek.mediacdn.vn/thumb_w/600/133514250583805952/2020/10/5/genshin-16018835508211684282385.png"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Tai Lê</span>
										<div className={cx("content")}>
											<img
												src="https://media.npr.org/assets/img/2020/01/14/weathering_1_wide-8f52a1ececd99bf0735a26027d565e04d6fab405.jpg"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://e1.pxfuel.com/desktop-wallpaper/467/133/desktop-wallpaper-pin-on-anime-y-mas-anime-avatar-girl.jpg"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Nguyen Hieu</span>
										<div className={cx("content")}>
											<img
												src="https://cdn.tgdd.vn/Files/2020/10/20/1300458/genshin-impact-thumb_800x450.jpg"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://i.pinimg.com/564x/8c/96/35/8c9635e7f91a6b79e16b6fa1ba1810bd.jpg"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Công Văn</span>
										<div className={cx("content")}>
											<img
												src="https://gamek.mediacdn.vn/133514250583805952/2020/1/29/photo-1-15802766365731779574489.jpg"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={cx("story-item")}>
										<div className={cx("avatar")}>
											<img
												src="https://gamelandvn.com/wp-content/uploads/anh/2021/08/yoimiya-thumbnail.jpg"
												alt=""
											/>
										</div>
										<span className={cx("name")}>Lâm Hàn</span>
										<div className={cx("content")}>
											<img
												src="https://i.ytimg.com/vi/jvGnekdMOhI/maxresdefault.jpg"
												alt=""
											/>
										</div>
									</div>
								</SwiperSlide>
								<div
									className={cx(
										"btn-next-slide",
										(countClickSlide === totalStory - slidesPerView ||
											countClickSlide === totalStory - slidesPerView + 0.5) &&
											"disabled"
									)}
									onClick={() => setCountClickSlide(countClickSlide + 1)}>
									<ButtonNextSlide />
								</div>
								<div
									className={cx(
										"btn-prev-slide",
										countClickSlide === 0 && "disabled"
									)}
									onClick={() => setCountClickSlide(countClickSlide - 1)}>
									<ButtonPrevSlide />
								</div>
							</Swiper>
						</div>
					</div>
					{/* Story end */}

					{/* create post start */}
					<div className={cx("create-post")}>
						<div className={cx("heading")}>
							<div className={cx("avatar")}>
								<img
									src={currentUser.profilePicture}
									alt=""
								/>
							</div>
							<div className={cx("content")} onClick={showModal}>
								{currentUser.name} ơi, bạn đang nghĩ gì thế ?
							</div>
						</div>

						<div className={cx("buttons")}>
							<div className={cx("item")}>
								<div className={cx("icon")}>
									<img
										src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
										alt=""
									/>
								</div>
								<span className={cx("title")}>Video trực tiếp</span>
							</div>
							<div className={cx("item")}>
								<div className={cx("icon")}>
									<img
										src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
										alt=""
									/>
								</div>
								<span className={cx("title")}>Ảnh/video</span>
							</div>
							<div className={cx("item")}>
								<div className={cx("icon")}>
									<img
										src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
										alt=""
									/>
								</div>
								<span className={cx("title")}>Cảm xúc/hoạt động</span>
							</div>
						</div>
					</div>
					{/* create post end */}

					{/* list post */}
					<div className={cx("list-post")}>
						<PostItem />
						<PostItem />
					</div>
				</div>
				<div
					className={cx(
						"contact",
						"scrollbar",
						showScrollContact && "hover-scrollbar"
					)}
					onMouseOver={() => {
						setShowScrollContact(true);
					}}
					onMouseOut={() => {
						setShowScrollContact(false);
					}}>
					<div className={cx("page-management")}>
						<div className={cx("heading")}>
							<h3>Trang và trang cá nhân của bạn</h3>
							<button>
								<FontAwesomeIcon icon={faEllipsis} />
							</button>
						</div>
						<div className={cx("page")}>
							<div className={cx("avatar")}>
								<img
									src="https://i.pinimg.com/280x280_RS/2e/c4/c5/2ec4c51f7930501e0721f8e5aecca45f.jpg"
									alt=""
								/>
							</div>
							<span className={cx("title")}>EC Food- Eat Clean Food</span>
						</div>
						<div className={cx("feature")}>
							<div className={cx("icon")}>
								<FontAwesomeIcon icon={faUserGear} />
							</div>
							<span className={cx("title")}>Chuyển sang Trang</span>
						</div>
						<div className={cx("feature")}>
							<div className={cx("icon")}>
								<FontAwesomeIcon icon={faBullhorn} />
							</div>
							<span className={cx("title")}>Tạo quảng cáo</span>
						</div>
					</div>
					<div className={cx("heading-buttons")}>
						<div className={cx("heading")}>Người liên hệ</div>
						<div className={cx("buttons")}>
							<Tippy
								content="Cuộc gọi mới"
								placement="bottom-end"
								delay={[300, 0]}
								arrow={false}>
								<button className={cx("button-contact")}>
									<FontAwesomeIcon icon={faVideo} />
								</button>
							</Tippy>
							<Tippy
								content="Tìm kiếm theo tên hoặc nhóm"
								placement="bottom-end"
								delay={[300, 0]}
								arrow={false}>
								<button className={cx("button-contact")}>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</Tippy>
							<Tippy
								content="Tùy chọn"
								placement="bottom-end"
								delay={[300, 0]}
								arrow={false}>
								<button className={cx("button-contact")}>
									<FontAwesomeIcon icon={faEllipsis} />
								</button>
							</Tippy>
						</div>
					</div>

					<div className={cx("contact-list")}>
						{userData.friends.map((friendId, index) => (
							<ContactItem
								key={index}
								id={friendId}
								handleOnClick={() => handleShowBoxChat(friendId)}
							/>
						))}
					</div>
				</div>
			</div>

			{/* create post modal */}
			{showPostModal && (
				<>
					<div className={cx("modal-container")} onClick={hideModal}></div>
					<div className={cx("modal")}>
						<div className={cx("header")}>
							<span>Tạo bài viết</span>
							<div className={cx("close-btn")} onClick={hideModal}>
								<i
									data-visualcompletion="css-img"
									style={{
										backgroundImage:
											'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/2jXYoyBr7QM.png")',
										backgroundPosition: "-154px -88px",
										backgroundSize: "190px 172px",
										width: "20px",
										height: "20px",
										backgroundRepeat: "no-repeat",
										display: "inline-block",
									}}></i>
							</div>
						</div>
						<div className={cx("body")}>
							<div className={cx("user")}>
								<div className={cx("avatar")}>
									<img
										src="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
										alt=""
									/>
								</div>
								<div className={cx("name")}>
									<p>Lộc Ân</p>
									<div className={cx("publish")}>
										<img
											src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png"
											alt=""
											width={"12px"}
											height={"12px"}
										/>
										Công khai{" "}
										<i
											className="x1b0d499 xep6ejk"
											style={{
												backgroundImage:
													'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/2jXYoyBr7QM.png")',
												backgroundPosition: "-124px -154px",
												backgroundSize: "190px 172px",
												width: "12px",
												height: "12px",
												backgroundRepeat: "no-repeat",
												display: "inline-block",
											}}
											data-visualcompletion="css-img"></i>
									</div>
								</div>
							</div>
							<textarea
								name=""
								id=""
								cols={30}
								rows={5}
								value={postContent}
								onChange={handleInputPost}
								placeholder="Ân ơi, bạn đang nghĩ gì thế?"></textarea>
							<div className={cx("emoj")}>
								<img
									height="38"
									alt=""
									src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
								/>
								<i
									style={{
										backgroundImage:
											'url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/dEGgNUyewy3.png")',
										backgroundPosition: "0px -60px",
										backgroundSize: "34px 638px",
										backgroundRepeat: "no-repeat",
										display: "inline-block",
										height: "24px",
										width: "24px",
									}}
									aria-label="Chèn một biểu tượng cảm xúc"
									role="img"
									data-visualcompletion="css-img"></i>
							</div>
							<div className={cx("add-to-posting")}>
								<div>Thêm vào bài viết của bạn</div>
								<div className={cx("icon")}>
									<Tippy content="Ảnh/video" placement="top" arrow="false">
										<div className={cx("img-icon")}>
											<img
												src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
												alt=""
											/>
										</div>
									</Tippy>
									<Tippy
										content="Gắn thẻ người khác"
										placement="top"
										arrow="false">
										<div className={cx("img-icon")}>
											<img
												src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png"
												alt=""
											/>
										</div>
									</Tippy>
									<Tippy
										content="Cảm xúc/hoạt động"
										placement="top"
										arrow="false">
										<div className={cx("img-icon")}>
											<img
												src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
												alt=""
											/>
										</div>
									</Tippy>
									<Tippy content="Check-in" placement="top" arrow="false">
										<div className={cx("img-icon")}>
											<img
												src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png"
												alt=""
											/>
										</div>
									</Tippy>
									<Tippy
										content="Sự kiện trong đời"
										placement="top"
										arrow="false">
										<div className={cx("img-icon")}>
											<img
												src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/CenxFlWjtJO.png"
												alt=""
											/>
										</div>
									</Tippy>
									<Tippy content="Xem thêm" placement="top" arrow="false">
										<div className={cx("img-icon")}>
											<i
												className="x1b0d499 xl1xv1r"
												style={{
													height: "24px",
													width: "24px",
													backgroundImage:
														'url("https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/S2RzBqcwbI-.png")',
													backgroundPosition: "0px -38px",
													backgroundSize: "38px 162px",
													backgroundRepeat: "no-repeat",
													display: "inline-block",
												}}></i>
										</div>
									</Tippy>
								</div>
							</div>
							<button className={cx({ active: canPost })}>Đăng</button>
						</div>
					</div>
				</>
			)}

			{/* Box chat list */}

			<div className={cx("box-chat-list")}>
				{boxChats.map((boxChatId, index: number) => (
					<BoxChatItem
						key={index}
						userId={myUserId}
						toUserId={boxChatId}
						handleClose={() => hanleCloseBoxChat(boxChatId)}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
