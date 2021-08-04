import * as types from './types';
//Fetch and set data
export const setAllData=(data)=>{
    return{
        type:types.mainData,
        payload:{
            data:data
        },
    };
};
//load clicked post details
export const loadCurrentPost=(id)=>{
    return{
        type:types.singleData,
        payload:{
            id:id
        },
    };
};
//delete a post action
export const deletePost=(id)=>{
    return{
        type:types.deleteData,
        payload:{
            id:id
        },
    };
};