import React from 'react';
import { AddChannel } from '../assets';

interface Props {
  error?: boolean;
  loading?: boolean;
  type: string;
  // isCreating: boolean;
  // setIsCreating: boolean;
  // setCreateType: string;
  // setIsEditing: boolean;
  // setToggleContainer: string;
}

const TeamChannelList: React.FC<Props> = ({
  children,
  error = false,
  loading,
  type,
}) => {
  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error. Please wait a moment and try again
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messeges'} loading ...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messeges'} loading ...
        </p>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
