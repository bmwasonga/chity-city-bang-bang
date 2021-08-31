import React from 'react';
import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelContainer from './Components/ChannelContainer';
import ChannelListContainer from './Components/ChannelListContainer';

const client = StreamChat.getInstance('y2zvdngkpa94');

const App = () => {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
