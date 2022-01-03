import { css } from '@emotion/react';

export const intro = (theme) => css`
  background-image: url('${theme.backgroundImage}');
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 290px;
  transition: all 0.5s;
`;

export const introTitle = (theme) => css`
  font-weight: 550;
  font-size: 50px;
  line-height: 60px;
  color: ${theme.colors.primary};
  margin-bottom: 100px;
  transition: all 0.5s;
`;

export const label = (theme) => css`
  color: ${theme.colors.primary};
  position: absolute;
  left: 25px;
  top: -30px;
`;

export const availableHotels = () => css`
  padding-top: 120px;
  padding-bottom: 120px;
  color: #383838;
  background-color: #eaf0f9;
`;
