import { IconButton } from "@material-ui/core";
import * as S from "./style";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState } from "react";

const FavoriteList = ({ favorites, onFavorite }) => {
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (id) => {
    setHoveredUserId(id);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  if (!favorites.size) return <div>No favorites yet, start adding some!</div>;
  return (
    <S.FavoriteList>
      {[...favorites].map((favorite) => (
        <S.Favorite
          key={favorite.login.uuid}
          onMouseEnter={() => handleMouseEnter(favorite.login.uuid)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={favorite.picture.large} alt={favorite.name.first} />
          <div>
            {favorite.name.first} {favorite.name.last}
          </div>
          <S.IconButtonWrapper isVisible={favorite.login.uuid === hoveredUserId}>
            <IconButton onClick={() => onFavorite(favorite)}>
              <FavoriteIcon color="error" />
            </IconButton>
          </S.IconButtonWrapper>
        </S.Favorite>
      ))}
    </S.FavoriteList>
  );
};

export default FavoriteList;
