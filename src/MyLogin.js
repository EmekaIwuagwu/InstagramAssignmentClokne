    import './Home.css'
    import React, { useState } from 'react';
    import { Link , useHistory } from 'react-router-dom';

    const MyLogin = () =>{
        const[username, setUsername] = useState('');
        const[password, setPassword] = useState('');
        const history = useHistory();

        function login(){
                if(username ==''){
                    alert('Username cannot be empty');
                    return false;
                }

                if(password ==''){
                    alert('Password cannot be empty');
                    return false;
                }
                let item = {username , password};
                fetch('https://m2d3srv.herokuapp.com/api/login',{
                    method : 'POST',
                    mode : 'cors',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(item)
                }).then((response) => response.json())
                .then((responseJson) =>{
                    if(responseJson.message === 'OK'){
                        localStorage.setItem('userinfo', username);
                        history.push('/dashboard');
                    }else{
                        alert(responseJson.message);
                    }
                }).catch((error) =>{
                    console.error(error);
                })
        }

        return (
            <div align="center">
                <table width="61%" border="0">
                <div className="instagramlogo">
                    <img src="images/43cc71bb1b43_2-removebg-preview.png"/>
                </div>
                <div className="login_page">
                    <img border="0" align="center" src="images/images-removebg-preview.png" width="168" height="70" className="InstagramLogo" />
                    <div className="usernameLogin">
                        <p align="center"><input type="text" name="T1" placeholder="  Phone number, username or email" size="33" onChange ={(e) =>setUsername(e.target.value)} className="inputBox" required /></p>
                    </div>
                    <div className="usernameLogin">
                        <p align="center"><input type="password" name="T1" placeholder="  Password" size="33" onChange ={(e) =>setPassword(e.target.value)} className="inputBox"  required/></p>
                    </div>
                    <div className="usernameLogin">
                        <p align="center"><input onClick={login} type="submit" value="Login" name="B1" className="BtnLoginClass"/></p>
                    </div>
                    <div className="forgotPassword">
                        <p align="center"><Link to="#">Forgot Password?</Link><font face="Arial"/></p>
                    </div>
                </div>
                    <div className="No_account">
                    <p align="center"><font face="Arial"/>No Account? <Link to="/register">Register!</Link></p>
                    </div>
                    <div className="get_app">
                        <p align="center"><font face="Arial"/> Get The app</p>
                    </div>
                    <div className="PlayStoreAppStoreArea">
                        <td width="204">
                        <p align="center">
                        &nbsp;<input type="image" src="images/appstore.png" width="169" height="51" align="right"/>
                        </p>
                        </td>
                        <td width="204">
                        <p align="center">
                        &nbsp;<input type="image" src="images/googlePlay.png" width="169" height="51" align="left"/>
                        </p>
                        </td>
                    </div>
                </table>
            </div>
        );
    };

    export default MyLogin;