import { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function getQuotes() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      setQuotes(data.quotes);
      
    }
    getQuotes();
  }, []);

  const quotesJSX = quotes.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });

  return (
  <>
  <div>{quotesJSX}</div>
  </>);
}

export default QuoteList;