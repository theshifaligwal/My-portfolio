// CSS
import style from "../../styles/components/SocialLinks.module.css";

// Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const SocialLinks = () => {
  return (
    <ul className={style.socialLink}>
      <li className={style.github}>
        <a href="https://github.com/theshifaligwal">
          <AiFillGithub size="20px" />
        </a>
      </li>
      <li className={style.twitter}>
        <a href="https://twitter.com/Theshifaligwal">
          <AiFillTwitterCircle size="20px" />
        </a>
      </li>
      <li className={style.linkedin}>
        <a href="https://www.linkedin.com/in/theshifaligwal/">
          <AiFillLinkedin size="20px" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
