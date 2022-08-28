type Props = {
  id?: number;
  style?: React.CSSProperties;
  onSubmit: (values: any) => void;
  children?: JSX.Element;
};

const Form: React.FC<Props> = ({ id, onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
