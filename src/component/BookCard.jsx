import { useState } from "react"
import {AiFillHeart} from "react-icons/ai"
import styles from "./BookCard.module.css"
function BookCard({data , handelLikedList}) {
  const {title , pages ,image , author , language} = data ;
  const[like , setLike] = useState(false);

  const likeHandeler = () => {
    setLike ((like) => !like);
    handelLikedList(data , like);
  }
  return (
    <div className={styles.card}>
        <img src={image} title={title} />
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages </span>
            </div>
        </div>
        <button onClick={likeHandeler}><AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.3rem" /></button> 
    </div>
  )
}

export default BookCard