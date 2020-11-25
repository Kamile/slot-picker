import styled, { css } from 'styled-components';

export const SlotButton = styled.button<{
  selected?: boolean;
}>`
  margin-bottom: 5px;
  background-color: white;
  height: 60px;
  ${(p) =>
    p.selected &&
    css`
      color: #000;
      border: 5px solid #60935d;
    `}
  @media (min-width: 768px) {
    width: 100px;
  }
`;
