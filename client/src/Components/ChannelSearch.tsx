import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch: React.FC = () => {
  const [querry, setQuerry] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (text: string) => {
    try {
      // fectch comments
    } catch (error) {
      // fectch comments
    }
  };

  const onSearch = (event: React.ChangeEvent<any>): void => {
    event.preventDefault();

    setLoading(true);
    setQuerry(event.target.value);

    getChannels(event.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__icon"></div>
        <SearchIcon />
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={querry}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
