const initialState = {
  posts: [],
  post: null,
  comments: [],
  genres: [],
  likes: [],
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

    case "SET/genres": {
      return {
        ...state,
        genres: action.payload,
      };
    }

    case "SET/likes": {
      return {
        ...state,
        likes: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
