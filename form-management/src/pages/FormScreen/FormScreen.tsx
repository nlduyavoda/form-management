import FormWrapper from "./FormWrapper";

const FormEdit = ({ params }: { params: { id: number } }) => {
  return <FormWrapper id={params.id} />;
};

const FormCreate = () => {
  return <FormWrapper />;
};

function FormScreen() {
  const params = { id: 123 };
  return params ? <FormEdit params={params} /> : <FormCreate />;
}

export default FormScreen;
