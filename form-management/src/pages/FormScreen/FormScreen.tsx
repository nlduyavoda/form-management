import Form from "../../Components/Form";

const FormEdit = ({ params }: { params: { id: number } }) => {
  return <Form id={params.id} />;
};

const FormCreate = () => {
  return <Form />;
};

function FormScreen() {
  const params = { id: 123 };
  return params ? <FormEdit params={params} /> : <FormCreate />;
}

export default FormScreen;
