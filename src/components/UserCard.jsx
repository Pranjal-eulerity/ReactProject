import React from 'react';
import { CardBox, Avatar, UserInfo } from './StyledComponents';

export const UserCard = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://i.pravatar.cc/100'
  };

  return (
    <CardBox>
      <Avatar src={user.avatar} alt="avatar" />
      <UserInfo>
        <strong>{user.name}</strong><br />
        <span>{user.email}</span>
      </UserInfo>
    </CardBox>
  );
};
