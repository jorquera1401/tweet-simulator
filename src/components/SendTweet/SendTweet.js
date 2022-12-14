import React, { useEffect, useState } from "react";
import { Fab } from "@material-ui/core";
import moment from "moment";
import "./SendTweet.scss";
import AddIcon from '@mui/icons-material/Add';
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/contants";


export default function SendTweet() {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const {name, tweet} = formValue;
    let allTweetsArray = [];

    if(!name || !tweet) {
      console.log('Waning: todos los campos son obligatorios');
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      console.log('Tweet enviado correctamente');
      closeModal();
    }
    allTweetsArray = [];
  }
  return (
    <div class="send-tweet">
      <Fab 
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  )
}