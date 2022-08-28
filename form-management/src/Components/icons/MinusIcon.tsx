const MinusIcon = ({ ...props }: { height?: number; width?: number }) => {
  return (
    <svg
      width={props.height || 11}
      height={props.width || 11}
      viewBox="0 0 469.33333 469"
    >
      <path
        d="M0,200 m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
        fill="#ffffff"
        data-original="#000000"
        x="20"
        y="50"
      ></path>
    </svg>
  );
};
export default MinusIcon;
