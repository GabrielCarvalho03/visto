const SquareCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="281"
    height="159"
    fill="none"
    viewBox="0 0 281 159"
    className={props.className}
  >
    <path
      stroke="url(#paint0_linear_0_213)"
      d="M1 159V61C1 27.863 27.863 1 61 1h220"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_0_213"
        x1="141"
        x2="141"
        y1="1"
        y2="158.572"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8D8D8D" stopOpacity="0.5"></stop>
        <stop offset="1" stopColor="#878889" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SquareCircle;
