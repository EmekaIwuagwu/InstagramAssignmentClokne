import './Home.css'
import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';

const MyRegister = () =>{

    const[mobileNum_email, setmobileNum_email] = useState('');
    const[fullname, setFullname] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    function register(){
        let item = {mobileNum_email, fullname, username , password};
        fetch('https://instagramklone-restapi.herokuapp.com/api/register',{
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
            <table width="60%" border="0">
            <div className="instagramlogo">
                <img src="images/43cc71bb1b43_2-removebg-preview.png"/>
            </div>
            <div className="register_page">
                <img border="0" align="center" src="images/images-removebg-preview.png" width="168" height="70" className="InstagramLogo" />
                <div className="usernameLogin">
                    <p align="center"><input type="text" name="T1" placeholder=" Mobile Number or email" size="33" onChange ={(e) =>setmobileNum_email(e.target.value)} className="inputBox" /></p>
                </div>
                <div className="usernameLogin">
                    <p align="center"><input type="text" name="T1" placeholder=" Fullname" size="33" onChange ={(e) =>setFullname(e.target.value)} className="inputBox" /></p>
                </div>
                <div className="usernameLogin">
                    <p align="center"><input type="text" name="T1" placeholder=" Username" size="33" onChange ={(e) =>setUsername(e.target.value)} className="inputBox" /></p>
                </div>
                <div className="usernameLogin">
                    <p align="center"><input type="password" name="T1" placeholder=" Password" size="33" onChange ={(e) =>setPassword(e.target.value)} className="inputBox" /></p>
                </div>
                <div className="usernameLogin">
                    <p align="center"><input onClick={register} type="submit" value="Register" name="B1" class="BtnLoginClass"/></p>
                </div>
                <div className="forgotPassword">
                    
                </div>
            </div>
                <div className="sign_account">
                <p align="center"><font face="Arial"/>Have account? <Link to="/">Sign In!</Link></p>
                </div>
                <div className="get_app">
                    <p align="center"><font face="Arial"/> Get The app</p>
                </div>
                <div className="RegPlayStoreAppStoreArea">
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

export default MyRegister;