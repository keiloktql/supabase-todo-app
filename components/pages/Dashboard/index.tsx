import MainLayout from "@/components/layout/MainLayout";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormField from "@/components/shared/FormField";
import Button from "@/components/shared/Button";
import TodoItem from "./TodoItem";

const Dashboard = () => {
  const validationSchema = Yup.object().shape({
    todoData: Yup.string().required("Required field.")
  });

  const onSubmitFn = () => {
    console.log("clicked submit");
  };

  return (
    <MainLayout className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-16">
        <div className="mt-20 text-center">
          <h1 className="text-display-lg font-bold">To-do List</h1>
          <p className="text-xl text-gray-600">
            What are your goals for today? Allez!
          </p>
        </div>
        <div className="flex w-full max-w-screen-sm flex-col">
          <Formik
            initialValues={{
              todoData: ""
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitFn}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-8 flex w-full">
                <FormField
                  fieldName="todoData"
                  placeholder="Walk the dog at 6pm..."
                  disabled={false}
                  className="w-full"
                />
                <Button
                  disabled={!dirty || !isValid}
                  type="submit"
                  customClassName="ml-4"
                >
                  Add
                </Button>
              </Form>
            )}
          </Formik>
          <TodoItem timestamp="Friday 2:20pm">Walk the dog</TodoItem>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
