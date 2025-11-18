import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadset,
  faTrophy,
  faBell,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function ListItem(icon, text, key) {
  return (
    <li
      key={key}
      className="flex items-center gap-2 p-3 rounded-lg text-lg hover:cursor-pointer hover:bg-neutral-800"
    >
      <FontAwesomeIcon icon={icon} />
      <h2>{text}</h2>
    </li>
  );
}

export default function Navbar() {
  const items = ["Home", "Games", "Leaderboards", "Notifications", "Settings"];
  const icons = [faHouse, faHeadset, faTrophy, faBell, faGear];

  return (
    <>
      <nav className="w-[25%] min-h-screen bg-neutral-900 text-green-200 px-2 py-4 shadow-2xl">
        <section className="flex items-center">
          <img
            className="w-25"
            src="assets/Savepoint_Logo.png"
            alt="Savepoint Logo"
          />
          <h1 className="text-green-400 font-bold text-3xl">SAVEPOINT</h1>

          <div className="w-full flex justify-end">
            <button className="items-center text-4xl text-white bg-green-400 px-1.5 py-2 rounded-full hover:cursor-pointer me-5">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </section>

        <section>
          <ul className="px-8 mt-6">
            {items.map((item, index) => ListItem(icons[index], item, index))}
          </ul>
        </section>
      </nav>
    </>
  );
}
