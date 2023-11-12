import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Query = () => {
  const halo = 1;

  const { isLoading, isError, data, error, refetch } = useQuery([], () =>
    axios
      .get("https://api.github.com/users/eunit99/repos")
      .then((res) => res.data)
  );

  if (data) {
    return (
      <>
        {data.map((repo) => {
          return (
            <div key={repo.id} className="text-black">
              <ul>
                <li>
                  <a href={repo.clone_url}>{repo.name}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
};

export default Query;
