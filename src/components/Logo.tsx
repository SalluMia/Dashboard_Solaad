import React, { useState,useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrashAlt,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';

function Logo() {
  const [dragActive, setDragActive] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setIsFileSelected(true);
      console.log('File selected:', e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setIsFileSelected(true);
      console.log('File selected:', e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
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
              {/* file uploader start  */}
  <div className="flex">
                  <form
                    id="form-file-upload"
                    onDragEnter={handleDrag}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      id="input-file-upload"
                      multiple
                      onChange={handleChange}
                    />
                    <label
                      id="label-file-upload"
                      htmlFor="input-file-upload"
                      className={dragActive ? 'drag-active' : ''}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      {isFileSelected ? (
                        <div>
                          <p className="text-success p-2 font-bold text-sm rounded-lg">
                            Successfully selected the file !!
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p>Drag and drop your file here or</p>
                          <button className="upload-button" onClick={onButtonClick}>
                            Upload a file
                          </button>
                        </div>
                      )}
                    </label>
                    {dragActive && <div id="drag-file-element"></div>}
                  </form>
                </div>

                {/* file uploader end  */}

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
