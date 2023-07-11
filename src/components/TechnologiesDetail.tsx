import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const TechnologiesDetail = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-bold text-sm text-black dark:text-white xl:pl-11">
                  Technology Title
                </th>
                <th className="min-w-[150px] py-4 px-4 font-bold text-sm text-black dark:text-white">
                  Contents
                </th>
                <th className="min-w-[120px] py-4 px-4 font-bold text-sm text-black dark:text-white">
                  Image
                </th>

                <th className="py-4 px-4 font-bold text-sm text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-sm text-black dark:text-white">
                    React.Js
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*0SmRi43-NRJNflvH.png"
                      alt="Event"
                    />
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary "
                      style={{ color: '#e63946', fontSize: '15px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to="/technologyform">
                      <button
                        className="hover:text-primary"
                        style={{ color: '#40916c', fontSize: '16px' }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-sm text-black dark:text-white">
                    Next.js
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Amet consectetur adipisicing elit. Voluptatum...
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
                      alt="Event"
                    />
                  </p>
                </td>

                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td> */}
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary "
                      style={{ color: '#e63946', fontSize: '15px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to="/events">
                      <button
                        className="hover:text-primary"
                        style={{ color: '#40916c', fontSize: '16px' }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-sm text-black dark:text-white">
                    MongoDB
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Sitam amet consectetur adipisicing elit..
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB"
                      alt="Event"
                    />
                  </p>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td> */}
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary "
                      style={{ color: '#e63946', fontSize: '15px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to="/events">
                      <button
                        className="hover:text-primary"
                        style={{ color: '#40916c', fontSize: '16px' }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-5 px-4 pl-9 xl:pl-11">
                  <h5 className="font-medium text-sm text-black dark:text-white">
                    Node.Js
                  </h5>
                </td>
                <td className="py-5 px-4">
                  <p className="text-black dark:text-white">
                    Lorem ipsum dolor sit amet.
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="http://nodejs.org/images/logos/nodejs-dark.png"
                      alt="Event"
                    />
                  </p>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td> */}
                <td className="py-5 px-4">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary "
                      style={{ color: '#e63946', fontSize: '15px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to="/technologyform">
                      <button
                        className="hover:text-primary"
                        style={{ color: '#40916c', fontSize: '16px' }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TechnologiesDetail;
