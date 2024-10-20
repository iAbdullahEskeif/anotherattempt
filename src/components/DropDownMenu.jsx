import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('here should be the backend api');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={toggleDropdown}>
        {isOpen ? 'Close Menu' : 'Show Menu'}
      </button>
      {isOpen && (
        <div>
          <ul>
            {data.length > 0 ? (
              data.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

