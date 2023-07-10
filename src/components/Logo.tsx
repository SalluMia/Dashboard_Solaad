import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrashAlt,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function Logo() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file: File) => {
    setFile(file);
    console.log(file);
  };

  return (
    <div>

      <div className="rounded-sm border border-stroke bg-white px-5 py-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="grid lg:grid-cols-3 py-8">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1648679936825-7dc9b7355c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Logo"
              className=" h-75 w-full rounded-lg"
            />

            <div className="flex justify-center gap-1 ">
              <button className="bg-blue-500 mt-2 rounded-lg border-2 py-2 px-4">
                <FontAwesomeIcon icon={faPenSquare} className="mr-2" />
                Update
              </button>

              <button className="bg-red-500 mt-2 rounded-lg border-2 py-2 px-4">
                <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
          <div className="col-span-2 px-5  flex flex-col ">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              className="file-uploader w-full h-100"
            />

            <button className="bg-green-500 mt-2 rounded-lg border-2 py-2 px-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
