import { FC, useEffect, useState } from 'react';
import { Repo } from '../utils/ListRepo';

const ListReposFavorites: FC = () => {

  const [repos, setRepos] = useState<Repo[]>([]);

  const getReposfav = async () => {

    // console.log(data);

   const repos: Repo[] = JSON.parse(localStorage.getItem("repositories") || '');

  //  console.log("repos", repos)

   const reposFav = repos.filter(repo => repo.fav === true);

   setRepos(reposFav);

  }

  useEffect(() => {

    getReposfav();
  
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites repositories</h2>
      {repos.length === 0 ? (
        <p>There are no favorites repositories.</p>
      ) : (
        <ul className="space-y-2">
          {repos.map((item) => (
            <li key={item.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListReposFavorites;
