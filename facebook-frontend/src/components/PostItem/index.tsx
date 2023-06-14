import classNames from "classnames/bind";
import styles from "./PostItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEarthAmerica,
	faEllipsis,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const PostItem = () => {
	return (
		<div className={cx("post-item")}>
			<div className={cx("heading")}>
				<div className={cx("information")}>
					<Link to={"/"} className={cx("avatar")}>
						<img
							src="https://thicc.mywaifulist.moe/pending/waifus/lU2OloYyXrv1vmlHEOJH0UuC3ndk65yTGmBLMCJ9.png"
							alt=""
						/>
					</Link>

					<div className={cx("sub-info")}>
						<Link to={"/"} className={cx("title")}>
							AOW - Anime/Manga Fanpage
						</Link>

						<div className={cx("publish")}>
							<span className={cx("time")}>2 giờ</span>
							<span className={cx("dot")}></span>
							<span className={cx("range")}>
								<FontAwesomeIcon icon={faEarthAmerica} />
							</span>
						</div>
					</div>
				</div>

				<div className={cx("buttons")}>
					<div className={cx("item")}>
						<FontAwesomeIcon icon={faEllipsis} />
					</div>
					<div className={cx("item")}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
			</div>
			<div className={cx("content")}>
				<div className={cx("text")}>
					<p>Yakuza cũng ghê đấy nhưng bật vợ thì không dám</p>
				</div>
				<div className={cx("image")}>
					<img
						src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/352382571_611093260987224_63494924873696095_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_kPt-_Ilu_MAX-0eC3b&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDLRDiC0y-ZE-r9g7Iq5ojNMq-wxYh2rTr8cyFDuv2Zwg&oe=64899EC3"
						alt=""
					/>
				</div>
			</div>

			<div className={cx("number-interact")}>
				<div className={cx("number-react")}>
					<div className={cx("icon")}>
						<img
							src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
							alt=""
						/>
						<img
							src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
							alt=""
						/>
					</div>
					<span className={cx("count")}>3</span>
				</div>
				{/* Nếu count == 0 thì không hiện bình luận */}
				<div className={cx("commnet-share-count")}>
					<div className={cx("item")}>9 bình luận</div>
					<div className={cx("item")}>3 lượt chia sẻ</div>
				</div>
			</div>

			<div className={cx("button-interact")}>
				<div className={cx("item")}>
					<div className={cx("icon")}>
						<i className={cx("like-icon")}></i>
					</div>
					<span className={cx("title")}>Thích</span>
				</div>
				<div className={cx("item")}>
					<div className={cx("icon")}>
						<i className={cx("comment-icon")}></i>
					</div>
					<span className={cx("title")}>Bình luận</span>
				</div>
				<div className={cx("item")}>
					<div className={cx("icon")}>
						<i className={cx("share-icon")}></i>
					</div>
					<span className={cx("title")}>Chia sẻ</span>
				</div>
			</div>

			<div className={cx("list-comments")}>
				<div className={cx("your-comment-input")}>
					<div className={cx("avatar")}>
						<img
							src="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
							alt=""
						/>
					</div>
					<div className={cx("input-comment")}>
						<input type="text" placeholder="Hãy gửi bình luận của bạn..." />
					</div>
				</div>
				<div className={cx("comment-item")}>
					<div className={cx("avatar")}>
						<img
							src="https://pbs.twimg.com/profile_images/1595357378857390080/hLO03uqj_400x400.jpg"
							alt=""
						/>
					</div>
					<div className={cx("main-content-comment")}>
						<div>
							<div className={cx("comment-box")}>
								<Link to={"/"} className={cx("name-account")}>
									<span>Nguyen Van Hieu</span>
								</Link>
								<p className={cx("text-comment")}>Wibu never die</p>
							</div>
						</div>
						<div className={cx("button-comment-box")}>
							<div className={cx("item")}>Thích</div>
							<div className={cx("item")}>Phản hồi</div>
							<div className={cx("item")}>Chia sẻ</div>
							<div className={cx("time-comment")}>4 giờ</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
