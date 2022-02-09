import { useSetRecoilState } from "recoil";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Character } from "../Container/interfaces";
import { characterState } from "../../state/marketplace";
import styles from "./styles.module.scss";

const Card = ({ name, image, favorite }: Character) => {
  const setCharactersState = useSetRecoilState(characterState);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <p>{name}</p>
        <button
          className={styles.favorite}
          onClick={() =>
            setCharactersState(
              (characters) =>
                [
                  ...characters.filter((char: Character) => char.name !== name),
                  { name, image, favorite: true },
                ] as any
            )
          }
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
