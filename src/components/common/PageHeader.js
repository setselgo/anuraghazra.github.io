import styled from 'styled-components';

const PageHeader = styled.h2`
  margin: 100px auto;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
  text-align: center;
`

export default PageHeader;