import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import uploader from '../uploader';
const fileTypes = ['JPG', 'PNG', 'GIF'];

export default function EventsForm() {

  const [file, setFile] = useState<File | null>(null);

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
                  <label className="mb-3 block text-sm text-black dark:text-white">
                    <b>Event Title</b>
                  </label>
                  <input
                    type="text"
                    placeholder="place event's title here"
                    className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-small outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-black dark:text-white">
                    <b>Content</b>
                  </label>
                  <textarea
                    placeholder="place brief detail of event's here"
                    className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-small outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              className="file-uploader w-full "
              style={{width:"200px !important"}}

            />

                

                <div className="relative">
                    <button
                        type="submit"
                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-primary py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        style={{ color: 'white', fontWeight: 'bold' }}

                    >
                        Add Event +
                    </button>
                    </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
