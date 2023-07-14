// import { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { BASEURL } from './Api/Api_Url';
// import axios from 'axios';

// const TechnologiesDetail = () => {
//   const [techData, setTechData] = useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${BASEURL}/api/auth/technologies`);

//         console.log(response.data);
//         setTechData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//         <div className="max-w-full overflow-x-auto">
//           <table className="w-full table-auto">
//             <thead>
// <tr className="bg-gray-2 text-left dark:bg-meta-4">
//   <th className="min-w-[220px] py-4 px-4 text-sm font-bold text-black dark:text-white xl:pl-11">
//     Technology Title
//   </th>
//   <th className="min-w-[150px] py-4 px-4 text-sm font-bold text-black dark:text-white">
//     Contents
//   </th>
//   <th className="min-w-[120px] py-4 px-4 text-sm font-bold text-black dark:text-white">
//     Image
//   </th>

//   <th className="py-4 px-4 text-sm font-bold text-black dark:text-white">
//     Actions
//   </th>
// </tr>
//             </thead>
//             <tbody>
//               {/* <tr>
//                 <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
//                   <h5 className="text-sm font-medium text-black dark:text-white">
//                     React.Js
//                   </h5>
//                 </td>
//                 <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
//                   <p className="text-black dark:text-white">
//                     Ipsum dolor sit amet consectetur adipisicing.
//                   </p>
//                 </td>
//                 <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
//                   <p className="inline-flex py-1 px-3 text-sm text-sm font-medium text-success">
//                     <img
//                       className="my-5 h-20 w-40 object-cover"
//                       src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*0SmRi43-NRJNflvH.png"
//                       alt="Event"
//                     />
//                   </p>
//                 </td>

//                 <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
//                   <div className="flex items-center space-x-3.5">
//                     <button
//                       className="hover:text-primary "
//                       style={{ color: '#e63946', fontSize: '15px' }}
//                     >
//                       <FontAwesomeIcon icon={faTrashAlt} />
//                     </button>
//                     <Link to="/technologyform">
//                       <button
//                         className="hover:text-primary"
//                         style={{ color: '#40916c', fontSize: '16px' }}
//                       >
//                         <FontAwesomeIcon icon={faPenToSquare} />
//                       </button>
//                     </Link>
//                   </div>
//                 </td>
//               </tr> */}
//               {techData?.map((item) => {
//                 const { techName, image } = item;
//                 return (
//                   <tr>
//                     <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
//                       <h5 className="text-sm font-medium text-black dark:text-white">
//                         {techName}
//                       </h5>
//                     </td>

//                     <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
//                       <p className="inline-flex py-1 px-3 text-sm text-sm font-medium text-success">
//                         <img
//                           className="my-5 h-20 w-40 object-cover"
//                           src={image}
//                           alt="Event"
//                         />
//                       </p>
//                     </td>

//                     <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
//                       <div className="flex items-center space-x-3.5">
//                         <button
//                           className="hover:text-primary "
//                           style={{ color: '#e63946', fontSize: '15px' }}
//                         >
//                           <FontAwesomeIcon icon={faTrashAlt} />
//                         </button>
//                         <Link to="/technologyform">
//                           <button
//                             className="hover:text-primary"
//                             style={{ color: '#40916c', fontSize: '16px' }}
//                           >
//                             <FontAwesomeIcon icon={faPenToSquare} />
//                           </button>
//                         </Link>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TechnologiesDetail;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { BASEURL } from './Api/Api_Url';
import axios from 'axios';

const TechnologiesDetail = () => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/auth/technologies`);
      setTechData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASEURL}/api/auth/technology/${id}`);
      setTechData((prevData) => prevData.filter((item) => item._id !== id));
      console.log('Data deleted');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              {' '}
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 text-sm font-bold text-black dark:text-white xl:pl-11">
                  Technology Title
                </th>

                <th className="min-w-[120px] py-4 px-4 text-sm font-bold text-black dark:text-white">
                  Image
                </th>

                <th className="py-4 px-4 text-sm font-bold text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {techData.map((item) => {
                const { _id, techName, image } = item;
                return (
                  <tr key={_id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="text-sm font-medium text-black dark:text-white">
                        {techName}
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex py-1 px-3 text-sm text-sm font-medium text-success">
                        <img
                          className="my-5 h-20 w-40 object-cover"
                          src={image}
                          alt="Technology"
                        />
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          style={{ color: '#e63946', fontSize: '15px' }}
                          onClick={() => handleDelete(_id)}
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TechnologiesDetail;
