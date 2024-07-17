const AnalyticIcon = ({ className, ...props }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#7B40F2" />
      <path
        d="M21.25 37.5H28.75C35 37.5 37.5 35 37.5 28.75V21.25C37.5 15 35 12.5 28.75 12.5H21.25C15 12.5 12.5 15 12.5 21.25V28.75C12.5 35 15 37.5 21.25 37.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.375 33.125C30.75 33.125 31.875 32 31.875 30.625V19.375C31.875 18 30.75 16.875 29.375 16.875C28 16.875 26.875 18 26.875 19.375V30.625C26.875 32 27.9875 33.125 29.375 33.125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.625 33.125C22 33.125 23.125 32 23.125 30.625V26.25C23.125 24.875 22 23.75 20.625 23.75C19.25 23.75 18.125 24.875 18.125 26.25V30.625C18.125 32 19.2375 33.125 20.625 33.125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AnalyticIcon;
