import { HTMLAttributes } from "react";

function LogoWordMark({ ...props }: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 784 589"
    >
      <path
        fill="#060606"
        d="M716.091.917a1.3 1.3 0 0 1 2.483 0l13.761 44.727a8.1 8.1 0 0 0 5.354 5.354l44.727 13.761a1.3 1.3 0 0 1 0 2.483l-44.727 13.761a8.1 8.1 0 0 0-5.354 5.354l-13.761 44.727a1.3 1.3 0 0 1-2.483 0L702.33 86.357a8.1 8.1 0 0 0-5.354-5.354L652.25 67.242a1.3 1.3 0 0 1 0-2.483l44.726-13.761a8.1 8.1 0 0 0 5.354-5.354z"
      ></path>
      <path
        fill="#070707"
        fillRule="nonzero"
        d="m587.582 439.367-54.478 40.455V100.506h146.452v488.45H533.104L91.974 256.205l54.485-41.216v373.967H0v-488.45h146.46z"
      ></path>
    </svg>
  );
}

function LogoLetterMark() {
  return <></>;
}

export { LogoLetterMark, LogoWordMark };
