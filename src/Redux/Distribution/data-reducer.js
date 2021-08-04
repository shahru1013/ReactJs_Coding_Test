import * as types from './types';
const initialState = {
    data:[],
    currentPost:[]
}
const dataReducer = (state=initialState,action)=>{
    let newData = {...state};
    if(action.type===types.mainData){
        //update main data to data state
        newData.data=action.payload.data;
    }
    if(action.type===types.singleData){
        //store the clicked post to currentpost state
        newData.currentPost=newData.data.filter((post) => post.id === action.payload.id);
    }
    if(action.type===types.deleteData){
        //delete the post from data state and update it
        newData.data=newData.data.filter((post) => post.id !== action.payload.id)
    }
    return newData;
}
export default dataReducer;