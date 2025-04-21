import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #f3f3f3;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #444;
`;

export const PrettyCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

export const Button = styled.button`
  background: #6a67ce;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background: #514bc2;
  }
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserInfo = styled.div`
  font-size: 16px;
  color: #333;
`;
