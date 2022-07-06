import React from 'react';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import { createClient } from '../../prismicio';

const Description = (page) => {
  console.log(page);
  return (
    <section>
      <div className='text-center '>
        <h3 className='text-5xl font-bold'>Next Glass</h3>
        <p className=''>
          A Minimal and Beautiful NextJS Personal Blog Starter With Nice
        </p>
        <p> Glassmorphism UI.</p>
        {/* <h2>{page.uid}</h2> */}
      </div>
    </section>
  );
};

export default Description;
