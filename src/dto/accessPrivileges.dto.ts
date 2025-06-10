import { MenuChild } from "./menuChild.dto";

export interface AccessPrivilege {
  id: number;
  description: string;
  menu_child?: MenuChild;
}
