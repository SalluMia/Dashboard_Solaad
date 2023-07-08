import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SocialLinksDetail from './SocialLinksDetail';
const SocialLinks = () => {
  return (
    <>
      <div className="">
        <Link to="/sociallinksform">
          <button
            className="add-button bg-blue-500   right-9 h-10 transform rounded-full    px-3 text-white transition-transform duration-300 hover:scale-110"
            style={{ background: '#023e8a' }}
          >
            <b>
              Add Social Link
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '12px' }} />
            </b>
          </button>
        </Link>
        <br />
        <br />

        <SocialLinksDetail />
      </div>
    </>
  );
};

export default SocialLinks;
