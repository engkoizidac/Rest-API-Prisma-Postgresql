import { MenuMain } from "./menuMain.dto";

export interface MenuChild {
  id: number;
  name: string;
  menuMain: MenuMain;
}
