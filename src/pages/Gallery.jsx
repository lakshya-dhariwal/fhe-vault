import { MdDriveFolderUpload } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { ModalPortal } from '@/components/Modal';
import CustomLink from '@/components/CustomLink';

export default function Gallery() {
  const [fileUpload, setFileUpload] = useState(false);
  return (
    <main className=' bg-dark'>
      <section className='h-screen flex flex-col'>
        <div className='mx-8 my-2'>
          <div className='flex flex-row items-center justify-between w-full'>
            <h1 className='text-xl ' style={{ fontFamily: 'Cal Sans' }}>
              FHE Vault
            </h1>
            <button
              onClick={() => setFileUpload('true')}
              className='bg-yellow-400 flex flex-row items-center gap-1 font-semibold hover:opacity-90 text-gray-600 border-b-[2px] border-r-[2px] rounded p-[5px] border-yellow-500'
            >
              <MdDriveFolderUpload /> Add Files
            </button>
          </div>
        </div>
        <FileUploadModal
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
        />
        <div className='flex-grow h-0 overflow-y-scroll'>
          <div class='container mx-auto '>
            <a
              href='https://source.unsplash.com/600x600/?sig=1'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=1' />
            </a>

            <a
              href='https://source.unsplash.com/600x800/?sig=12'
              data-lightbox='homePortfolio'
              class='vertical'
            >
              <img src='https://source.unsplash.com/600x800/?sig=12' />
            </a>

            <a
              href='https://source.unsplash.com/800x600/?sig=71'
              data-lightbox='homePortfolio'
              class='horizontal'
            >
              <img src='https://source.unsplash.com/800x600/?sig=71' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=40'
              data-lightbox='homePortfolio'
            >
              <iframe
                src='https://www.youtube.com/embed/W0iCWFwwIaQ'
                frameborder='0'
              ></iframe>
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=32'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=32' />
            </a>

            <a
              href='https://source.unsplash.com/800x800/?sig=7'
              data-lightbox='homePortfolio'
              class='big'
            >
              <img src='https://source.unsplash.com/800x800/?sig=7' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=111'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=111' />
            </a>

            <a
              href='https://source.unsplash.com/600x800/?sig=94'
              data-lightbox='homePortfolio'
              class='vertical'
            >
              <img src='https://source.unsplash.com/600x800/?sig=94' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=11'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=11' />
            </a>

            <a
              href='https://source.unsplash.com/800x600/?sig=68'
              data-lightbox='homePortfolio'
              class='horizontal'
            >
              <img src='https://source.unsplash.com/800x600/?sig=68' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=24'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=24' />
            </a>

            <a
              href='https://source.unsplash.com/800x800/?sig=55'
              data-lightbox='homePortfolio'
              class='big'
            >
              <img src='https://source.unsplash.com/800x800/?sig=55' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=56'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=56' />
            </a>

            <a
              href='https://source.unsplash.com/800x600/?sig=186'
              data-lightbox='homePortfolio'
              class='horizontal'
            >
              <img src='https://source.unsplash.com/800x600/?sig=186' />
            </a>

            <a
              href='https://source.unsplash.com/600x600/?sig=117'
              data-lightbox='homePortfolio'
            >
              <img src='https://source.unsplash.com/600x600/?sig=117' />
            </a>
          </div>
        </div>
        <footer className='absolute text-gray-300 font-mono bottom-2 pl-2'>
          powered by{' '}
          <CustomLink href='https://fluf-id.vercel.app'>fluf.id</CustomLink>
        </footer>
      </section>
    </main>
  );
}

const FileUploadModal = ({ fileUpload, setFileUpload }) => {
  const [base64String, setBase64String] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64String(reader.result);
        console.log({ base64: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {fileUpload && (
        <ModalPortal closeModal={() => setFileUpload(false)}>
          <div className=' bg-[#0a0a0a]  relative text-[#d4d4d4] border-gray-800 rounded-lg  gap-2 p-8 min-w-[50vw] border flex flex-col items-center'>
            <div className='absolute top-5 right-5 p-[2px] cursor-pointer rounded-full border-gray-100 border-[1px] '>
              {' '}
              <IoClose className='' onClick={() => setFileUpload(false)} />
            </div>
            <div className='flex items-center justify-center w-full'>
              <FileUpload handleChange={handleFileChange} />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

const FileUpload = ({ handleChange }) => {
  return (
    <div className='dark flex items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <svg
            className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 16'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
            />
          </svg>
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span> or drag and
            drop
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id='dropzone-file'
          type='file'
          className='hidden'
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
