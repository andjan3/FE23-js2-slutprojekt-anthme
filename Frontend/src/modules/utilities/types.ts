type Error = {
  statusCode: number;
  message: string;
}

type SuccessfulResponse = {
  message: string;
}

type User = {
  id?: string;
  username: string;
  password: string;
  userImage: string;
  posts?: string[];
  comments?: string[];
  created?: number;
};

type Post = {
  id: string;
  category: string;
  title: string;
  body: string;
  created: string;
  comments: string[];
  user: {
    id: string;
    username: string;
    userImage: string;
  };
  rating: Rating;
};

type Rating = {
  upvotes: string[];
  downvotes: string[];
}

type Comment = {
  id: string;
  body: string;
  created: string;
  postId:string;
  user: {
    id: string;
    created?: string;
    username: string;
    userImage: string;
  };
};

type Category = {
  name: string;
  color: string;
  icon: string;
  category: string;
};

type NavMainCategory = {
  label: string;
  id: string;
  items: NavSubCategory[];
};

type NavSubCategory = {
  name: string;
  url: string;
};

export {Error, SuccessfulResponse, User, Post, Rating, Comment, Category, NavMainCategory };