import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const TechnologiesForm = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file: File) => {
    setFile(file);

    console.log(file);
  };
  const formData = new FormData();
  formData.append('title', title);

  formData.append('file', file);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block font-bold text-black dark:text-white">
                    Technology Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  className="file-uploader"
                />
                <div className="relative">
                  <button
                    type="submit"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-primary py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    style={{ color: 'white', fontWeight: 'bold' }}
                  >
                    Add Technology
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesForm;
