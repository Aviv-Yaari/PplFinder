import React from "react";
import Text from "components/Text";
import * as S from "./style";
import FavoriteList from "components/FavoriteList";

const Favorites = ({ favorites, onFavorite }) => {
  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <FavoriteList favorites={favorites} onFavorite={onFavorite} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
