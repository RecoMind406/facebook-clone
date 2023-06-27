import classNames from "classnames/bind";
import styles from "./Games.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {  useState } from "react";
import MultiItemSlider from "../../components/MultiItemSlider";
import Header from "../../components/Header";
const cx = classNames.bind(styles);

function Games() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);

    };
    const recentGames = [
        {
          url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
          title: "Classic Slot"
        },
        {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Bắn trứng khủng long Dynomite"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Cờ úp"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Differencies"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Connect Animal Puzzle"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Cờ úp"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Differencies"
          },
          {
            url: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/01/High-Stakes-on-the-Vegas-Strip_-Poker-Edition-600x600.jpg",
            title: "Connect Animal Puzzle"
          },
      ];
    const likableGames=[
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Krytoi Texas HoldEm Poker",
            type: "Card",
        },
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Ocean Riches Casino",
            type: "Casino",
        },
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Double Vegas",
            type: "Casino",
        },
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Golden City Casino -Free Slots",
            type: "Casino",
        },
         {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Holy Moly Casino - Free Slots",
            type: "Casino",
        },
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Double Vegas",
            type: "Casino",
        },
        {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Golden City Casino -Free Slots",
            type: "Casino",
        },
         {
            url: "https://img.freepik.com/premium-vector/poker-game-logo-design-vector_633300-514.jpg?w=2000",
            title: "Holy Moly Casino - Free Slots",
            type: "Casino",
        },
    ] 
    const allGames = [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H4asUJFO8ySayPJ-hYbUBN1tO7hA6p7rCQ&usqp=CAU",
          title: "Classic Slot"
        },
        {
            url: "https://wellgames.com/storage/uploads/icons/jpg/circus-words_1638457785.jpg",
            title: "Bắn trứng khủng long Dynomite"
        },
        {
            url: "https://imageio.forbes.com/specials-images/imageserve/68bf9a80d5b89bef8cdfa57dbf4f6410/960x960.jpg?height=400&width=400&fit=bounds",
            title: "Cờ úp"
        },
        {
            url: "https://gd1.alicdn.com/imgextra/i4/3233313538/TB2GCDsXr9GJuJjSZFNXXaIkXXa_!!3233313538.jpg_400x400.jpg_.webp",
            title: "Bubble Shooter Pro"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw4bsj31yaWbJoCwKILq_Jy3bh5KWPzcvbQ&usqp=CAU",
            title: "Differencies"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H4asUJFO8ySayPJ-hYbUBN1tO7hA6p7rCQ&usqp=CAU",
          title: "Classic Slot"
        },
        {
            url: "https://wellgames.com/storage/uploads/icons/jpg/circus-words_1638457785.jpg",
            title: "Bắn trứng khủng long Dynomite"
        },
        {
            url: "https://imageio.forbes.com/specials-images/imageserve/68bf9a80d5b89bef8cdfa57dbf4f6410/960x960.jpg?height=400&width=400&fit=bounds",
            title: "Cờ úp"
        },
        {
            url: "https://gd1.alicdn.com/imgextra/i4/3233313538/TB2GCDsXr9GJuJjSZFNXXaIkXXa_!!3233313538.jpg_400x400.jpg_.webp",
            title: "Bubble Shooter Pro"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw4bsj31yaWbJoCwKILq_Jy3bh5KWPzcvbQ&usqp=CAU",
            title: "Differencies"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H4asUJFO8ySayPJ-hYbUBN1tO7hA6p7rCQ&usqp=CAU",
          title: "Classic Slot"
        },
        {
            url: "https://wellgames.com/storage/uploads/icons/jpg/circus-words_1638457785.jpg",
            title: "Bắn trứng khủng long Dynomite"
        },
        {
            url: "https://imageio.forbes.com/specials-images/imageserve/68bf9a80d5b89bef8cdfa57dbf4f6410/960x960.jpg?height=400&width=400&fit=bounds",
            title: "Cờ úp"
        },
        {
            url: "https://gd1.alicdn.com/imgextra/i4/3233313538/TB2GCDsXr9GJuJjSZFNXXaIkXXa_!!3233313538.jpg_400x400.jpg_.webp",
            title: "Bubble Shooter Pro"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw4bsj31yaWbJoCwKILq_Jy3bh5KWPzcvbQ&usqp=CAU",
            title: "Differencies"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H4asUJFO8ySayPJ-hYbUBN1tO7hA6p7rCQ&usqp=CAU",
          title: "Classic Slot"
        },
        {
            url: "https://wellgames.com/storage/uploads/icons/jpg/circus-words_1638457785.jpg",
            title: "Bắn trứng khủng long Dynomite"
        },
        {
            url: "https://imageio.forbes.com/specials-images/imageserve/68bf9a80d5b89bef8cdfa57dbf4f6410/960x960.jpg?height=400&width=400&fit=bounds",
            title: "Cờ úp"
        },
        {
            url: "https://gd1.alicdn.com/imgextra/i4/3233313538/TB2GCDsXr9GJuJjSZFNXXaIkXXa_!!3233313538.jpg_400x400.jpg_.webp",
            title: "Bubble Shooter Pro"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw4bsj31yaWbJoCwKILq_Jy3bh5KWPzcvbQ&usqp=CAU",
            title: "Differencies"
        },  
      ];

  return (
    <>
    <Header></Header>
    <div className={cx('game-container')}>
        <div className={cx('side-bar', { 'hide-scrollbar': !isHovered })} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            <div className={cx('row', 'game' )}>
            <span>Chơi game</span> <div className={cx('gear')}><i style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/wQqdN-soZ27.png")',
                    backgroundPosition: '-88px -110px',
                    backgroundSize: '190px 168px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'
                }}></i></div> 
            </div>
            <div className={cx('row', 'searchbar' )}>
                <div className={cx('search-icon')}><FontAwesomeIcon icon={faMagnifyingGlass} /></div> <input type="text" placeholder="Tìm kiếm trong phần chơi game"/>
            </div>
            <div className={cx('row', 'activity' )}>
                <div>
                    <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/104218875_10150084225810255_9037238150764502013_n.png?stp=dst-jpg&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=9fffd1&amp;_nc_ohc=pRHgsNG8eicAX-5125C&amp;_nc_ht=scontent.fdad3-4.fna&amp;oh=00_AfAe2vzW15W2MYV_idG199MQqTKa87Y7rm_fnNssIhV-qA&amp;oe=64A78956&amp;dl=1" alt="" />
                </div>
                <div className={cx('activity-info' )}>
                    <div className={cx('activity-title' )}>HOẠT ĐỘNG TRONG GAME</div>
                    <div className={cx('name' )}>Lâm Lê</div>
                </div>
            </div>
                <hr />
            <div className={cx('play-game', 'row' )}>
                <div className={cx('play-game-icon-bg' )}>
                    <i className={cx('play-game-icon' )}></i>
                </div>
                <div>
                    <p>Chơi game</p>
                </div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/rwtd3u57sv_.png")',
                    backgroundPosition: '0px -192px',
                    backgroundSize: '26px 780px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'  }}></i>
                </div>
                <div className={cx('title' )}>Thông báo</div>
            </div>
            <hr />
            <div className={cx( 'my-game' )}> 
                <div>
                <span>Game của bạn</span> <a href="#">Xem tất cả</a>
                </div>
                <p>Hãy lưu game vào phần Game của bạn để tạo lối tắt tại đây.</p>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/StbI0micuZc.png")',
                        backgroundPosition: '0px -284px',
                        backgroundSize: '26px 1622px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}></i>
                </div>
                <div className={cx('title' )}>Lưu game</div>
            </div>
            <hr />
            <div className={cx( 'game-row' )}>Hạng mục</div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/rwtd3u57sv_.png")',
                    backgroundPosition: '0px -324px',
                    backgroundSize: '26px 780px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'
                }}></i>
                </div>
                <div className={cx('title' )}>Tất cả game</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/toy-gun_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Hành động</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/map_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Phiêu lưu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/joystick_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Arcade</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/sword_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Chiến đấu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/chess-piece_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Dùng bàn</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/map_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Phiêu lưu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/joystick_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Arcade</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/sword_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Chiến đấu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/chess-piece_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Dùng bàn</div>
            </div>
            
        </div>
        <div className={cx('tablet-sidebar')}>
                <span>Chơi game</span>
                <span>Hoạt động trong game</span>
                <span>Thông báo</span>
        </div>
        <div className={cx('content')}>
            <span className={cx('title')}>Đã chơi gần đây</span>
            <MultiItemSlider images={recentGames}></MultiItemSlider>
            <span className={cx('title')}>Game khác tương tự</span>
            <MultiItemSlider images={likableGames}></MultiItemSlider>
            <span className={cx('title')}>Game đáng chú ý</span>
            <div>
                <div className={cx("top-game")}>
                <img src='https://play-lh.googleusercontent.com/_MMbM5j6_c4XrEqd58FAiNqlEDywcz83WzubKn9tFwfn7mMVwmjM9lCkRwK5ou2NBthe'  />
                    <div>
                    <span>Circus Words</span>
                    <p>Word</p>
                    </div>
                </div>
            </div>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/DfLdGZVb2Cc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <span className={cx('title')}>Tất cả các game</span>
            <div className={cx('all-games')}>
            {allGames.map((game, index)=>(
                <div className={cx('game')}>
                    <img src={allGames[index].url} />
                    <div>
                    <span>{allGames[index].title}</span>
                    <p>Word</p>
                    </div>

                </div>
            )
            )}
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Games