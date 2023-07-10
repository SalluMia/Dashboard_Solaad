import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const TestimonialsDetail = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Testimonials Title
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Contents
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Designation
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Image
                </th>
                {/* <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Starting Time
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Ending Time
              </th> */}
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    Memorial day
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">CEO</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1648679936825-7dc9b7355c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
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
                    {/* <Link to='/events'>
                     <button className="hover:text-primary">
                      <FontAwesomeIcon icon={faEye} />
                      </button>
                     </Link> */}

                    <button
                      className="hover:text-primary "
                      style={{ color: '#e63946', fontSize: '15px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to="/testimonialsform">
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
                  <h5 className="font-medium text-black dark:text-white">
                    Labors Day
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Amet consectetur adipisicing elit. Voluptatum...
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1648073380883-73fa85616559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
                  <h5 className="font-medium text-black dark:text-white">
                    National Day
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Sitam amet consectetur adipisicing elit..
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1648679936825-7dc9b7355c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
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
                  <h5 className="font-medium text-black dark:text-white">
                    Christmis
                  </h5>
                </td>
                <td className="py-5 px-4">
                  <p className="text-black dark:text-white">
                    Lorem ipsum dolor sit amet.
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium text-success">
                    <img
                      className="my-5 h-20 w-40 object-cover"
                      src="https://images.unsplash.com/photo-1648679936837-bbac8d879f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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

export default TestimonialsDetail;
