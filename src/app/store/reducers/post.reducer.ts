import { PostActionTypes, PostAction } from '../actions/post.actions';
import { Post } from '../../shared/models/post.model';

export interface PostState {
  list: Post[];
  loading: boolean;
  error: Error;
}

const initialState: PostState = {
  list: [],
  loading: false,
  error: undefined
}

export function PostReducer(state: PostState = initialState, action: PostAction) {
  switch (action.type) {
    case PostActionTypes.LOAD_POST:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.LOAD_POST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case PostActionTypes.LOAD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case PostActionTypes.ADD_POST:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case PostActionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case PostActionTypes.DELETE_POST:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        list: state.list.filter(post => post.id !== action.payload),
        loading: false
      };
    case PostActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
