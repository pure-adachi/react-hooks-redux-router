import { Action } from "redux";

export interface HandleLike extends Action {
  type: "CAT/HANDLE_LIKE";
  id: string;
}

export const handleLike = (id: string): HandleLike => {
  return {
    id,
    type: "CAT/HANDLE_LIKE"
  };
};
