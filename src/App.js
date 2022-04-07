import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';

const App = () =>{
    return(
        <ChatEngine
            height='100vh'
			userName='kumarsuman'
			userSecret='123123'
			projectID='91d139b4-5a5b-4deb-972f-9fb185bc8366'
            renderChatFeed= {(ChatAppProcess)=><ChatFeed {...ChatAppProcess} />}
         />
        )
}

export default App;