import styled from "styled-components";

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  transition: background-color 0.2s;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderToggleControlBox = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeaderToggleControl = styled.button``;
