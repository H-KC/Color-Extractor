import React, { useRef, useEffect, useState, Fragment } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import toast from 'react-hot-toast';

const Extractor = (props) => {
  const [image, setImage] = useState('');
  const [holder, setHolder] = useState(null);
  const [colors, setColors] = useState(null);
  const upBtn = useRef(null);
  const handlChange = (file) => {
    if (file && file.type.substr(0, 5) === 'image') {
      setHolder(file);
    }
  };
  const handlClick = () => {
    upBtn.current.click();
  };
  const handlClear = () => {
    setImage('');
    setHolder(null);
    setColors(null);
  };
  const getColors = (clrs) => {
    setColors(clrs);
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
    if (holder) {
      const reader = new FileReader();
      reader.readAsDataURL(holder);
      reader.onload = () => {
        setImage(reader.result);
      };
    } else {
    }
  }, [holder, image, colors]);

  return (
    <Fragment>
      <div className=' main box'>
        <div className='box'>
          {image ? (
            <ColorExtractor getColors={(clrs) => getColors(clrs)}>
              <img
                className='box-img-holder'
                src={image}
                alt=''
                style={{ objectFit: 'cover' }}
              />
            </ColorExtractor>
          ) : (
            <img className='box-img' src={props.image} alt='' />
          )}

          {image && (
            <div className='close-icon' onClick={handlClear}>
              <i className='fas fa-times'></i>
            </div>
          )}
        </div>
        {colors && (
          <div className='box-stats'>
            {colors.map((color, id) => {
              return (
                <div
                  className='box-color'
                  onClick={handleCopy}
                  name={color}
                  key={id}
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        )}
        <input
          className='up-btn'
          type='file'
          name='UPLOAD'
          accept='image/*'
          onChange={(e) => handlChange(e.target.files[0])}
          hidden
          ref={upBtn}
        />
        <button className='in-up-btn' onClick={handlClick}>
          UPLOAD
        </button>
      </div>
    </Fragment>
  );
};

export default Extractor;
