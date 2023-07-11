import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const SocialLinksDetail = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-bold text-sm text-black dark:text-white xl:pl-11">
                  Platform
                </th>
                <th className="min-w-[150px] py-4 px-4 font-bold text-sm text-black dark:text-white">
                  URL
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
                    facebook
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <a href="https://www.facebook.com">https://www.facebook.com</a>
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
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
                    <Link to="/sociallinksform">
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
                    Instagram
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <a href="https://www.instagram.com">https://www.instagram.com</a>
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1633886897663-44c707d71904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
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
                    Twitter
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <a href="http://www.twitter.com">http://www.twitter.com</a>
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1649180554466-0c15f6c70d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80"
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
                    pinterest
                  </h5>
                </td>
                <td className="py-5 px-4">
                  <p className="text-black dark:text-white">
                    <a href="http://www.pinterest.com">http://www.pinterest.com</a>
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-sm text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1636044594149-6e2f289c3868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SocialLinksDetail;
