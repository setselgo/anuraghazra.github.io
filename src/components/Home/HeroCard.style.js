import styled from 'styled-components';

export const HeroCardWrapper = styled.div`
  position: relative;
`

export const CodeCardWrapper = styled.div`
  padding: 30px 35px;
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryColor};
  box-shadow: ${props => props.theme.shadowSmall}; 

  pre {
    /* white-space: pre-wrap;
    word-wrap:break-word; */
    /* line-height: 28px; */
    font-size: 0.8rem;
    font-family: ${props => props.theme.fontFamily};
    color: ${p => p.theme.dark ? p.theme.primaryText : p.theme.primaryColor};
  }
`;

export const ColorPaletteWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: -90px;

  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.secondaryColor};
  box-shadow: ${props => props.theme.shadowSmall}; 
  padding: 8px;
  border-radius: 5px;

  @media ${props => props.theme.media.tablet} {
    bottom: -40px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  margin: 3px;
  border-radius: 5px;
`;
