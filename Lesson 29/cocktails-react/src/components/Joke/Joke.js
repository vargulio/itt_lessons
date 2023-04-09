import useApi from "../../hooks/useApi";
import "./Joke.scss";

export default function Joke(props) {


    const {data: response, isLoading, error} = useApi('https://api.chucknorris.io/jokes/random?category='+ props.category);


    return <div className="jokeContainer"><span className='customClass'>{isLoading ? "Loading..." : response?.value}</span></div>
}