import '././Collapse.scss';
import arrow from '../../assets/Arrow.png';
import { useState } from 'react';

function Collapse({ title, text }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    
      <h2 className="collapse_title" onClick={() => setToggle(!toggle)}>
        {title}
        <img
          className={toggle ? 'rotate' : 'rotate0'}
          src={arrow}
          alt="flèche"
        />
      </h2>
      <div className={toggle ? 'collapse_expand' : 'collapse_expand1'}>
        {Array.isArray(text) ? (
          text.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p className='collapse_text'>{text}</p>
        )}
      </div>
    </>
  );
}

export default Collapse