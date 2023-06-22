import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '~/firebase-config'
import { useAuth } from "~/contexts/AuthContext";
const cx = classNames.bind(styles);


function Register({Close}:any) {
    // Validation
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailMsg, setEmailMsg] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passMsg, setPassMsg] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState(false);
    const [regMsg, setRegMsg] = useState('');
    const [reg, setReg] = useState(false);


    // Function Register
    const navigate=useNavigate()
    const {signup}=useAuth()
    const register=async ()=>{
        handleName(name)
        handleEmail(emailOrPhone)
        handlePassword(password)
        handleGender(gender)
        if(!nameError&&!emailError&&!passwordError&&!genderError) {
            try {
                await signup(emailOrPhone, password, name, gender, birthday);
              } catch (error:any) {
                if(error.message=='Firebase: Error (auth/invalid-email).') {
                    setRegMsg('Địa chỉ email không tồn tại!')
                    setReg(true)
                    return;
                }
                if(error.message=='Firebase: Error (auth/email-already-in-use).') {
                    setRegMsg('Địa chỉ email đã được đăng ký!')
                    setReg(true)
                    return;
                }
              }
              navigate('/');
        }
    }

    const handleName = (value:any) => {
        // const value=e.target.value
        setName(value);
        if (value === '') {
          setNameError(true);
        } else {
          setNameError(false);
        }
      };
    const handleEmail= (value:any) => {
        // const value=e.target.value;
        setEmailOrPhone(value)
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;
        if (value==='') {
            setEmailError(true)
            setEmailMsg('Vui lòng điền email!')
        } else
        if (value.match(emailRegex) || value.match(phoneRegex)) 
        {
            setEmailError(false)
        } else {
            setEmailError(true)
            setEmailMsg('Email không đúng định dạng!')
        }
        // Kiểm tra email có tồn tại?
    }
    const handlePassword=(value:any) => {
        // const value=e.target.value
        setPassword(value)
        if (value==='') {
            setPasswordError(true);
            setPassMsg('Vui lòng điền mật khẩu!')
        } else if (value.length<6) {
            setPasswordError(true);
            setPassMsg('Mật khẩu tối thiểu 6 ký tự!')
        } else {
            setPasswordError(false)
            setPassMsg('')
        }
    }
    const handleGender=(value:any) => {
        // const value=e.target.value
        setGender(value)
        if (value=='') {
            setGenderError(true)
        } else setGenderError(false)
    }
    return (
        <div id="successPopup" className={cx("popup")}>
        <div className={cx("popup-content")}>
            <div className={cx("popup-header")}>
                <img className={cx("reg-close-btn")} onClick={Close} src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" alt="" width="24" height="24" id="u_2_9_VY"></img>
                <div className={cx("reg-title")}>Đăng ký</div>
            <div className={cx("reg-sub-title")}>Nhanh chóng và dễ dàng</div>
            </div>  

            <div className={cx("reg-row")}>
                <input className={cx( "gray-bg","full-row")} onChange={(e)=>handleName(e.target.value)} type="text" placeholder="Họ và tên" />
                {nameError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}
            </div>
            <div className={cx("reg-row")}>
                <input className={cx("full-row", "gray-bg")} type="text" placeholder="Số di động hoặc email" 
                    onChange={(e)=>handleEmail(e.target.value)}/>
                    {emailError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}

            </div>
            <div className={cx("reg-row")}>   {emailError && <p className={cx('red')}>{emailMsg}</p>} </div>
            <div className={cx("reg-row")}>
                <input className={cx("full-row", "gray-bg")} type="password" placeholder="Mật khẩu mới" 
                    onChange={(e)=>handlePassword(e.target.value)}/>
                {passwordError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}
            </div>
            <div className={cx("reg-row")}>
                    {passwordError && <p className={cx('red')}>{passMsg}</p>} </div>
            <div className={cx("sub-row")}>
                   Sinh nhật <a  title="Cung cấp sinh nhật của bạn giúp đảm bảo bạn có được trải nghiệm Facebook phù hợp với độ tuổi của mình. Nếu bạn muốn thay đổi người nhìn thấy thông tin này, hãy đi tới phần Giới thiệu trên trang cá nhân của bạn. Để biết thêm chi tiết, vui lòng truy cập vào Chính sách quyền riêng tư của chúng tôi.">?</a>
                   
            </div>
            <div className={cx("reg-row")}>
                <input type="date" 
                className={cx("full-row")} 
                defaultValue={birthday.toISOString().substr(0, 10)}
                onChange={(e) => setBirthday(new Date(e.target.value))}/>
            </div>
            <div className={cx("sub-row", {'red':genderError})}>
                   Giới tính <a  title="Bạn có thể thay đổi ai nhìn thấy giới tính của mình trên trang cá nhân vào lúc khác. Chọn Tùy chỉnh nếu bạn thuộc giới tính khác hoặc không muốn tiết lộ.">?</a>
                   {genderError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}
            </div>
            <div className={cx("reg-row")}>
                    <div className={cx("radio-option")}>
                        <input type="radio" id="male" name="gender" value="Nam" onChange={(e)=>handleGender(e.target.value)} />
                        <label htmlFor="male">Nam</label>
                    </div>
                    <div className={cx("radio-option")}>
                        <input type="radio" id="female" name="gender" value="Nữ" onChange={(e)=>handleGender(e.target.value)} />
                        <label htmlFor="female">Nữ</label>
                    </div>
                    <div className={cx("radio-option")}>
                        <input type="radio" id="other" name="gender" value="Khác" onChange={(e)=>handleGender(e.target.value)} />
                        <label htmlFor="other">Khác</label>
                </div>
            </div>

            <div className={cx("reg-row")}>
                <p>Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. Tìm hiểu thêm.</p>
            </div>

            <div className={cx("reg-row")}>
                <p>Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</p>
                
            </div>
            {reg && <div className={cx('red', 'reg-row')}>{regMsg} </div>} 
            <div className={cx("reg-btn-container")}>
            <button className={cx("reg-btn")} onClick={register}>Đăng ký</button>
            </div>
        </div>
      </div>
    );
}

function Login() {
    // Validation
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUsernameError] = useState(false);
    const [userMsg, setUserMsg] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passMsg, setPassMsg] = useState('');
    const [showReg, setShowReg] = useState(false);
    const navigate=useNavigate()

    // Function Login
    const {handleLogin, currentUser}=useAuth();
    const signin=async (e:any)=>{
        e.preventDefault()
        validateEmail(emailOrPhone)
        validatePass(password)
        if(userError==false && passwordError==false) {
            try {
                await handleLogin(emailOrPhone, password)
            } catch (error:any) {
            console.log(error.message)
            if(error.message=='Firebase: Error (auth/invalid-email).')
            {
                setUserMsg('Người dùng không tồn tại')
                setUsernameError(true)
                return
            } else
            if(error.message=='Firebase: Error (auth/user-disabled).')
            {
                setUserMsg('Tài khoản đang bị khóa')
                setUsernameError(true)
                return;
            }
            }
            
        }
        console.log(currentUser)
        navigate('/')
    }
    
    const handleClose=()=>{
        setShowReg(false)
    }
    const validateEmail=(value:any)=>{
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;
        // const value= e.target.value;
        setEmailOrPhone(value);
        if (value.match(emailRegex) || value.match(phoneRegex)) {
            setUsernameError(false)
        } else {
          setUsernameError(true);
            setUserMsg('Vui lòng kiểm tra lại email, số điện thoại')
        }
    }
    const validatePass=(value:any)=>{
        // e.preventDefault()
        // const value= e.target.value;
        setPassword(value)
        if (value=='') {
            setPassMsg('Vui lòng nhập mật khẩu')
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }
    }

  return (
    <>
    <div className={cx("container")}>
        <div className={cx("login--left")}>
            <div className={cx("fb-logo-container")}>
                <img className={cx("fb-logo-login")} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"></img>
            </div>
            <div>
                <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
            </div>
        </div>
        <div className={cx("login--right")}>
                <form >
                    <div className={cx("username")}>
                    <input className={cx({"error":userError})}
                    type="text" 
                    placeholder="Email hoặc số điện thoại" 
                    value={emailOrPhone}
                    onChange={(e) => validateEmail(e.target.value)} />
                   {userError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}
                    {userError && <p className={cx('red')}>{userMsg}</p>}
                    </div>

                    <div className={cx("password")}>
                    <input className={cx({"error":passwordError})}
                    type="password" 
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e)=>{validatePass(e.target.value)}}
                    />
                    {passwordError && <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7uzGoFuHgaC.png" alt="" width="20" height="20"></img>}
                    {passwordError && <p className={cx('red')}>{passMsg}</p>}
                    </div>

                    <div>
                    <button onClick={signin} >Đăng nhập</button>
                    </div>
                    <div className={cx('forgot-password')}>
                    <a href="/forgot-password" >Quên mật khẩu</a>
                    </div>

                    <div className={cx('line')}></div>
                    <a className={cx('register-btn')} href="#"  onClick={()=>setShowReg(true)}>Tạo tài khoản mới</a>
                </form>
                <div className={cx('reg-page-msg')}>
                    <a href="#">Tạo trang</a>  dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
                </div>
        </div>
        
    </div>
    {
        showReg&&<Register Close={handleClose}></Register>
    } 
    </>
  )
}

export default Login