import {EMAIL_CHANGED} from './types';

export const emailchanged=(text)=>{
    return{
       type:EMAIL_CHANGED,
       playload:text
    };
};