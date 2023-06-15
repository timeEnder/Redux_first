import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Button(){

    const isLight = useSelector(state => state.theme.light)
    return(
        <div className={'mt-48'}>
            {isLight?<h1 className={'text-black text-9xl'}>Оно белое</h1>:<h1 className={'text-amber-200 text-base'}>Оно черное</h1>}
        </div>
    )
}