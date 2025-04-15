import React from 'react';
import styled from 'styled-components';

const ColorBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px;
`;

const ColorBox = styled.div`
  height: 100px;
  border-radius: 10px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
const TextContainer = styled.div`
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const ColorfulDivs = () => {
  const colors = ['#e63946', '#f1fa8c', '#50fa7b', '#8be9fd', '#bd93f9', '#ff79c6', '#ffb86c', '#ff5555', '#6272a4', '#282a36'];
  const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, non efficitur augue. 
  Curabitur fermentum, risus non fermentum consequat, velit dolor gravida lectus, non laoreet lorem justo vel ligula. 
  Nullam sagittis mauris vitae libero sodales, in blandit nibh volutpat. Duis at ex sed elit hendrerit tristique. 
  Phasellus euismod eros non diam viverra, non fermentum lacus sodales. Quisque eget tortor ante. 
  Suspendisse potenti. Aenean vel ante eget lorem vulputate vehicula`
  const sampleText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, non efficitur augue. 
  Curabitur fermentum, risus non fermentum consequat, velit dolor gravida lectus, non laoreet lorem justo vel ligula. 
  Nullam sagittis mauris vitae libero sodales, in blandit nibh volutpat. Duis at ex sed elit hendrerit tristique. 
  Phasellus euismod eros non diam viverra, non fermentum lacus sodales. Quisque eget tortor ante. 
  Suspendisse potenti. Aenean vel ante eget lorem vulputate vehicula`
  const sampleTex3t = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisi, non efficitur augue. 
  Curabitur fermentum, risus non fermentum consequat, velit dolor gravida lectus, non laoreet lorem justo vel ligula. 
  Nullam sagittis mauris vitae libero sodales, in blandit nibh volutpat. Duis at ex sed elit hendrerit tristique. 
  Phasellus euismod eros non diam viverra, non fermentum lacus sodales. Quisque eget tortor ante. 
  Suspendisse potenti. Aenean vel ante eget lorem vulputate vehicula`
 return (<>
 
    <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
      <ColorBoxContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color}>{color}</ColorBox>
      ))}
      <div> <p> well this is para</p>Stuff</div>
    </ColorBoxContainer>
    <TextContainer>
        {sampleText}
      </TextContainer>
    </>
  );
};

export default ColorfulDivs;
