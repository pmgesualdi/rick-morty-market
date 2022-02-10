import { useSetRecoilState } from "recoil";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Character } from "../Container/interfaces";
import { characterState } from "../../state/recoil";
import styles from "./styles.module.scss";

const Card = ({ id, name, image, favorite }: Character) => {
  const setCharactersState = useSetRecoilState(characterState);
  const updateFavoriteCharacters = (characters: Array<Character>) => {
    return characters
      .map((char: Character) => {
        if (char.id !== id) return char

        return { ...char, favorite: !favorite }
      }) as any
    }

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <div>{name}</div>
        <button
          className={styles.favorite}
          onClick={() => setCharactersState(updateFavoriteCharacters)}
        >
          {favorite ? (
            <AiFillStar className={styles.star} />
          ) : (
            <AiOutlineStar className={styles.star} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
