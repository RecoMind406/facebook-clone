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
								groupImg="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/240655429_4059163764195718_3652059374269714525_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=ifLq5af5ZHQAX_7ojcb&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCw9ZdWj-gv9qOTI3FKLlWRLH1Qex82RxMPwTYong3HmA&oe=648CA10E"
								avatarImg="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/292141833_1077755989828697_2574532424763211467_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GmiArIZb5h8AX-l5r7J&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAK-74IVDZrm5h6IuXBvzCTWTx2SXuwWdmg_tk-uqKZKA&oe=648DAA90"
								nameGroup="Cộng đồng Front-end(HTML/CSS/JS) Việt Nam"
								nameUser="Lê Thành Lâm"
								lastTime="3 giờ"
								text="Làm sao để giỏi Javascript?"
								contentImg="https://cdn.utaustinbootcamps.com/wp-content/uploads/sites/119/2020/06/best-ways-to-learn-javascript.jpg"
								numberReact={20}
								numberComment={6}
								numberShare={4}
								avatarComment="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
								nameComment="Phạm Lộc Ân"
								comment="Học, Học nữa, học mãi nhé"
							/>
							<PostItemOnGroup
								groupImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/324021659_881316676391636_4315698684564028924_n.jpg?stp=c41.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=70495d&_nc_ohc=_zLeA8jPdy0AX9GK2m0&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCX8I-en0_as9bHpVuVtPe6JZoiYc-Dhl1rzvBqpa1aDA&oe=648DBDBD"
								avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/329022926_1137315933620296_9186508021062131052_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sMX3u10Bf90AX-cECV_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCh6opvDivwkljTU0_7tQi72k1nRaqweLhEc_xBAnI63w&oe=648D5EAA"
								nameGroup="Hội Những Người Ở Ký Túc Xá Khu B - KTX ĐHQG TP.HCM"
								nameUser="Lê Anh Tài"
								lastTime="4 giờ"
								text="Ai đó hướng dẫn mình cài lại win với ạ :((("
								contentImg="https://www.lifewire.com/thmb/n37izTvJC4wBEXI5C4R_U4CTanc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/installing-windows-11-message-0e66619fc78e4951a50b46ca34840279.png"
								numberReact={35}
								numberComment={8}
								numberShare={0}
								avatarComment="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-1/101038986_621503152045457_5423503385049432064_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VXecAYgW4-YAX8R_y0g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfC7efz16I5Qk4u5MO4-7YmvIQu0qtEwjpQyO-IEr9ZNSg&oe=64B00F63"
								nameComment="Nguyen Van Hieu"
								comment="Ib mình hướng dẫn nhé"
							/>
							<PostItemOnGroup
								groupImg="https://images.contentstack.io/v3/assets/blt76b5e73bfd1451ea/blt7ce277951f779aa6/5e75289dcd562e2d656cbb84/tft-seo.jpg"
								avatarImg="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/327743759_1246913756232877_2613977120660156570_n.jpg?stp=cp1_dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8YwKHNtS2YUAX9a1g3R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDUItzDn0PwLZoRvAZchDhgSK-4oJPPs14ki_XjqLQuVA&oe=648E1F0D"
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
									groupImg="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/240655429_4059163764195718_3652059374269714525_n.jpg?stp=c55.0.100.100a_dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=ifLq5af5ZHQAX8-6cAR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBI30xnCIO_gQUwSeZte-aq15cEeOX3Bh4Db-9ZL8ag-g&oe=648CA10E"
									avatarImg="https://scontent.xx.fbcdn.net/v/t1.15752-9/277076078_499491651728042_9149877119617622101_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=4de414&_nc_ohc=LrFm1N581-YAX8iA8dC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSI6QJw99semKMQYr63kQdpHeC3aQ1QhgofPCgN3dw88g&oe=64AF8224"
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
									groupImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/302213215_101029319416738_1755519501692316224_n.jpg?stp=c81.0.100.100a_dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=JBuILDs5aLQAX_cQaN_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBT9OoWLWcjkaqS8a05yjYx37jc-9hp-nf_w57Rw8sEMA&oe=648DC01D"
									avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/318382060_1201398084116639_5981846120682883108_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=24OnL9cD77YAX9OAwwU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdSGTinudjHG85j1vTyCBRxJrhJiXE_3hM1uEna-AorxqA&oe=64AF7CC1"
									nameGroup="Đoạn chat chung"
									message=""
									lastTime=""
								/>
								<GroupChatItem
									groupImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/302213215_101029319416738_1755519501692316224_n.jpg?stp=c81.0.100.100a_dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=JBuILDs5aLQAX_cQaN_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBT9OoWLWcjkaqS8a05yjYx37jc-9hp-nf_w57Rw8sEMA&oe=648DC01D"
									avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/311070626_1205014643680530_1668259112361737223_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=KyquXrauGM0AX9SW-hS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdQ1uoNYimV8xOLmmn3Y2AqI2jZHcr18urg5SLvJjrDAsA&oe=64AF9AC7"
									nameGroup="KTX Khu B ĐHQG"
									message=""
									lastTime=""
								/>

								<GroupChatItem
									groupImg="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/313411629_8221746344563668_7243033429812439541_n.jpg?stp=c81.0.100.100a_dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=K6RIrO-2TfoAX9Z0WXT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDICMRH38lKH8rjlgfFrAC-xh_oQvCtbJWWXl41zr5UVg&oe=648CC898"
									avatarImg="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/318414793_1415690305629986_166982780996743533_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=QsP4ADnz42oAX_v62mB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTrIiKP4KPj1QWGO8_vYLxwoCE9keDRW8ci_HLyJJIE6A&oe=64AF83A3"
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
