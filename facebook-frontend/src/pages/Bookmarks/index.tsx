import classNames from "classnames/bind";
import styles from "./Bookmarks.module.scss";
import Header from "../../components/Header";
import SidebarItem from "../../components/SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

const Bookmarks = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<>
			<Header />
			<div className={cx("wrapper")}>
				<div className={cx("item")}>
					<SidebarItem
						image="https://i.pinimg.com/originals/aa/2f/f8/aa2ff8dd08f43b410184e048fb7217b7.jpg"
						to="/"
						position=""
						title="Phạm Lộc Ân"
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
		</>
	);
};

export default Bookmarks;
