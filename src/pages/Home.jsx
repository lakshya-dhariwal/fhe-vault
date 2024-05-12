import React from 'react';

import CustomLink from '@/components/CustomLink';
import 'cal-sans';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <div className='max-w-[650px] text-center rounded flex-col flex items-center gap-5 p-5'>
              <h1 style={{ fontFamily: 'Cal Sans' }}> 🏛️ FHE Vault</h1>
              <h2
                className='text-gray-300 text-[25px] '
                style={{ fontFamily: 'Cal Sans' }}
              >
                Enable Multi Factor authentication and secure your files. Store
                and own your data.
              </h2>
              <button className='bg-yellow-400 font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500'>
                Get Started
              </button>
            </div>

            <footer className='absolute text-gray-300 font-mono bottom-2'>
              powered by{' '}
              <CustomLink href='https://fluf-id.vercel.app'>fluf.id</CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
