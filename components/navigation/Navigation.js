import React from 'react';

const Navigation = () => {
  return (
    <section>
      <nav className='flex justify-between items-center pt-9 uppercase pb-16'>
        <div>Next Glass</div>
        <div>
          <ul className='flex gap-x-3 items-center'>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
