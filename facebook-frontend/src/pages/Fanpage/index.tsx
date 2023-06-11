
import classNames from "classnames/bind";
import styles from "./Fanpage.module.scss";
import Header from "../../components/Header";
import Tippy from "@tippyjs/react";
import { useState } from "react";
const cx = classNames.bind(styles);
function Fanpage() {
    const [like, setLike]=useState(true)
    const [seeMore, setSeeMore]=useState(false)
    const [option, setOption]=useState(false)

    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tabIndex:number) => {
        setActiveTab(tabIndex);
    };

  return (
    <>
    <Header></Header>
    <div className={cx('fp-container')}>
        <div className={cx('sidebar')}>
            <div className={cx('header')}>
                <span>Quản lý trang</span>
                <div>
                    <i  style={{
                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/lqeqreVim_K.png")',
                            backgroundPosition: '0px -78px',
                            backgroundSize: '34px 266px',
                            width: '20px',
                            height: '20px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block',
                        }}></i>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('page-name')}>                    
                    <div className={cx('avatar')}>
                                <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=c6021c&_nc_ohc=TEAbyKW506AAX_Y_kjh&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCY3wJyHZvZ-91Exb5RSRstvOptbJv0Z5oz1kTFl4t2-g&oe=6487AFB0" alt="" />
                    </div>
                    <div className={cx('name')}>
                                <span> EC Food- Eat Clean Food</span>   
                    </div>
                </div>
                <div className={cx('separator')} role="separator" style={{ margin: '8px 16px' }}></div>
                <Tippy content="Truy cập bảng điều khiển" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/LrVTh7bEQHz.png" />
                        <span>Bảng điều khiển</span>
                        </div>
                    </div>
                </Tippy>
                <Tippy content="Truy cập Thông tin chi tiết" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8hHFMHDEV4o.png" />
                        <span>Thông tin chi tiết</span>
                        </div>
                    </div>
                </Tippy>
                <Tippy content="Quản lý quảng cáo và xem kết quả" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/K-U-n5F-eH5.png" />
                        <span>Trung tâm quảng cáo</span>
                        </div>
                    </div>
                </Tippy>
                <Tippy content="Tạo quảng cáo để nhắm mục tiêu cao nhất có thể" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/gluryC-P5uR.png" />
                        <span>Tạo quảng cáo</span>
                        </div>
                    </div>
                </Tippy>
                <Tippy content="Truy cập bảng Cài đặt trang" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/AcrCJ83TJqX.png" />
                        <span>Cài đặt</span>
                        </div>
                    </div>
                </Tippy>
                <span className={cx('title')}>
                    Công cụ khác
                </span>
                <Tippy content="Truy cập bảng Cài đặt trang" placement="right" interactive trigger="mouseenter" delay={1000} arrow={false} appendTo='parent'>
                    <div className={cx('row')}>
                        <div>
                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/FE67f4IbGqN.png" />
                        <span>Meta Business Suite</span>
                        </div>
                    </div>
                </Tippy>
            </div>
            <div className={cx('separator')} role="separator" style={{ margin: '8px 16px' }}></div>
            <div className={cx('footer')}>
                    <button><i style={{ backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/vd0hki--2pD.png')",
                                        backgroundPosition: '0 -1680px',
                                        backgroundSize: '26px 1798px',
                                        width: '16px',
                                        height: '16px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block', filter: 'invert(1)',marginRight:'8px'}}> </i>Quảng cáo</button>   
            </div>
        </div>
        <div className={cx('page')}>
            <div className={cx('header')}>
                <div className={cx('cover-image')} >
                    <img alt="" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282408551_109646491751357_2871583357188856221_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=e3f864&amp;_nc_ohc=OyqTwZioM5MAX8F6_DI&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfC6X4U5lm6wMDhgjXFI7cLHtxYrl9dntk0Ay2MmltdEWQ&amp;oe=6485E1FF"  />
                </div>
                <div className={cx('interaction')}>
                    <div className={cx('avatar')}>
                        <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=c6021c&_nc_ohc=TEAbyKW506AAX_Y_kjh&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCY3wJyHZvZ-91Exb5RSRstvOptbJv0Z5oz1kTFl4t2-g&oe=6487AFB0" alt="" />
                    </div>
                    <div className={cx('name')}>
                        <h1> EC Food- Eat Clean Food</h1>
                        <span>18 lượt thích • 22 người theo dõi</span>
                        <div className={cx('follower')}>
                            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/332306119_726847222413174_8648642676052731395_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GT9bq3hEm3EAX805zSe&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfA-XKGkugdPlRNOERckEA3mhej134DwJLOQEyNRxRJoyg&oe=648754B8" alt="" />
                        </div>
                    </div>
                    <div className={cx('interact-btn')}>
                        <button onClick={()=>{setLike(!like)}}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/9ZZIzT3-JPR.png" alt="" height="16" width="16"></img> {like&&<>Đã thích</>} {!like&&<>Thích trang</>}</button>
                        <button className={cx('message')}><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1z-5F6qDswz.png" alt="" height="16" width="16"></img> Nhắn tin</button>
                        <button><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/qxDZ_oUxwuU.png" alt="" height="16" width="16"></img> Tìm kiếm</button>
                    </div>
                </div>
                <div className={cx('tab-container')}>
                <div className={cx('tabs')}>
                    <div className={cx('tab', `${activeTab === 1 ? 'active' : ''}`)} onClick={() => changeTab(1)}>Bài viết</div>
                    <div className={cx('tab', `${activeTab === 2 ? 'active' : ''}`)} onClick={() => changeTab(2)}>Giới thiệu</div>
                    <div className={cx('tab', `${activeTab === 3 ? 'active' : ''}`)} onClick={() => changeTab(3)}>Lượt nhắc</div>
                    <div className={cx('tab', `${activeTab === 4 ? 'active' : ''}`)} onClick={() => changeTab(4)}>Đánh giá</div>
                    <div className={cx('tab', `${activeTab === 5 ? 'active' : ''}`)} onClick={() => changeTab(5)}>Người theo dõi</div>
                    <div className={cx('tab', `${activeTab === 6 ? 'active' : ''}`)} onClick={() => changeTab(6)}>Ảnh</div>
                    <div className={cx('tab')} onClick={() => { setSeeMore(!seeMore)}}>Xem thêm <svg fill="#999" viewBox="0 0 20 20" width="1em" height="1em" ><path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path></svg> 
                    {seeMore &&
                       <div className={cx('tab7')}>
                            <div>Video</div>
                            <div>Trực tiếp</div>
                            <div>Âm nhạc</div>
                            <div>Câu hỏi</div>
                            <div>Checkin</div>
                            <div>Thể Thao</div>
                            <div>Phim</div>
                            <div>Chương trình TV</div>
                        </div>
                    }</div>
                </div>
                <div className={cx('tabs', 'more')} onClick={()=>{setOption(!option)}}><svg fill="#050505" viewBox="0 0 24 24" width="1em" height="1em" ><circle cx="12" cy="12" r="2.5"></circle><circle cx="19.5" cy="12" r="2.5"></circle><circle cx="4.5" cy="12" r="2.5"></circle></svg>
                    {option &&
                       <div className={cx('tab7')}>
                            <div><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/WKkPKZz6y-9.png" alt="" height="20" width="20"></img> Tìm hỗ trợ hoặc báo cáo</div>
                            <div><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/4jlthrAbQvA.png" alt="" height="20" width="20"></img> Chặn</div>
                            <div><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/jNLv1VgfVNc.png" alt="" height="20" width="20"></img> Mời bạn bè</div>
                            <div><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/yxy6r9iNLiw.png" alt="" height="20" width="20"></img>Đang theo dõi</div>
                        </div>
                    }
                </div>
                </div>
            </div>
            <div className={cx('body')}>
                {activeTab===1 &&
                <div className={cx(`tab${activeTab}`)}>
                    <div className={cx('info')}>
                        <div className={cx('getting-started')}>
                            <img src="https://www.facebook.com/images/profile_plus/Professional-Profiles-Transition-and-Onboarding/Page-Admin/WWW/Professional-Profiles-Page-Admin-WWW-2x.png" alt="" />
                            <span className={cx('bold')}> Xem lại các thay đổi với Trang</span>
                            <span>EC Food- Eat Clean Food đã được cập nhật thành trải nghiệm Trang mới. Chúng tôi có thể giúp bạn xem lại những chi tiết thay đổi.</span>
                            <button>Bắt đầu</button>
                        </div>
                        <div className={cx('introduction')}>
                            <span className={cx('title')}>Giới thiệu</span>
                            <p>EC Food phục vụ cho những khách hàng không có thời gian để nấu ăn như sinh viên</p>
                            <div><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/XLGk7XTX1NS.png" alt="" height="20" width="20"></img> <span className={cx('bold')}>Trang </span> · Nhà hàng Thực phẩm Sức khỏe </div>
                            <div>
                            <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/V632KGZoHho.png" alt="" height="20" width="20"></img>99 Trần Hưng Đạo, Quận 7, Ho Chi Minh City, Vietnam
                            </div>
                            <div>
                            <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/DzX7o-tOmJ6.png" alt="" height="20" width="20"></img><a href="212is21101group09.myharavan.com">212is21101group09.myharavan.com</a> 
                            </div>
                        </div>
                        <div className={cx('image-collection')}>
                            <div className={cx('collection-title')}>
                                <span className={cx('title')}>Ảnh</span> 
                                <span className={cx('see-all')}>Xem tất cả ảnh</span> 
                            </div>
                            <div className={cx('collection')}>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282408551_109646491751357_2871583357188856221_n.jpg?stp=c209.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=OAqb_RuBMu8AX_CFoC_&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfCx9lpqobFi9mTJb_P8x2c76NCBMCSkA00UL2hd5RQVUw&amp;oe=6489D67F"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=dst-jpg_p240x240&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=0c64ff&amp;_nc_ohc=TEAbyKW506AAX9ZpjMq&amp;_nc_ht=scontent.fdad3-1.fna&amp;oh=00_AfAHr_CDHBkhAyh_IUFQJJIAUE_OQB0G1iltNomdMGHc2A&amp;oe=6489A9F0"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/283635791_112819554767384_6766493790448720789_n.jpg?stp=c138.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=uEAuRG2HNU4AX__KWb6&amp;_nc_ht=scontent.fdad3-4.fna&amp;oh=00_AfBmY7Auod_67w9BbFf1_BH-dZwyH6EOiqsN-f0i_-P7BA&amp;oe=6489FC47"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/283233817_112769044772435_8562423452614916189_n.jpg?stp=c46.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=aCTzS6l0S_4AX8yHDIP&amp;_nc_oc=AQmQy2al4dn_lGqj0WmpUwLS90FEQqxDiTD6LNle_SFEwvvMdqaWdi5jYiNbEQEez9SmaX9LmR54fzUZyMWWUzXS&amp;_nc_ht=scontent.fsgn5-3.fna&amp;oh=00_AfCTVzqtoN_pEAQDpifRO8xVjSwmH8M9Fsy0BkqbMzrcqQ&amp;oe=6489D547"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/282558468_109663895082950_4692660605891502513_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=jl3R--Gce5UAX9bb__j&amp;_nc_ht=scontent.fdad3-1.fna&amp;oh=00_AfD6Qidx_dZPQYVyrF0gJ56QT20RjaEWfi7mAxiNbhFCDA&amp;oe=64897BE8"></img>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/282585865_109663898416283_470295909958162577_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=Qy0j3Wi1HRUAX_jLjeb&amp;_nc_ht=scontent.fsgn5-8.fna&amp;oh=00_AfBNRpk5erfcM8pJtOZisL_JCpHWeipgBv4Y8b7FEqVtdw&amp;oe=6489AFF1"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282545326_109663875082952_549479470078948190_n.jpg?stp=dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=kquO-TQj-tQAX--k5cE&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfAfkaUzeMQKwRpYX6ZtY2Ln8-sq5NUObHRpPqW6d-K8Zg&amp;oe=648A5B46"></img>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/282585865_109663898416283_470295909958162577_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=Qy0j3Wi1HRUAX_jLjeb&amp;_nc_ht=scontent.fsgn5-8.fna&amp;oh=00_AfBNRpk5erfcM8pJtOZisL_JCpHWeipgBv4Y8b7FEqVtdw&amp;oe=6489AFF1"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282545326_109663875082952_549479470078948190_n.jpg?stp=dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=kquO-TQj-tQAX--k5cE&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfAfkaUzeMQKwRpYX6ZtY2Ln8-sq5NUObHRpPqW6d-K8Zg&amp;oe=648A5B46"></img>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                       <div className={cx('remarkable')}>
                            <div>
                            <span className={cx('title')}>Đáng chú ý</span> 
                            </div>
                            <div className={cx('post')}>
                                <div className={cx('name')}>
                                    <img height="100%" width="100%" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=c6021c&_nc_ohc=TEAbyKW506AAX8jWCLi&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDLTSUldJOqwaPVmDYKFJPIpy3pIsnWtT5NPTNBv1D_Uw&oe=6489A9F0" style={{height: '40px', width: '40px'}}></img>
                                    <div>

                                    <span>EC Food- Eat Clean Food</span>
                                    <time>22 tháng 5 năm 2022
                                    <svg fill="#999" viewBox="0 0 16 16" width="1em" height="1em"><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                    </time>
                                    </div>
                                </div>
                                <span className={cx('description')}>#giveawaywithECFood #ECFood [GIVE AWAY] THAM GIA NGAY - NHẬN VOUCHER HẤP DẪN TẠI EC FOOD ...</span>
                                <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/283233817_112769044772435_8562423452614916189_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=aCTzS6l0S_4AX8yHDIP&_nc_oc=AQmQy2al4dn_lGqj0WmpUwLS90FEQqxDiTD6LNle_SFEwvvMdqaWdi5jYiNbEQEez9SmaX9LmR54fzUZyMWWUzXS&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAMfWIge0wurPM__cxDKqUsCe5u-c4kiSZPVyCVd83Mqw&oe=6489D547" alt="" />
                            </div>
                       </div>
                       <div className={cx('filter')}>
                            <span className={cx('title')}>Bài viết</span> 
                            <button><i style={{
                                backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/G6Khcdck9ku.png")`,
                                backgroundPosition: '0px -140px',
                                backgroundSize: '34px 266px',
                                width: '16px',
                                height: '16px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}></i> Bộ lọc</button>
                       </div>
                       <div className={cx('status')}>
                                <div className={cx('name')}>
                                    <img height="100%" width="100%" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=c6021c&_nc_ohc=TEAbyKW506AAX8jWCLi&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDLTSUldJOqwaPVmDYKFJPIpy3pIsnWtT5NPTNBv1D_Uw&oe=6489A9F0" style={{height: '40px', width: '40px'}}></img>
                                    <div>

                                    <span>EC Food- Eat Clean Food</span>
                                    <time>22 tháng 5 năm 2022
                                    <svg fill="#999" viewBox="0 0 16 16" width="1em" height="1em"><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                    </time>
                                    </div>
                                </div>
                                <span className={cx('description')}>#giveawaywithECFood #ECFood [GIVE AWAY] THAM GIA NGAY - NHẬN VOUCHER HẤP DẪN TẠI EC FOOD ...</span>
                                <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/283233817_112769044772435_8562423452614916189_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=aCTzS6l0S_4AX8yHDIP&_nc_oc=AQmQy2al4dn_lGqj0WmpUwLS90FEQqxDiTD6LNle_SFEwvvMdqaWdi5jYiNbEQEez9SmaX9LmR54fzUZyMWWUzXS&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAMfWIge0wurPM__cxDKqUsCe5u-c4kiSZPVyCVd83Mqw&oe=6489D547" alt="" />
                                <div className={cx('status-react')}>
                                    <img  height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.1%25' height='133.3%25' x='-5.6%25' y='-16.7%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0980392157 0 0 0 0 0.101960784 0 0 0 0 0.2 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cfilter id='h' width='204%25' height='927.2%25' x='-52.1%25' y='-333.3%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.803921569 0 0 0 0 0.388235294 0 0 0 0 0.00392156863 0 0 0 0.14567854 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z'/%3e%3cpath id='i' d='M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01.022.51.344.344 0 01-.496.024c-.275-.259-.656-.4-.992-.369a.8.8 0 00-.59.331.346.346 0 01-.491.068.368.368 0 01-.067-.507 1.49 1.49 0 011.085-.612zm-7.665.555a2.042 2.042 0 011.372-.562 1.491 1.491 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.801.801 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.643 10.888C5.485 12.733 6.369 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.481 4.567c.186.042.29.252.232.469-.057.218-.254.36-.44.318-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317zm6.658.063c.206.047.322.28.258.52-.064.243-.282.4-.489.354-.206-.046-.322-.28-.258-.521.063-.242.282-.4.49-.353z'/%3e%3cuse fill='black' filter='url(%23h)' xlink:href='%23i'/%3e%3cuse fill='url(%23j)' xlink:href='%23i'/%3e%3c/g%3e%3c/svg%3e" width="18"></img> Lâm, Ân, Ngọc và những người khác
                                    
                                </div>
                                <div className={cx('react-btn')}>
                                    <button><i style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/yFwwUPU4oTd.png")',
                                            backgroundPosition: '0px -406px',
                                            backgroundSize: '26px 970px',
                                            width: '18px',
                                            height: '18px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}></i> Thích</button>
                                    <button><i style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/yFwwUPU4oTd.png")',
                                            backgroundPosition: '0px -366px',
                                            backgroundSize: '26px 970px',
                                            width: '18px',
                                            height: '18px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}></i>Bình luận</button>
                                    <button><i style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/yFwwUPU4oTd.png")',
                                            backgroundPosition: '0px -426px',
                                            backgroundSize: '26px 970px',
                                            width: '18px',
                                            height: '18px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}></i>Chia sẻ</button>
                                </div>
                                <div className={cx('comment')}>
                                        <div className={cx('user')}>
                                        <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/292141833_1077755989828697_2574532424763211467_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JbP3g7C2c1MAX9KsEZm&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAEQtpeKYW3z-3YjqNKj2NPni4BYbaBWhkOEuDO6OKy4w&oe=6489B610" alt="" />
                                        </div> 
                                        <input type="text" placeholder="Viết bình luận" />
                                </div>
                       </div>
                       <div className={cx('no-post')}>
                            <img  height="112" src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg" width="112" alt=""></img>
                            <div>Đã hết bài viết</div>
                       </div>
                    </div>
                </div>
                }
                {activeTab===2 &&
                <div className={cx(`tab${activeTab}`)}>
                    <div className={cx('introduction')}>
                        <div className={cx('left')}>
                            <span className={cx('title')}>Giới thiệu</span> 
                        </div>
                        <div className={cx('right')}>
                            <span className={cx('title')}>Hạng mục</span> 
                            <p><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/xysEq_p-Grw.png" alt="" height="24" width="24"></img> Nhà hàng Thực phẩm Sức khỏe</p>
                            <span className={cx('title')}>Thông tin liên hệ</span> 
                            <p>
                                <div>
                                <div
                                    style={{
                                        backgroundImage: 'url("https://external.fdad3-1.fna.fbcdn.net/static_map.php?v=2044&theme=default&ccb=4-4&size=544x250&language=vi_VN&scale=2&zoom=12&center=10.76759%2C106.69519&marker_list[0]=10.76759%2C106.69519&_nc_client_id=profile&_nc_client_caller=CometStaticMap.react")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 100%',
                                        height: '250px',
                                        width: '544px',
                                    }}
                                ></div>
                                <p><img  src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/HNzy6p26p_d.png" alt="" height="24" width="24"></img> 99 Trần Hưng Đạo, Quận 7, Ho Chi Minh City, Vietnam</p>
                                </div>
                            </p>
                            <span className={cx('title')}>Các trang web và liên kết xã hội</span> 
                            <p>
                                <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/Tfkd21nE_8j.png" alt="" height="24" width="24"/>
                                <a href="https://212is21101group09.myharavan.com/">https://212is21101group09.myharavan.com/</a>
                            </p>
                            <span className={cx('title')}>Thông tin cơ bản</span> 
                            <p>
                            <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBE8J3Y1CJN.png" alt="" height="24" width="24"></img>Chưa xếp hạng (0 lượt đánh giá)
                            </p>
                            <p>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/EzO5YKuJljX.png" alt="" height="24" width="24"/>Đang đóng cửa
                            </p>
                        </div>
                    </div>
                
                </div>
                }
                 {activeTab===3 &&
                <div className={cx(`tab${activeTab}`)}>
                        <div className={cx('no-post')}>
                            <img  height="112" src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg" width="112" alt=""></img>
                            <div>Không có lượt nhắc nào</div>
                       </div>
                </div>
                }
                {activeTab===4 &&
                <div className={cx(`tab${activeTab}`)}>
                        <div className={cx('no-post')}>
                            <img  height="112" src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg" width="112" alt=""></img>
                            <div>Chưa có lượt đánh giá</div>
                       </div>
                </div>
                }
                {activeTab===5 &&
                <div className={cx(`tab${activeTab}`)}>
                        <div className={cx('no-post')}>
                            <img  height="112" src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg" width="112" alt=""></img>
                            <div>Danh sách người theo dõi của EC Food- Eat Clean Food hiện không hiển thị.</div>
                       </div>
                </div>
                }
                {activeTab===6 &&
                <div className={cx(`tab${activeTab}`)}>
                         <div className={cx('image-collection')}>
                            <div className={cx('collection-title')}>
                                <span className={cx('title')}>Ảnh</span> 
                                <span className={cx('see-all')}>Xem tất cả ảnh</span> 
                            </div>
                            <div className={cx('collection')}>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282408551_109646491751357_2871583357188856221_n.jpg?stp=c209.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=OAqb_RuBMu8AX_CFoC_&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfCx9lpqobFi9mTJb_P8x2c76NCBMCSkA00UL2hd5RQVUw&amp;oe=6489D67F"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/282291865_109645941751412_4477401935907108263_n.jpg?stp=dst-jpg_p240x240&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=0c64ff&amp;_nc_ohc=TEAbyKW506AAX9ZpjMq&amp;_nc_ht=scontent.fdad3-1.fna&amp;oh=00_AfAHr_CDHBkhAyh_IUFQJJIAUE_OQB0G1iltNomdMGHc2A&amp;oe=6489A9F0"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/283635791_112819554767384_6766493790448720789_n.jpg?stp=c138.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=uEAuRG2HNU4AX__KWb6&amp;_nc_ht=scontent.fdad3-4.fna&amp;oh=00_AfBmY7Auod_67w9BbFf1_BH-dZwyH6EOiqsN-f0i_-P7BA&amp;oe=6489FC47"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/283233817_112769044772435_8562423452614916189_n.jpg?stp=c46.0.160.160a_dst-jpg_p160x160&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=aCTzS6l0S_4AX8yHDIP&amp;_nc_oc=AQmQy2al4dn_lGqj0WmpUwLS90FEQqxDiTD6LNle_SFEwvvMdqaWdi5jYiNbEQEez9SmaX9LmR54fzUZyMWWUzXS&amp;_nc_ht=scontent.fsgn5-3.fna&amp;oh=00_AfCTVzqtoN_pEAQDpifRO8xVjSwmH8M9Fsy0BkqbMzrcqQ&amp;oe=6489D547"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/282558468_109663895082950_4692660605891502513_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=jl3R--Gce5UAX9bb__j&amp;_nc_ht=scontent.fdad3-1.fna&amp;oh=00_AfD6Qidx_dZPQYVyrF0gJ56QT20RjaEWfi7mAxiNbhFCDA&amp;oe=64897BE8"></img>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/282585865_109663898416283_470295909958162577_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=Qy0j3Wi1HRUAX_jLjeb&amp;_nc_ht=scontent.fsgn5-8.fna&amp;oh=00_AfBNRpk5erfcM8pJtOZisL_JCpHWeipgBv4Y8b7FEqVtdw&amp;oe=6489AFF1"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282545326_109663875082952_549479470078948190_n.jpg?stp=dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=kquO-TQj-tQAX--k5cE&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfAfkaUzeMQKwRpYX6ZtY2Ln8-sq5NUObHRpPqW6d-K8Zg&amp;oe=648A5B46"></img>
                            <img alt="" referrerPolicy="origin-when-cross-origin" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/282585865_109663898416283_470295909958162577_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=Qy0j3Wi1HRUAX_jLjeb&amp;_nc_ht=scontent.fsgn5-8.fna&amp;oh=00_AfBNRpk5erfcM8pJtOZisL_JCpHWeipgBv4Y8b7FEqVtdw&amp;oe=6489AFF1"></img>
                            <img alt=""  referrerPolicy="origin-when-cross-origin" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/282545326_109663875082952_549479470078948190_n.jpg?stp=dst-jpg_p160x160&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=574b62&amp;_nc_ohc=kquO-TQj-tQAX--k5cE&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfAfkaUzeMQKwRpYX6ZtY2Ln8-sq5NUObHRpPqW6d-K8Zg&amp;oe=648A5B46"></img>
                            </div>
                        </div>
                </div>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Fanpage