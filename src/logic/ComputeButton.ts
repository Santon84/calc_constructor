import { useDispatch } from 'react-redux';
import { addNum, delNum } from '../store/currentNumStore';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const ComputeButton = (event: React.MouseEvent<Element, MouseEvent>) => {
    const target = event.target as HTMLElement;
    const active  = useSelector((state:RootState) => state.currentNumber);
    console.log('compute2');
    console.log(active);
    const key = target.innerText;
    const dispatch = useDispatch();
    dispatch(addNum(6))
    if (key === 'AC') {
        dispatch(delNum);
    }
}



