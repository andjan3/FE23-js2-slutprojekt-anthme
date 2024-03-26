import * as template from "./templates/post-preview.ts"
import {replace, stringToDOM} from "../../utilities/templateUtils.ts";

type Post = {
  id: string;
  category: string;
  title: string;
  body: string;
  userImg: string;
  comments: string[];
};

export default class postPreview {
  static create(post: Post): HTMLElement {
    let previewTemplate = template.postPreview;

    previewTemplate = replace(previewTemplate, [
      { pattern: "postId", replacement: post.id },
      { pattern: "link", replacement: `/posts/${post.id}` },
      { pattern: "category", replacement: post.category }, //Update this
      { pattern: "age", replacement: "16h" }, //Update this
      { pattern: "title", replacement: post.title },
      { pattern: "body", replacement: post.body },
      { pattern: "comments", replacement: post.comments.length.toString() },
    ]);

    const postPreview = stringToDOM(previewTemplate);

    return postPreview;
  }
}
