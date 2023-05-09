/* eslint-disable no-unused-vars */
import React from "react";
import Image from "next/image";
import IconDotsHorizontal from "@/public/assets/svg/icon-dots-horizontal.svg";
import { ListGroup } from "flowbite-react";
import { TodoItemProps } from "./types";

const TodoItem = ({ children, timestamp, done = false }: TodoItemProps) => {
  const deleteFn = () => {};

  return (
    <span className="flex flex-col">
      <div className="flex justify-between rounded bg-gray-200 p-4">
        <p className="text-gray-900">{children}</p>
        <Image
          className="cursor-pointer hover:opacity-50"
          src={IconDotsHorizontal}
          alt="Icon"
        />
        <ListGroup>
          <ListGroup.Item>Delete</ListGroup.Item>
          <ListGroup.Item>Mark Completed</ListGroup.Item>
        </ListGroup>
      </div>
      <time className="mt-2 self-end text-xs text-gray-600">{timestamp}</time>
    </span>
  );
};

export default TodoItem;
