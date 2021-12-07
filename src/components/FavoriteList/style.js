import styled from "styled-components";

export const FavoriteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 100%;
  padding: 20px;
  gap: 20px;
  overflow-y: auto;
`;

export const Favorite = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
  transition: background-color 200ms;
  &:hover {
    background: #585e5e;
  }
  img {
    border-radius: 50%;
  }
`;

export const IconButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
