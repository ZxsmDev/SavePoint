import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const icons = [faGithub, faXTwitter, faLinkedin];

  return (
    <>
      <form className="flex flex-col">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="example@gmail.com" />
        <input type="textarea" placeholder="Report an issue..." />
        <button type="submit">
          <FontAwesomeIcon icon={faBug} />
        </button>
      </form>

      <p>
        Copyright © 2025 <span>ZxsmDev</span>. All rights reserved.
      </p>

      <section>
        <ul>
          {icons.map((icon, index) => {
            return (
              <li>
                <FontAwesomeIcon key={index} icon={icon} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
