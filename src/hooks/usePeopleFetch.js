import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (countries) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers(countries);
  }, [countries]);

  async function fetchUsers(countries) {
    const params = new URLSearchParams();
    params.append("results", 25);
    params.append("page", 1);
    countries?.size && params.append("nat", [...countries]);
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api`, {
      params,
    });
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
