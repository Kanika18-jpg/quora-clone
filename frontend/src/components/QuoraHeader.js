import React , { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import logo from './ques.gif';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "./css/QuoraHeader.css";
import axios from "axios";

import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Input  } from "@material-ui/core";
function QuoraHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const close = (<CloseIcon/>);
  const dispatch= useDispatch();
  const user = useSelector(selectUser);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  const [inputUrl, setInputUrl] = useState("");
  const [question , setQuestion] = useState("");
  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
       headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user : user,
        
      };
      await axios.post("/api/questions", body,config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    } };

    const handleLogout=() => {
      if(window.confirm("Are you sure you want to log out?")){
        signOut(auth).then(() => {
          dispatch(logout())
          console.log("logged out");
        }).catch(() => {
          console.log("Error in logging out");
        });
      }
    };
    
  

  return (
    <div className="qHeader">
        
            <div className="qHeader__logo">
                <img src={logo}
                alt="" />
                </div>
                <div className="qHeader__icons">
                    <div className="qHeader__icon"> <HomeIcon /></div>
                    <div className="qHeader__icon"> <FeaturedPlayListOutlinedIcon/> </div>
                    <div className="qHeader__icon"> <AssignmentTurnedInOutlinedIcon/> </div>
                    <div className="qHeader__icon"> <PeopleAltOutlinedIcon/> </div>
                    <div className="qHeader__icon"> <NotificationsOutlinedIcon/> </div>
                </div>
            
                  <div className="qHeader__input">
                          <SearchIcon/>
                          <input type="text" placeholder="Search questions"/>
                  </div>
                  <div style={{
                    marginLeft: "15px",
                  }} className="qHeader_Rem">
                  <span onClick={handleLogout}>
                    <Avatar src={user?.photo}/>
                  </span>
                  </div>
         
                  <Button style={{marginLeft: "15px"}}
                  onClick={onOpenModal}
                  >Add Question</Button>
                  <Modal 
                          open={isModalOpen}
                           onClose={onCloseModal} center
                           CloseIcon = {close}
                           shouldCloseOnOverlayClick={false}
                           style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
                          >

                          <div className="modal__title">
                            <h5>Add Question</h5>
                            <h5>Share Link</h5>
                          </div>
                          <div className="modal__info">
                              <Avatar className="avatar" src={user?.photo} />
                              <div className="modal__scope">
                                <PeopleAltOutlinedIcon/>
                                <p>Public</p>
                                <ExpandMoreIcon/>
                              </div>
                          </div>

                          <div className="modal__Field">
                        <Input type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                         placeholder= "Start your question with 'What' ,'How', 'Why', etc" style= {{marginTop:"10px",}} />
                        <div  style={{
                          display: "flex",
                          flexDirection: "column",
                          
                        }}>
                            <input style={{
                              margin: "5px ,0px",
                              border: "1px solid lightgray",
                              padding:"10px",
                              outline: "2px solid #000",
                            }} 
                            value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                            type="text" placeholder="Optional: include a link" />
                        {
                          inputUrl !== "" && (<img  style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"/>
                          )}
                        </div>
                          </div>

              <div className="modal__buttons">
                <button  onClick={handleSubmit} type="submit" className="add">
              Add Question</button>
              <button className="cancel"
              onClick = {()=> setIsModalOpen(false)} >
              Cancel </button>
               
                

              </div>

                  </Modal>
    </div>
   
  )
}



export default QuoraHeader;