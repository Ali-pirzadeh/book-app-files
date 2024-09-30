import {IoSearchSharp} from "react-icons/io5"
import styles from "./search.module.css"


function SearchBox({search , setSearch , searchHandeler}) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}/>
      <button onClick={searchHandeler}><IoSearchSharp /></button>
    </div>
  )
}

export default SearchBox