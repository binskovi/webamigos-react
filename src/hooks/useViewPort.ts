import { useEffect, useState } from "react";

const getSize = () => ({ x: window.innerWidth, y: window.innerHeight })

export const useViewPort = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {

    //definicja funkcji
    const handleResize = () => {
      setSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    // Kiedy komponent nie jest używany możemy zdjąć EventListener z komponentu aby się nie pojawiał jeśli dany komponent nie jest używany
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}