import { useState, useEffect } from "react";  // useEffect hook służy do efektów ubocznych (połączenia do API, timeouty, interwały)

export const Counter = () => {
  const [count, setCount] = useState(0);   // domyślny stan 0


  /* podajemy callback f która ma zostać wykonana w 1 argumencie a wdrugim podajemy tablicę zależności i w jakich sytacjach callback z pierwszego argumentu ma zostać uruchomiony 
    Jeśli podamy mu pustą tablicę to callback zostanie wykonany tylko raz
    Jeśli przekażemy mu Count to każda zmiana licznika spowoduje uruchomienie callbacka w tym przypadku nie jest to porządane
    Dodajemy f setInterwal
  */
  useEffect(() => {
    const id = setInterval(() => {
      setCount((value) => value + 1);  // wartość callbacka zwaca nam aktualny stan i zwiększamy o 1
    }, 1000);
    console.log("in use effect");
    return () => {  // unmount
      console.log("in use effect unmount");
      clearInterval(id);
    };
    // }, [count]);  mount && update
  }, []);  // mount

  return <div>{count}</div>;
}