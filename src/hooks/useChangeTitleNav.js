import { useEffect, useState } from "react";

const useChangeTitleNav = () => {
  const [currentTitle, setCurrentTitle] = useState(null);

  useEffect(() => {
    document.querySelector(".page-title-nav").textContent = currentTitle;
  }, [currentTitle]);

  return [currentTitle, setCurrentTitle];
};

export default useChangeTitleNav;
