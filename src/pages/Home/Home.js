import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = ({ favorites, onFavorite }) => {
  const [countries, setCountries] = useState(new Set());
  const { users, isLoading } = usePeopleFetch(countries);

  const handleCountrySelect = (country) => {
    setCountries((prev) => {
      const countries = new Set(prev);
      countries.toggle(country);
      return countries;
    });
  };

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={users}
          favorites={favorites}
          isLoading={isLoading}
          onCountrySelect={handleCountrySelect}
          onFavorite={onFavorite}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
