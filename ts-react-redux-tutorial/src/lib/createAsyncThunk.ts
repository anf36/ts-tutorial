import { AsyncActionCreatorBuilder} from 'typesafe-actions';
import { Dispatch } from 'redux';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any,any,any>;

export default function createAsyncThunk<A extends AnyAsyncActionCreator, F extends (...params: any[]) => Promise<any>>(
  asyncActionCreatorBuilder: A,
  promiseCreator: F
){
  type Params = Parameters<F>;
  return function thunk(...params: Params){
    return async (dispatch: Dispatch) =>{
      const {request, success, failure} = asyncActionCreatorBuilder;
      dispatch(request(undefined));
      try{
        const result = await promiseCreator(...params);
        dispatch(success(result));
      }catch(e){
        dispatch(failure(e));
      }
    };
  };
}