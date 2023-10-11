import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import styles from "./Social.module.css";

const Social: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = (e: React.MouseEvent) => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.social}>
      <div className={styles.link}>
        <NavLink to={"https://www.facebook.com/"} target="blank">
          <FontAwesomeIcon icon={faFacebookF} className={styles.font} />
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to={"https://twitter.com/"} target="blank">
          <FontAwesomeIcon icon={faTwitter} className={styles.font} />
        </NavLink>
      </div>
      {showMore && (
        <>
          <div className={styles.link}>
            <NavLink to={"https://www.linkedin.com/"} target="blank">
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.font} />
            </NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to={"https://github.com/"} target="blank">
              <FontAwesomeIcon icon={faGithub} className={styles.font} />
            </NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to={"https://www.instagram.com/"} target="blank">
              <FontAwesomeIcon icon={faInstagram} className={styles.font} />
            </NavLink>
          </div>
        </>
      )}

      <button
        className={showMore ? styles.hide : styles.disabled}
        onClick={handleShowMore}
      >
        <FontAwesomeIcon icon={faEllipsis} className={styles.font} />
      </button>
    </div>
  );
};

export default Social;
