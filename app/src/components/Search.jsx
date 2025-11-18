import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <>
      <form className="flex">
        <input type="search" placeholder="Search..." />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <button>
        <FontAwesomeIcon icon={faFilter} />
      </button>

      <aside>
        <h3>Filters</h3>
        <form>
          <ul>
            <li>
              <input type="checkbox" />
              <label htmlFor="">Filter Check 1</label>
            </li>
            <li>
              <input type="checkbox" />
              <label htmlFor="">Filter Check 2</label>
            </li>
            <li>
              <input type="checkbox" />
              <label htmlFor="">Filter Check 3</label>
            </li>
            <li>
              <input type="checkbox" />
              <label htmlFor="">Filter Check 4</label>
            </li>
            <li>
              <input type="checkbox" />
              <label htmlFor="">Filter Check 5</label>
            </li>
          </ul>
        </form>

        <form>
          <ul>
            <li>
              <input type="radio" />
              <label htmlFor="">Filter Radio 1</label>
            </li>
            <li>
              <input type="radio" />
              <label htmlFor="">Filter Radio 2</label>
            </li>
            <li>
              <input type="radio" />
              <label htmlFor="">Filter Radio 3</label>
            </li>
          </ul>
        </form>
      </aside>
    </>
  );
}
