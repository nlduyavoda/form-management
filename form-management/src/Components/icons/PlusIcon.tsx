const PlusIcon = ({ ...props }: { height?: number; width?: number }) => {
  return (
    <svg
      width={props.width || 11}
      height={props.height || 11}
      x="0"
      y="0"
      viewBox="0 0 512 512"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m304 512h-96c-17.679688 0-32-14.320312-32-32v-144h-144c-17.679688 0-32-14.320312-32-32v-96c0-17.679688 14.320312-32 32-32h144v-144c0-17.679688 14.320312-32 32-32h96c17.679688 0 32 14.320312 32 32v144h144c17.679688 0 32 14.320312 32 32v96c0 17.679688-14.320312 32-32 32h-144v144c0 17.679688-14.320312 32-32 32zm0 0"
        fill="#ffffff"
        data-original="#48c8ef"
      ></path>
    </svg>
  );
};
export default PlusIcon;
