import classNames from "classnames/bind";
import styles from "./Groups.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faMagnifyingGlass,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "~/components/Header";
import GroupItem from "~/components/GroupItem";
import { useState } from "react";
import GroupChatItem from "~/components/GroupChatItem";
import PostItemOnGroup from "~/components/PostItemOnGroup";

const cx = classNames.bind(styles);

const Groups = () => {
	const [showScrollbarSidebar, setShowScrollbarSidebar] = useState(false);
	const [showScrollbarGroupChat, setShowScrollbarGroupChat] = useState(false);
	const [showMoreGroupManage, setShowMoreGroupManage] = useState(false);
	const [showMoreGroupChatParicipate, setShowMoreGroupChatParicipate] =
		useState(false);

	return (
		<>
			<Header />
			<div className={cx("groups")}>
				<div className={cx("sidebar")}>
					<div className={cx("heading-sidebar")}>
						<div className={cx("title-icon")}>
							<h2>Nhóm</h2>
							<div className={cx("icon")}>
								<i></i>
							</div>
						</div>
						<div className={cx("search-box")}>
							<label htmlFor="search-input">
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</label>
							<input
								type="text"
								placeholder="Tìm kiếm nhóm"
								id="search-input"
							/>
						</div>
					</div>

					{/* <div className={cx("separator")}></div> */}

					<div
						className={cx(
							"main-sidebar",
							"scrollbar",
							showScrollbarSidebar && "hover-scrollbar"
						)}
						onMouseOver={() => {
							setShowScrollbarSidebar(true);
						}}
						onMouseOut={() => {
							setShowScrollbarSidebar(false);
						}}>
						<div className={cx("tab-box")}>
							<div className={cx("tab-item", "active")}>
								<div className={cx("icon")}>
									<i className={cx("newsfeed")}></i>
								</div>
								<div className={cx("title")}>Bảng Feed của bạn</div>
							</div>
							<div className={cx("tab-item")}>
								<div className={cx("icon")}>
									<i className={cx("explore")}></i>
								</div>
								<div className={cx("title")}>Khám phá</div>
							</div>
							<div className={cx("tab-item")}>
								<div className={cx("icon")}>
									<i className={cx("your-groups")}></i>
								</div>
								<div className={cx("title")}>Nhóm của bạn</div>
							</div>
						</div>

						<div className={cx("buttons-create")}>
							<button className={cx("button-create-new", "create-new-group")}>
								<div className={cx("icon")}>
									<FontAwesomeIcon icon={faPlus} />
								</div>
								<span className={cx("title")}>Tạo nhóm mới</span>
							</button>
							<button className={cx("button-create-new", "create-new-chat")}>
								<div className={cx("icon")}>
									<FontAwesomeIcon icon={faPlus} />
								</div>
								<span className={cx("title")}>Tạo đoạn chat mới</span>
							</button>
						</div>

						<div className={cx("separator")}></div>

						<div className={cx("group")}>
							<div className={cx("heading")}>
								<h2>Nhóm do bạn quản lý</h2>
							</div>
							<div className={cx("group-list")}>
								<GroupItem
									type="manage"
									avatar="https://sosanhgiakhoahoc.com/images/posts/2021/6/19/khoa-hoc-ky-nang-giao-tiep-01.jpg"
									nameGroup="202GT0501 - Nhập môn khoa học giao tiếp - Thầy Hà Văn Tú - Thứ 4 Ca 2"
									timeLastActity="2 năm"
								/>
								<GroupItem
									type="manage"
									avatar="https://caodangvietmyhanoi.edu.vn/upload_images/images/co-so-du-lieu.jpg"
									nameGroup="Lớp Cơ sở dữ liệu - Cô Lâm Hồng Thanh - Thứ 3 Ca 4"
									timeLastActity="1 năm"
								/>

								<GroupItem
									type="manage"
									avatar="https://www.tekshapers.com/uploads/blog_image/15362384091533896513blog-sco2.jpg"
									nameGroup="Lớp lập trình Web kinh doanh nâng cao - Thầy Trần Duy Thanh - Thứ 3 Ca 1 - HK1 2022-2023"
									timeLastActity="1 năm"
								/>

								{!showMoreGroupManage && (
									<button
										className={cx("show-more-btn")}
										onClick={() => {
											setShowMoreGroupManage(true);
										}}>
										<span>Xem thêm</span>
										<div className={cx("icon")}>
											<FontAwesomeIcon icon={faChevronDown} />
										</div>
									</button>
								)}

								{showMoreGroupManage && (
									<div>
										<GroupItem
											type="manage"
											avatar="https://cdn1.epicgames.com/offer/ada73cc2d68a46a18f529ebb87328dee/EGS_TeamfightTactics_RiotGames_S1_2560x1440-fb171fe1de90b5774a8d206f856e6c03"
											nameGroup="Group Teamfight Tactics UEL"
											timeLastActity="5 ngày"
										/>
										<GroupItem
											type="manage"
											avatar="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg"
											nameGroup="Group Anime/Manga/Wibu"
											timeLastActity="1 ngày"
										/>
									</div>
								)}
							</div>
						</div>

						<div className={cx("group")}>
							<div className={cx("heading")}>
								<h2>Nhóm bạn đã tham gia</h2>

								<span className={cx("view-all")}>Xem tất cả</span>
							</div>

							<div className={cx("group-list")}>
								<GroupItem
									type="participate"
									avatar="https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png"
									nameGroup="Hội Những Người Ở Ký Túc Xá Khu B - KTX ĐHQG TP.HCM"
									timeLastActity="30 phút"
								/>
								<GroupItem
									type="participate"
									avatar="https://c8.alamy.com/comp/2E56FHG/program-development-team-web-or-software-developers-programmer-and-coding-engineer-work-in-group-it-specialists-write-code-vector-concept-2E56FHG.jpg"
									nameGroup="Cộng đồng Front-end(HTML/CSS/JS) Việt Nam"
									timeLastActity="3 ngày"
								/>

								<GroupItem
									type="participate"
									avatar="https://hcmussh.edu.vn/img/news/AGOOOdARQ6EbGZdhXaM4jZBZ.png"
									nameGroup="Sinh viên KTX ĐHQG TP.HCM"
									timeLastActity="2 giờ"
								/>
								<GroupItem
									type="participate"
									avatar="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
									nameGroup="ReactJS Việt Nam"
									timeLastActity="3 tuần"
								/>
								<GroupItem
									type="participate"
									avatar="https://i.ytimg.com/vi/6jY2f6OkpBo/maxresdefault.jpg"
									nameGroup="Genshin Impact Việt Nam"
									timeLastActity="3 tuần"
								/>
								<GroupItem
									type="participate"
									avatar="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/337432035_1034976144130599_4611259714036704491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aXhR8jK1WvAAX_G3D7g&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDA7BSlYyO51w7h7R9qT_W8lc6nguKrZigFmOwmtdcSWQ&oe=648C5C11"
									nameGroup="ESC UEL - CLB THỂ THAO ĐIỆN TỬ TRƯỜNG ĐẠI HỌC KINH TẾ - LUẬT"
									timeLastActity="3 tuần"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Main content ----- middle */}

				<div className={cx("main")}>
					<div className={cx("main-content")}>
						<div className={cx("recently-activity")}>Hoạt động gần đây</div>

						<div className={cx("list-post-group")}>
							<PostItemOnGroup
								groupImg="https://nentang.vn/wp-content/uploads/2018/07/html-css-js-course-intro.jpeg"
								avatarImg="https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg"
								nameGroup="Cộng đồng Front-end(HTML/CSS/JS) Việt Nam"
								nameUser="Lê Thành Lâm"
								lastTime="3 giờ"
								text="Làm sao để giỏi Javascript?"
								contentImg="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190813181110/7-Tips-and-Tricks-to-Learn-Programming-Faster.png"
								numberReact={20}
								numberComment={6}
								numberShare={4}
								avatarComment="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
								nameComment="Phạm Lộc Ân"
								comment="Học, Học nữa, học mãi nhé"
							/>
							<PostItemOnGroup
								groupImg="https://tuyensinh.uel.edu.vn/wp-content/uploads/2023/05/Anh-chup-Man-hinh-2023-05-18-luc-15.12.14.png"
								avatarImg="https://cdn.donmai.us/original/ed/3a/ed3a631d77d27866d7619b35974c1884.jpg"
								nameGroup="Hội Những Người Ở Ký Túc Xá Khu B - KTX ĐHQG TP.HCM"
								nameUser="Lê Anh Tài"
								lastTime="4 giờ"
								text="Ai đó hướng dẫn mình cài lại win với ạ :((("
								contentImg="https://www.lifewire.com/thmb/n37izTvJC4wBEXI5C4R_U4CTanc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/installing-windows-11-message-0e66619fc78e4951a50b46ca34840279.png"
								numberReact={35}
								numberComment={8}
								numberShare={0}
								avatarComment="https://i.pinimg.com/originals/6e/b5/f5/6eb5f502bb8a5e2e7232801e07b61788.jpg"
								nameComment="Nguyen Van Hieu"
								comment="Ib mình hướng dẫn nhé"
							/>
							<PostItemOnGroup
								groupImg="https://images.contentstack.io/v3/assets/blt76b5e73bfd1451ea/blt7ce277951f779aa6/5e75289dcd562e2d656cbb84/tft-seo.jpg"
								avatarImg="https://i.pinimg.com/736x/43/e7/39/43e7392dccf77ac9124be1f7833eb78a.jpg"
								nameGroup="Cộng đồng Đấu trường chân lý VN"
								nameUser="Đỗ Văn Dương"
								lastTime="5 giờ"
								text="Lần đầu được lên thách đấu keke"
								contentImg="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/348375925_803081278000388_4053688437776353208_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_aid=0&_nc_ohc=o_oES231Iw8AX8hC0w8&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdQtarEKyoqG5bKrnie0Kqdvz_ftFKt4TIptEUYPxSZJng&oe=64AFE974"
								numberReact={100}
								numberComment={50}
								numberShare={20}
								avatarComment="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
								nameComment="Phạm Lộc Ân"
								comment="Quá dữ bạn ơi. Nhà vô địch có khác!"
							/>
						</div>
					</div>
					<div className={cx("chat-wrapper-box")}>
						<div
							className={cx(
								"chat-wrapper",
								"scrollbar",
								showScrollbarGroupChat && "hover-scrollbar"
							)}
							onMouseOver={() => {
								setShowScrollbarGroupChat(true);
							}}
							onMouseOut={() => {
								setShowScrollbarGroupChat(false);
							}}>
							<div className={cx("chat-box")}>
								<div className={cx("heading")}>
									<h3>Đoạn chat cộng đồng của bạn</h3>
									<span>Tạo</span>
								</div>

								<GroupChatItem
									groupImg="https://www.proedgeskills.com/wp-content/uploads/2018/01/ps-questions-answers-800-500.jpg"
									avatarImg="https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg"
									nameGroup="Hỏi đáp"
									message="Nam: Em có câu hỏi là muốn giỏi lập trình thì làm sao?"
									lastTime="22 phút"
								/>
							</div>

							<div className={cx("chat-box")}>
								<div className={cx("heading")}>
									<h3>Đoạn chat mà bạn nên tham gia</h3>
								</div>

								<GroupChatItem
									groupImg="https://blog-cdn.reedsy.com/directories/admin/featured_image/451/large_4625b203c3512b3bc3d945b7dbc688e9.jpg"
									avatarImg="https://i.pinimg.com/originals/b3/5d/77/b35d7780b7a811cf31556f341c9091a2.jpg"
									nameGroup="Đoạn chat chung"
									message=""
									lastTime=""
								/>
								<GroupChatItem
									groupImg="https://img.freepik.com/premium-vector/cute-house_57812-54.jpg"
									avatarImg="https://intomau.com/Content/upload/images/avatar-nam-qua-cute.jpg"
									nameGroup="KTX Khu B ĐHQG"
									message=""
									lastTime=""
								/>

								<GroupChatItem
									groupImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDQGWo6Z_KOrG7k_pPBCofdXaseBODYBOUg&usqp=CAU"
									avatarImg="https://en.ephoto360.com/uploads/effect-data/en.ephoto360.com/cb056d89d/Fuwa5e8d31dc1a6a6.jpg"
									nameGroup="Cộng đồng đấu trường chân lý VN"
									message=""
									lastTime=""
								/>
								<GroupChatItem
									groupImg="https://jobsgo.vn/blog/wp-content/uploads/2020/07/lap-trinh-web.jpg"
									avatarImg="https://scontent.xx.fbcdn.net/v/t1.15752-9/277076078_499491651728042_9149877119617622101_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=4de414&_nc_ohc=LrFm1N581-YAX8iA8dC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTc6wdFhybQnWkJXRBiL5OAAZfeyclvptWdlCCBMMvq5g&oe=64AFBA64"
									nameGroup="Hỏi đáp HTML/CSS/Javascript"
									message=""
									lastTime=""
								/>

								{!showMoreGroupChatParicipate && (
									<div className={cx("show-more-btn-box")}>
										<button
											className={cx("show-more-btn")}
											onClick={() => {
												setShowMoreGroupChatParicipate(true);
											}}>
											<span>Xem thêm</span>
											<div className={cx("icon")}>
												<FontAwesomeIcon icon={faChevronDown} />
											</div>
										</button>
									</div>
								)}

								{showMoreGroupChatParicipate && (
									<div>
										<GroupChatItem
											groupImg="https://flxt.tmsimg.com/assets/p10701949_b_v9_ah.jpg"
											avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/315529213_2459409034360578_4237906140311137260_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=9d-3WNh-EKIAX8z22v9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdThfJLD5sZctjuGKHvyF5QzJHqP4IhzKVTuSc38q-ACWA&oe=64AFB5B5"
											nameGroup="Group Anime/Manga VietNam"
											message=""
											lastTime=""
										/>
										<GroupChatItem
											groupImg="https://image.api.playstation.com/vulcan/img/rnd/202104/2507/Xdncb153Sz5UZMaF0X944NP5.png"
											avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/318825760_836373504315121_6790566556115654444_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=E4oElO8zHswAX-tcffD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdQAZOCdTCUYJ_RFl4D_-FZZ_CtjkaRaD-HfPzUp3dhaqA&oe=64AF87DB"
											nameGroup="Group chat Genshin Impact"
											message=""
											lastTime=""
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Groups;
