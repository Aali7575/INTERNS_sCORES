import React, { useState } from "react";

const data = [
    {
      id: 1,
      name: "Item 1",
      description: "This is item 1",
      category: "Category A",
    },
    {
      id: 2,
      name: "Item 2",
      description: "This is item 2",
      category: "Category B",
    },
    {
      id: 3,
      name: "Item 3",
      description: "This is item 3",
      category: "Category B",
    },
    {
      id: 4,
      name: "Item 4",
      description: "This is item 4",
      category: "Category C",
    },
  ];

const SearchButton = () => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchButton;