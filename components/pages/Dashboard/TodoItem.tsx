/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";
import IconDotsHorizontal from "@/public/assets/svg/icon-dots-horizontal.svg";
import { ListGroup } from "flowbite-react";
import useComponentVisible from "@/hooks/useComponentVisible";
import dayjs from "dayjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";
import { TodoItemProps } from "./types";

const TodoItem = ({
  setReloadTodos,
  uuid,
  children,
  timestamp,
  done = false,
  className
}: TodoItemProps) => {
  const supabaseClient = useSupabaseClient();
  const [showPopover, setShowPopover] = useState(false);
  const deleteFn = async () => {
    const { error } = await supabaseClient
      .from("todos")
      .delete()
      .eq("uuid", uuid);
    if (error) {
      console.log(error);
      toast.error("There was an error");
    } else {
      setReloadTodos((state: boolean) => !state);
    }
  };
  const updateFn = async (completed: any) => {
    const { error } = await supabaseClient
      .from("todos")
      .update({ completed })
      .eq("uuid", uuid);
    if (error) {
      console.log(error);
      toast.error("There was an error");
      return;
    }
    setReloadTodos((state: boolean) => !state);
  };
  const togglePopover = () => {
    setShowPopover((prevValue) => !prevValue);
  };

  const { ref } = useComponentVisible(showPopover, setShowPopover);

  return (
    <span className={`flex flex-col ${className}`}>
      <div
        className={`relative flex justify-between rounded ${
          done ? "bg-primary-200" : "bg-gray-200"
        } p-4`}
      >
        <p className="text-gray-900">{children}</p>
        <Image
          className="cursor-pointer hover:opacity-50"
          src={IconDotsHorizontal}
          alt="Icon"
          onClick={togglePopover}
          ref={ref}
        />
        <ListGroup
          className={`${
            !showPopover ? "hidden" : ""
          } absolute right-0 top-10 z-10`}
        >
          <ListGroup.Item onClick={deleteFn}>Delete</ListGroup.Item>
          {done ? (
            <ListGroup.Item onClick={() => updateFn(false)}>
              Mark Uncompleted
            </ListGroup.Item>
          ) : (
            <ListGroup.Item onClick={() => updateFn(true)}>
              Mark Completed
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
      <time className="mt-2 self-end text-xs text-gray-600">
        {dayjs(timestamp).format("MMM DD, YYYY h:mm A")}
      </time>
    </span>
  );
};

export default TodoItem;
