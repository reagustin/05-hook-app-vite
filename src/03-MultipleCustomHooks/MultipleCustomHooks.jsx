import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote} from "./index";



export const MultipleCustomHooks = () => {
  
    const {counter, increment} = useCounter(1)
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError} = useFetch(url);
    const {author, quote} = !!data && data[0];

    // console.log({data, isLoading, hasError})

    
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {
          (isLoading)
            ? <LoadingQuote/>                  
            : <Quote quote={quote} author={author} />                  
        }

        <button 
            onClick={ () => increment() } 
            className="btn btn-primary"
            disabled={isLoading}
          >          
            Next quote
        </button>

    </>
  )
}
