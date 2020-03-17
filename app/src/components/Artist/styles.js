import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 400px;
  margin: 10px auto;
`;

export const Avatar = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 2.5px solid ${props => props.theme.colors.secondary};

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

export const Info = styled.div`
  margin-left: 18px;

  h1,
  span {
    text-transform: uppercase;
    letter-spacing: 1.11px;
  }

  h1 {
    color: ${props => props.theme.colors.mainText};
  }

  span {
    font-size: 13px;
  }
`;
