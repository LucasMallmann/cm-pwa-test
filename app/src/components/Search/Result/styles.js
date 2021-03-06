import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';
import { darken } from 'polished';
import { device } from '~/styles/sizes';

export const Container = styled.div`
  position: absolute;
  width: 50%;
  margin-top: 1px;
  z-index: 1;
  border-radius: 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: ${props => props.theme.colors.inputBackground};

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const Scroll = styled(PerfectScroll)`
  max-height: 260px;
`;

export const ArtistsList = styled.div`
  button {
    background-color: ${props => props.theme.colors.inputBackground};
    padding: 12px 16px;
    display: flex;
    align-items: center;
    font-size: 18px;
    border: none;
    width: 100%;
    outline: none;

    @media ${device.mobileL} {
      padding: 8px 14px;
      font-size: 15px;
    }

    border-bottom: 0.1px solid
      ${props => darken(0.1, props.theme.colors.inputBackground)};

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.colors.primary};
    }

    span {
      font-weight: bold;
      margin-left: 20px;

      @media ${device.mobileL} {
        margin-left: 12px;
      }
    }

    &:hover {
      cursor: pointer;
      background-color: ${props =>
        darken(0.05, props.theme.colors.inputBackground)};
    }
  }
`;
