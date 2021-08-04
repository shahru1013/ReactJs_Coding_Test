import * as types from './types';
const initialState = {
    data:[],
    currentPost:[]
}
const dataReducer = (state=initialState,action)=>{
    let newData = {...state};
    if(action.type===types.mainData){
        newData.data=action.payload.data;
    }
    if(action.type===types.singleData){
        newData.currentPost=newData.data.filter((post) => post.id === action.payload.id);
    }
    if(action.type===types.deleteData){
        newData.data=newData.data.filter((post) => post.id !== action.payload.id)
    }
    return newData;
}
export default dataReducer;