import React from 'react'
import cx from "clsx";
import * as styles from "../../utils/styles";

type Props = {
  show?: boolean;
  className?: string;
  color?: string;
  size?: number | string;
};

export default function Spinner({
  className,
  show = true,
  color = "white",
  size = 5,
}: Props) {
  const elementClassName = cx(
    "Spinner",
    `animate-spin -ml-1 mr-3 h-${size} w-${size} text-${color}`,
    className,
    styles.transition,
    show ? "opacity-50" : "opacity-0 pointer-events-none"
  );

  return (
    <svg
      className={elementClassName}
      style={{ margin: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

// function Cover({
//   show = true,
//   spinner = true,
// }: {
//   show?: boolean;
//   spinner?: boolean;
// }) {
//   return (
//     <div
//       className={cx(
//         "absolute z-2 top-0 left-0 w-full h-full bg-gray-100 select-none",
//         styles.transition,
//         show ? "opacity-50" : "opacity-0 pointer-events-none"
//       )}
//     >
//       {spinner && (
//         <div className="flex flex-row items-center justify-center w-full mt-3">
//           <Spinner color={`${styles.baseColor}-400`} size={10} />
//         </div>
//       )}
//     </div>
//   );
// }

// function Block() {
//   return (
//     <div className="w-full p-6 rounded grid place-items-center bg-gray-50">
//       <Spinner color={`${styles.baseColor}-400`} size={10} />
//     </div>
//   );
// }

// Spinner.Cover = Cover;
// Spinner.Block = Block;
