export interface TodoItemProps {
  setReloadTodos: any;
  uuid: string | null;
  children: any;
  timestamp: string | null;
  done?: boolean;
  className?: string;
}
