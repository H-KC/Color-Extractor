import React from 'react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const [colorPallet, setColorPallet] = useState(null);
  const genColors = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let holder = [];
    for (let i = 0; i < 6; i++) {
      const temp = '#';
      for (let j = 0; j < 6; j++) {
        temp += hex[Math.floor(Math.random() * (16 - 0))];
      }
      holder[i] = temp;
    }
    setColorPallet(holder);
  };

  const handleCopy = (e) => {
    // const txt=React.createElement('textarea',{},)
    const temp = document.createElement('input');
    temp.type = 'text';
    temp.value = e.target.getAttribute('name');

    document.body.append(temp);
    temp.select();
    document.execCommand('copy');
    temp.parentElement.removeChild(temp);

    toast.success('Successfully copied!', {
      iconTheme: {
        primary: temp.value,
        secondary: temp.value === '#fff' ? 'green' : '#fff',
      },
    });
  };
  useEffect(() => {
    genColors();
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.key === ' ') genColors();
      },
      true,
    );
  }, []);
  return (
    <div className='main-home'>
      {colorPallet &&
        colorPallet.map((color, id) => {
          return (
            <span
              onClick={handleCopy}
              className='color-holder'
              key={id}
              name={color}
              style={{ backgroundColor: color }}
            >
              {color}
            </span>
          );
        })}
    </div>
  );
};

export default Home;
