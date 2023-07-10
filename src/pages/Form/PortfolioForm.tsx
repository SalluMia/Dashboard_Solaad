import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];
function PortfolioForm() {
  const [file, setFile] = useState<File | null > (null);

  const handleChange = (file: File) => {
    setFile(file);
    console.log(file);
  };

  return (
    <div>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block font-medium text-sm text-black dark:text-white">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="enter project title here's..."
                  className="w-full font-medium text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 font-medium text-sm block text-black dark:text-white">
                  Project Description
                </label>
                <textarea
                  placeholder="enter project description..."
                  className="w-full font-medium text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                  Add Portfolio Project +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PortfolioForm
