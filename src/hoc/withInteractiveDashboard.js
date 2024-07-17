import { useEffect, useRef, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";

const withInteractiveDashboard = (DashboardLayout) => () => {
  const location = useLocation();
  const match = useMatch(location.pathname);
  const navbarRef = useRef(),
    searchInputRef = useRef();

  const [shouldChangeNav, setShouldChangeNav] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const getTitleNavByPath = match.pathname
    .split("/")
    [match.pathname === "/dashboard" ? 1 : 2].split("")
    .map((word, index) => (index === 0 ? word.toUpperCase() : word))
    .join("");

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight;

    window.addEventListener("scroll", (e) => {
      const { target } = e;
      const scrollTop = target.scrollingElement.scrollTop;

      if (scrollTop > navbarHeight) {
        if (!shouldChangeNav) {
          setShouldChangeNav(true);
        }
      } else {
        setShouldChangeNav(false);
      }
    });
  }, [shouldChangeNav]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (showSearchBarMobile) {
      searchInputRef.current.focus();
    }
  }, [showSearchBarMobile, showMenu]);

  return (
    <>
      <DashboardLayout
        pageTitle={getTitleNavByPath}
        event={{ setShowMenu, setShowSearchBarMobile }}
        showMenu={showMenu}
        shouldChangeNav={shouldChangeNav}
        showSearchBarMobile={showSearchBarMobile}
        myRef={{ navbarRef, searchInputRef }}
      />
    </>
  );
};

export default withInteractiveDashboard;
