import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const List = [
    'Music', 'Gaming', 'News', 'Cricket', 'Sports', 
    'Asian', 'Programming', 'Valentines', 'Movies', 
    'Shorts', 'Songs', 'Comedy'
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex overflow-x-auto whitespace-nowrap gap-2 p-2 scrollbar-hide md:w-auto w-[90vw]">
        {List.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
