import './Home.css';
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link , useHistory } from 'react-router-dom';


const MyDashBoard = () =>{
    const history = useHistory();
    const[posts, setPosts] = useState([]);

    let userId = localStorage.getItem('userinfo');
    const[username, setUsername] = useState('');
    const[imgUrl, setImgUrl] = useState('');
    const[post, setPost] = useState('');

    function createNewPost(){
        let item = {userId, imgUrl, post};
        fetch('https://instagramklone-restapi.herokuapp.com/api/createpost',{
            method: 'POST',
            mode : 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }).then((response) => response.json())
        .then((responseJson)=>{
            if(responseJson.message ==='Post Created'){
                alert("Post Created");
            }else{
                alert(responseJson.message);
            }
        }).catch((error)=>{
            console.error(error);
        })
    }

    useEffect(() =>{
        let userId =  localStorage.getItem('userinfo');
        fetch('https://instagramklone-restapi.herokuapp.com/api/posts/'+userId,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response)=> response.json())
        .then((responseJson) =>{
            setPosts(responseJson.data);
        })
    },[]);

    function signOut(){
        //alert('test');
        localStorage.removeItem('userinfo');
        history.push('/login-page');
        
    }

    function LoadHome(){
        let userId =  localStorage.getItem('userinfo');
        fetch('https://instagramklone-restapi.herokuapp.com/api/posts/'+userId,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response)=> response.json())
        .then((responseJson) =>{
            setPosts(responseJson.data);
        });
        
       //alert('Load home!');
    }

    return (
        <div align="center">
                <table className="headerTable">
                    <tr>
                        <td>
                            <table border="0" width="100%">
                                <tr>
                                <td width="270px">
                                <p align="right"/></td>
                                <td width="108px">
                                <p align="right"/>
                                <img border="0" src="images/735145cfe0a4.png" width="103px" height="29px"/>
                                </td>
                                <td>&nbsp;</td>
                                <td width="150px">
                                <p align="center"/>
                                <button className="btn" onClick={LoadHome}><FontAwesomeIcon icon={faHome} size={'2x'} /></button>
                                </td>
                                <td width="135">
                                    <p align="center"/>
                                <button className="btnSignout" onClick={signOut}><FontAwesomeIcon icon={faSignOutAlt} size={'2x'} /></button>
                                </td>
                                <td width="128"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

                <div className="uploadImagesDiv">
                    <table className="postsTable">
                        <tr>
                            <td height="76">
                                <p align="left"/>
                                <textarea rows="4" name="S1" cols="73" onChange={(e) =>setPost(e.target.value)} className="textArea" />
                            </td>
                        </tr>
                        <tr>
                            <td height="34">
                                <p align="left"/>
                                <input type="file" name="file1" size="73" onChange={(e) =>setImgUrl(e.target.value)} className="fileUploaderClass"/>
                            </td>
                        </tr>
                        <tr>
                           <td height="34">
                               <p align="left"/>
                               <input type="submit" onClick={createNewPost} value="Post" name="submit" className="postButton" />
                            </td> 
                        </tr>
                    </table>
                </div>

                <div className="postsDiv">
                    {posts.map(post =>(
                        <table border="0" width="42%" height="600" className="feedsTable">
                        <tr>
                            <td height="3">
                                <p align="left"/>&nbsp; <b>{post.username}</b>
                            </td>
                        </tr>
                        <tr>
                            <td height="428">
                            <p align="center"/>
                            <img border="0" src={post.imgUrl} width="100%" height="100%" className="photoMain" />
                            </td>
                        </tr>
                        <tr>
                           <td>
                               <p align="left" />&nbsp; <b>{post.post}</b>
                            </td> 
                        </tr>
                        
                    </table>
                    ))}
                    <p align="left"/>&nbsp;
                </div>
        </div>
    );
};

export default MyDashBoard;