import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
function Services() {
  return (
    <div>
        <div className="flex justify-end mb-5">
        <Link to="/servicesform">
          <button className="add-button  px-3 h-10 rounded-full bg-blue-500 text-white hover:scale-110 transform transition-transform duration-300"  style={{background:'#023e8a'}}>
            <b>Add Services</b> <FontAwesomeIcon icon={faPlus} style={{ fontSize: '12px' }} />
          </button>
        </Link>
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
       
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-sm text-black dark:text-white xl:pl-11">
                 <b> Services Title</b>
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-sm text-black dark:text-white">
                  <b>Services Description</b>
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-sm text-black dark:text-white">
                  <b>Image</b>
                </th>
              
                <th className="py-4 px-4 font-medium text-sm text-black dark:text-white">
                  <b>Actions</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-sm text-black dark:text-white">
                    Web Development & Technologies
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
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=455&q=80"
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
                    <Link to="/servicesform">
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
                    Logo Design
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
                      src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
                    <Link to="/servicesform">
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
                    <b>Custom software</b>
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
                      src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
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
                      Quality Assurance
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
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
    </div>
  );
}

export default Services;
