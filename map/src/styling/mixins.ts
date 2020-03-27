import { css } from './index';

export const button = css`
  color: ${p => p.theme.textColor};
  border: none;
  outline: none;
  font-size: 15px;
  padding: 9px 11px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    color: #000;
  }
`;

export const buttonPrimary = css`
  ${button};
  background: ${p => p.theme.colors.brand.primary};
  color: #fff;

  &:hover {
    color: #fff;
    background: ${p => p.theme.colors.brand.primaryLight};
  }
`;
