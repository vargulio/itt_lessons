import useApi from "../../hooks/useApi";
import styles from  "./Joke.module.scss";

export default function Joke(props) {


    const {data: response, isLoading, error} = useApi('https://api.chucknorris.io/jokes/random?category='+ props.category);


    return <div className={styles.jokeContainer}><span className={styles.customClass}>{isLoading ? "Loading..." : response?.value}</span></div>
}