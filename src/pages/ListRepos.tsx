import { FC, useEffect, useState } from 'react';
import { fetchGithubData } from '../services/githubService';
import { Repo } from '../utils/ListRepo';
import { FaStar } from 'react-icons/fa';

const ListRepos: FC = () => {

  const [repos, setRepos] = useState<Repo[]>([]);

  const getGithubRepos = async () => {

    const repos = localStorage.getItem("repositories");
   
    if (repos === null || repos === undefined) {
      
      const data = await fetchGithubData();
      
      // console.log(data);
      setRepos(data.user.repositories.nodes);
      
      localStorage.setItem("repositories", JSON.stringify(data.user.repositories.nodes));
      
    }else{
      
      const loadRepos = JSON.parse(repos);

      setRepos(loadRepos);
    
    }

  }

  const toggleFavorite = (id: number) => {

    const modifiedRepos = repos.map((obj: Repo) => {
      if (obj.id === id) {
        return {
          ...obj,
          fav: !obj.fav
        };
      }
      return obj;
    });

    // console.log(`modificando`, modifiedRepos);

    setRepos(modifiedRepos);

    localStorage.setItem("repositories", JSON.stringify(modifiedRepos));

  }

  const pipeContentRepo = (content: string) => {

    if(content !== null && content.length > 110){
      return `${content.slice(0, 110)}...`
    }

    return content;
    
  }

  useEffect(() => {

    getGithubRepos();
  
  }, []);

  return (
    <div className="bg-gray-100 p-4 border flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">My Repositories</h2>
      {repos.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <ul className="flex flex-wrap justify-center">
          {repos.map((repo) => (
            <li key={repo.id} className="p-4 bg-white shadow rounded w-72 h-40 mr-4 mb-4 flex flex-col justify-between">
              <div className="flex items-center">
                <h3 className="text-lg font-bold">{repo.name}</h3>
                <button
                  onClick={() => toggleFavorite(repo.id)}
                  className={`ml-2 -mt-1 focus:outline-none ${
                    repo.fav === true ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                >
                  <FaStar size={20} className="inline" />
                </button>

              </div>
              <p className='text-xs'>{pipeContentRepo(repo.description)}</p>
              <a className='underline' href={repo.url} target={"_blank"}>Link repo</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListRepos;
