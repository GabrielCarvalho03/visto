const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
    ></path>
  </svg>
);

export default ArrowRight;
