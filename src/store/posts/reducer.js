const initialState = {
  posts: [],
  post: {},
  comments: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET/posts": {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case "SET/post": {
      return {
        ...state,
        post: { ...action.payload },
      };
    }

    case "SET/comments": {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
