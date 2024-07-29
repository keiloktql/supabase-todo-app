/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import MainLayout from "@/components/layout/MainLayout";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import FormField from "@/components/shared/FormField";
import Button from "@/components/shared/Button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TodoItem from "./TodoItem";

const Dashboard = () => {
  const validationSchema = Yup.object().shape({
    todoData: Yup.string().required("Required field.")
  });
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [todos, setTodos] = useState<any>([]);
  const [reloadTodos, setReloadTodos] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabaseClient
        .from("todos")
        .select()
        .order("created_at", { ascending: false });
      console.log(data);
      if (error) {
        console.log(error);
        return;
      }
      setTodos(data as any);
    })();
  }, [reloadTodos]);

  const onSubmitFn = async ({ todoData }: any, resetForm: any) => {
    const { error } = await supabaseClient
      .from("todos")
      .insert({ content: todoData, uuid: user?.id });
    if (error) {
      console.log(error);
      toast.error("There was an error");
      return;
    }
    setReloadTodos((state: boolean) => !state);
    resetForm();
  };

  return (
    <MainLayout className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-16">
        <div className="mt-20 text-center">
          <h1 className="font-bold text-display-lg">To-do List</h1>
          <p className="text-xl text-gray-600">
            What are your goals for today? Allez!
          </p>
        </div>
        <div className="flex flex-col w-full max-w-screen-sm">
          <Formik
            initialValues={{
              todoData: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => onSubmitFn(values, resetForm)}
          >
            {({ isValid, dirty }) => (
              <Form className="flex w-full mt-8">
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
          <div className="mt-4">
            {todos.length ? (
              todos.map((todo: any, index: number) => (
                <TodoItem
                  key={index}
                  uuid={todo.uuid}
                  done={todo.completed}
                  timestamp={todo.created_at}
                  setReloadTodos={setReloadTodos}
                  className="mt-4"
                >
                  {todo.content}
                </TodoItem>
              ))
            ) : (
              <p>There are no todos</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
