import { Link, useLocation, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faHouse,
	faStore,
	faUsersViewfinder,
	faPlus,
	faBell,
	faEllipsis,
	faArrowsUpDownLeftRight,
	faVideo,
	faGear,
	faCircleQuestion,
	faMoon,
	faCircleExclamation,
	faArrowRightFromBracket,
	faBars,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCirclePlay,
	faChessPawn,
	faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState, useEffect, useRef } from "react";
import NotificationItem from "../NotificationItem";
import MessengerItem from "../MessengerItem";
import AddRequestItem from "../AddRequestItem";
import SettingItem from "../SettingItem";
import TabPageItem from "../TabPageItem";
import SearchItem from "../SearchItem";
import User from "~/models/user";
import { db } from "../../../config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { useAuth } from "~/contexts/AuthContext";
const cx = classNames.bind(styles);

//const Header = () => {
	// Get logged in user
	//const {currentUser}=useAuth()

const Header = ({ userId }: { userId: string }) => {

	// button right
	const [showAddRequest, setShowAddRequest] = useState(false);
	const [showMessenger, setShowMessenger] = useState(false);
	const [showNotification, setShowNotification] = useState(false);
	const [showAccount, setShowAccount] = useState(false);

	const location = useLocation();
	const url = new URL(location.pathname, "http://localhost:5000");
	const path = url.pathname.replace(/^\//, ""); // "groups"

	// tab page item
	const [activeTabHome, setActiveTabHome] = useState(false);
	const [activeTabWatch, setActiveTabWatch] = useState(false);
	const [activeTabMarketplace, setActiveTabMarketplace] = useState(false);
	const [activeTabGroup, setActiveTabGroup] = useState(false);
	const [activeTabGaming, setActiveTabGaming] = useState(false);
	const [activeTabBookmarks, setActiveTabBookmarks] = useState(false);

	// search
	const [showSearch, setShowSearch] = useState(false);
	const [searchResult, setSearchResult] = useState([]);

	const handleActiveTabPageItem = () => {
		switch (path) {
			case "": {
				setActiveTabHome(true);
				setActiveTabWatch(false);
				setActiveTabMarketplace(false);
				setActiveTabGroup(false);
				setActiveTabGaming(false);
				setActiveTabBookmarks(false);
				break;
			}
			case "watch": {
				setActiveTabWatch(true);
				setActiveTabHome(false);
				setActiveTabMarketplace(false);
				setActiveTabGroup(false);
				setActiveTabGaming(false);
				setActiveTabBookmarks(false);
				break;
			}
			case "marketplace": {
				setActiveTabMarketplace(true);
				setActiveTabHome(false);
				setActiveTabWatch(false);
				setActiveTabGroup(false);
				setActiveTabGaming(false);
				setActiveTabBookmarks(false);
				break;
			}
			case "groups": {
				setActiveTabGroup(true);
				setActiveTabMarketplace(false);
				setActiveTabHome(false);
				setActiveTabWatch(false);
				setActiveTabGaming(false);
				setActiveTabBookmarks(false);
				break;
			}
			case "gaming": {
				setActiveTabGaming(true);
				setActiveTabGroup(false);
				setActiveTabMarketplace(false);
				setActiveTabHome(false);
				setActiveTabWatch(false);
				setActiveTabBookmarks(false);
				break;
			}
			case "bookmarks": {
				setActiveTabBookmarks(true);
				setActiveTabGaming(false);
				setActiveTabGroup(false);
				setActiveTabMarketplace(false);
				setActiveTabHome(false);
				setActiveTabWatch(false);
				break;
			}
			default:
				setActiveTabBookmarks(false);
				setActiveTabGaming(false);
				setActiveTabGroup(false);
				setActiveTabMarketplace(false);
				setActiveTabHome(false);
				setActiveTabWatch(false);
				break;
		}
	};
	const myUserId = userId;
	const [userId2, setUserId] = useState("");

	const [userData, setUserData] = useState<User>(new User());
	const [messengerList, setMessengerList] = useState<any[]>([]);
	useEffect(() => {
		handleActiveTabPageItem();
		const fetchUserData = async () => {
			const userIdStorage = localStorage.getItem("currentUser");
			// Gắn userIdStorage vào userRef
			const userRef = doc(db, "users", myUserId);
			const userDoc = await getDoc(userRef);
			const user = {
				...userDoc.data(),
				id: userDoc.id,
			};
			setUserData(user);
		};

		const fetchMessageListData = async () => {
			// Lấy tất cả data dialogues
			const dialoguesDoc = await getDocs(
				collection(db, "users", userId, "dialogues")
			);

			const dialoguesData = dialoguesDoc.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));

			const listToUserId = dialoguesData.map((dialogue) => dialogue.toUser);

			// setMessengerList(listToUserId);
			setMessengerList(dialoguesData);
		};

		fetchUserData();
		fetchMessageListData();
	}, []);

	const doNothing = () => {
		// Empty function
	};

	// Search
	const showSearchInput = () => {
		setShowSearch(true);
	};

	const hideSearchInput = () => {
		setShowSearch(false);
	};

	// Right button

	const handleToggleAddRequest = () => {
		setShowAddRequest(!showAddRequest);
		setShowMessenger(false);
		setShowNotification(false);
		setShowAccount(false);
	};

	const handleToggleMessenger = () => {
		setShowMessenger(!showMessenger);
		setShowAddRequest(false);
		setShowNotification(false);
		setShowAccount(false);
	};

	const handleToggleNotification = () => {
		setShowNotification(!showNotification);
		setShowAddRequest(false);
		setShowMessenger(false);
		setShowAccount(false);
	};

	const handleToggleAccount = () => {
		setShowAccount(!showAccount);
		setShowAddRequest(false);
		setShowMessenger(false);
		setShowNotification(false);
	};

	const {logout}=useAuth()
	const navigate=useNavigate()
	const handleLogOut = async () => {
		await logout()
		navigate('/login')
	};

	return (
		<>
			<div className={cx("wrapper")}>
				{showSearch && <div className={cx("left-replace")}></div>}
				<div className={cx("left", showSearch && "fixed")}>
					<div className={cx("left-box")}>
						<Link className={cx("logo", showSearch && "hide")} to={"/"}>
							<img src="../src/assets/images/logo.png" />
						</Link>
						<div
							className={cx("back-search-icon", showSearch && "show")}
							onClick={hideSearchInput}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</div>
						<div
							className={cx("search", showSearch && "show")}
							onClick={showSearchInput}>
							<FontAwesomeIcon
								className={cx("search-icon")}
								icon={faMagnifyingGlass}
							/>
							<input
								className={cx("search-input")}
								type="text"
								placeholder="Tìm kiếm trên Facebook"
								onFocus={showSearchInput}
								onInput={showSearchInput}
							/>
						</div>
					</div>
					<div className={cx("search-result", showSearch && "show")}>
						<h3 className={cx("heading-search-result")}>Kết quả tìm kiếm</h3>
						<SearchItem
							image="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/292141833_1077755989828697_2574532424763211467_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=41a7af&_nc_ohc=E262NW9Yt6AAX8r6nI8&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfA_yi2ycxAbLUPm-Df_W62s9PQ7mz3TEMA8V4QtuXx0gg&oe=6487BBD0"
							title="Lâm Lê"
							type="Bạn bè"
						/>
						<SearchItem
							image="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/246193240_1759875244208913_1566225265399076554_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=41a7af&_nc_ohc=snIA0VpEKCcAX-JAlyw&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAXWUBhv5YlTr6qZaY8upm8K34iSJSX77wD7ZO4V-itsg&oe=6486D102"
							title="Tèo"
							type=""
						/>
					</div>
				</div>
				<div className={cx("middle")}>
					<TabPageItem
						contentTooltip="Trang chủ"
						isActive={activeTabHome}
						classNameForId="home"
						to="/"
						icon={<FontAwesomeIcon icon={faHouse} />}
					/>
					<TabPageItem
						contentTooltip="Watch"
						isActive={activeTabWatch}
						classNameForId="watch"
						to="/watch"
						icon={<FontAwesomeIcon icon={faCirclePlay} />}
					/>
					<TabPageItem
						contentTooltip="Marketplace"
						isActive={activeTabMarketplace}
						classNameForId="marketplace"
						to="/marketplace"
						icon={<FontAwesomeIcon icon={faStore} />}
					/>
					<TabPageItem
						contentTooltip="Nhóm"
						isActive={activeTabGroup}
						classNameForId="groups"
						to="/groups"
						icon={<FontAwesomeIcon icon={faUsersViewfinder} />}
					/>
					<TabPageItem
						contentTooltip="Trò chơi"
						isActive={activeTabGaming}
						classNameForId="gaming"
						to="/gaming"
						icon={<FontAwesomeIcon icon={faChessPawn} />}
					/>
					<TabPageItem
						contentTooltip="Xem thêm"
						isActive={activeTabBookmarks}
						classNameForId="bookmarks"
						to="/bookmarks"
						icon={<FontAwesomeIcon icon={faBars} />}
					/>
				</div>
				<div className={cx("right")}>
					<Tippy content="Lời mời kết bạn" placement="bottom" arrow="false">
						<div className={cx("btn-on-header-box")}>
							<button
								className={cx("btn-on-header", showAddRequest && "active")}
								id="btn-add-request"
								onClick={handleToggleAddRequest}>
								<FontAwesomeIcon icon={faPlus} />
							</button>
							<div className={cx("number-notification")}>
								{userData.friendRequestReceived.length !== 0 && (
									<span>{userData.friendRequestReceived.length}</span>
								)}
							</div>
						</div>
					</Tippy>
					<Tippy content="Messenger" placement="bottom" arrow="false">
						<div className={cx("btn-on-header-box")}>
							<button
								className={cx("btn-on-header", showMessenger && "active")}
								id="btn-messenger"
								onClick={handleToggleMessenger}>
								<FontAwesomeIcon icon={faFacebookMessenger} />
							</button>
							<div className={cx("number-notification")}>
								<span>3</span>
							</div>
						</div>
					</Tippy>
					<Tippy content="Thông báo" placement="bottom" arrow="false">
						<div className={cx("btn-on-header-box")}>
							<button
								className={cx("btn-on-header", showNotification && "active")}
								id="btn-notification"
								onClick={handleToggleNotification}>
								<FontAwesomeIcon icon={faBell} />
							</button>
							<div className={cx("number-notification")}>
								<span>3</span>
							</div>
						</div>
					</Tippy>
					<Tippy content="Tài khoản" placement="bottom" arrow="false">
						<div className={cx("btn-on-header-box")}>
							<button
								className={cx("btn-account")}
								id="btn-account"
								onClick={handleToggleAccount}>
								<img
									width={40}
									height={40}
									src={currentUser.profilePicture}
									alt="account"
								/>
							</button>
						</div>
					</Tippy>

					{/* modal add friend */}
					<div className={cx("modal-box", showAddRequest && "show")}>
						<h2 className={cx("heading")}>Lời mời kết bạn</h2>
						<div className={cx("friend-request-list")}>
							{userData.friendRequestReceived.map((friendId, index) => (
								<AddRequestItem key={index} id={friendId} />
							))}
						</div>
					</div>

					{/* Modal messenger */}
					<div className={cx("modal-box", showMessenger && "show")}>
						<div className={cx("heading__buttons")}>
							<h2 className={cx("heading")}>Chat</h2>
							<div className={cx("buttons-messenger")}>
								<Tippy content="Tùy chọn" placement="bottom-end" arrow="false">
									<button className={cx("button-messenger")}>
										<FontAwesomeIcon icon={faEllipsis} />
									</button>
								</Tippy>
								<Tippy
									content="Xem tất cả trong Messenger"
									placement="bottom-end"
									arrow="false">
									<button className={cx("button-messenger")}>
										<FontAwesomeIcon
											className={cx("icon-view-all")}
											icon={faArrowsUpDownLeftRight}
										/>
									</button>
								</Tippy>
								<Tippy
									content="Tạo phòng họp mặt mới"
									placement="bottom-end"
									arrow="false">
									<button className={cx("button-messenger")}>
										<FontAwesomeIcon icon={faVideo} />
									</button>
								</Tippy>
								<Tippy
									content="Tin nhắn mới"
									placement="bottom-end"
									arrow="false">
									<button className={cx("button-messenger")}>
										<FontAwesomeIcon icon={faPenToSquare} />
									</button>
								</Tippy>
							</div>
						</div>

						<div className={cx("search-on-messenger")}>
							<FontAwesomeIcon
								className={cx("search-icon")}
								icon={faMagnifyingGlass}
							/>
							<input
								className={cx("search-input-on-messenger")}
								type="text"
								placeholder="Tìm kiếm trên Facebook"
							/>
						</div>

						<div className={cx("messenger-list")}>
							{messengerList.map((dialogue: any, index: number) => (
								<MessengerItem
									key={index}
									userId={myUserId}
									toUserId={dialogue.toUser}
									dialogueId={dialogue.id}
								/>
							))}
							{/* {messengerList.map((id: string, index: number) => (
								<MessengerItem key={index} userId={myUserId} toUserId={id} />
							))} */}
							{/* <MessengerItem
								avatar="https://genshin.global/wp-content/uploads/2022/07/hu-tao-birthday-art-genshinimpact.jpg"
								name="Lê Thành Lâm"
								lastMessage="Alo 1 2 3 9 một hai ba bốn năm sáu bảy tám"
								status
								time="16 phút"
							/>
							<MessengerItem
								avatar="https://genshin.global/wp-content/uploads/2022/07/hu-tao-birthday-art-genshinimpact.jpg"
								name="Lê Thành Lâm"
								lastMessage="Alo 1 2 3 9 một hai ba bốn năm sáu bảy tám"
								status
								time="16 phút"
							/>
							<MessengerItem
								avatar="https://genshin.global/wp-content/uploads/2022/07/hu-tao-birthday-art-genshinimpact.jpg"
								name="Lê Thành Lâm"
								lastMessage="Alo 1 2 3 9 một hai ba bốn năm sáu bảy tám"
								status
								time="16 phút"
							/> */}
						</div>
					</div>

					{/* Modal notification */}
					<div className={cx("modal-box", showNotification && "show")}>
						<h2 className={cx("heading")}>Thông báo</h2>

						<div className={cx("notification-list")}>
							<NotificationItem
								avatar="https://thicc.mywaifulist.moe/waifus/kurumi-tokisaki-date-a-live/NYn6Lqxz26rRddNE7I7ESp6XHpK9tDIjkdesoO7y_thumbnail.jpg"
								type="comment"
								title=""
								name="Lê Thành Lâm"
								inPost="Group bla bla bla"
								time="15 giờ trước"
							/>
							<NotificationItem
								avatar="https://thicc.mywaifulist.moe/waifus/kurumi-tokisaki-date-a-live/NYn6Lqxz26rRddNE7I7ESp6XHpK9tDIjkdesoO7y_thumbnail.jpg"
								type="video"
								name="Tanjiro"
								inPost=""
								time="15 giờ trước"
								title="Dạy hơi thở của nước"
							/>
						</div>
					</div>

					{/* Modal account */}
					<div className={cx("modal-box", showAccount && "show")}>
						<div className={cx("my-account-box")}>
							<div className={cx("my-account")}>
								<Link to={"/me"} className={cx("account")}>
									<div className={cx("avatar")}>
										<img
											src={currentUser.profilePicture}
											alt=""
										/>
									</div>
									<span className={cx("name")}>{currentUser.name}</span>
								</Link>
								<Link to="/page" className={cx("logo-page")}>
									<img
										src="https://i.pinimg.com/280x280_RS/2e/c4/c5/2ec4c51f7930501e0721f8e5aecca45f.jpg"
										alt=""
									/>
								</Link>
							</div>

							<div className={cx("line")}></div>
							<div className={cx("view-all-account")}>Xem tất cả tài khoản</div>
						</div>

						<div className={cx("settings-list")}>
							<SettingItem
								icon={<FontAwesomeIcon icon={faGear} />}
								title={"Cài đặt & quyền riêng tư"}
								level2
								onClick={doNothing}
							/>
							<SettingItem
								icon={<FontAwesomeIcon icon={faCircleQuestion} />}
								title={"Trợ giúp & hỗ trợ"}
								level2
								onClick={doNothing}
							/>
							<SettingItem
								icon={<FontAwesomeIcon icon={faMoon} />}
								title={"Màn hình & trợ năng"}
								level2
								onClick={doNothing}
							/>
							<SettingItem
								icon={<FontAwesomeIcon icon={faCircleExclamation} />}
								title={"Đóng góp ý kiến"}
								level2={false}
								onClick={doNothing}
							/>
							<SettingItem
								icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
								title={"Đăng xuất"}
								level2={false}
								// handleLogOut
								onClick={handleLogOut}
							/>
						</div>

						<div className={cx("more-list")}>
							<span className={cx("more-item")} />
						</div>
					</div>
				</div>
			</div>
			<div className={cx("space")}></div>
		</>
	);
};

export default Header;
