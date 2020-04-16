import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
// this is called in Posts like this.props.getData();
export function getData() {
  return { type: "DATA_REQUESTED" };
}