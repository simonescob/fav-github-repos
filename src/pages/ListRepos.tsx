import React from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ListReposProps {
  items: Item[];
}

const ListRepos: React.FC<ListReposProps> = ({ items }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      {items.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
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

export default ListRepos;
