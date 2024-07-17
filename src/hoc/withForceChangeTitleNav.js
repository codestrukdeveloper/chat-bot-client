import { useEffect } from "react";

const withForceChangeTitleNav = (Component, titleNav, callback) => (props) => {
  useEffect(() => {
    const pageTitleNavElement = document.querySelector(".page-title-nav");
    pageTitleNavElement.textContent = titleNav;
  }, []);

  return <Component {...props} />;
};

export default withForceChangeTitleNav;
