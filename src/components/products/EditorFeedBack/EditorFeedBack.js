import React from 'react';

import {AiOutlineCloudUpload, AiOutlineCheckCircle} from "react-icons/ai"
import {EditorFeedBackStyles,FeedBackMessage,FeedBack,FeedBackOption} from './styles'
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'

import { Button } from 'ui/buttons';

function EditorFeedBack ({children,status,writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
        
           
           {
             !status?
             <>
               <FeedBack>
                 <Confetti/>
               <AiOutlineCheckCircle color='d9f99d' size="12rem"/>
               <FeedBackMessage>
                 Product Uploaded Successfully
               </FeedBackMessage>
               
             </FeedBack>
             
             </>
           :
           <FeedBack>
             
             <AiOutlineCloudUpload color='d9f99d' size="12rem"/>
             <FeedBackMessage>
               Uploading new product
             </FeedBackMessage>
           </FeedBack>
           }

          <FeedBackOption>
            <Button bc='green' width="10rem" onClick={()=> writeCompleted(false)} disabled={status}> Add Another Product </Button>
            <Button bc='black' margin="1rem" width="10rem" onClick={()=> navigator('/dashboard')}> View All Products </Button>
            
          </FeedBackOption>
        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack