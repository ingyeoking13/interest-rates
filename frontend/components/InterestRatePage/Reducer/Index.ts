import _ from 'lodash';

export interface IInput {
  money?: number;
  rates?: number;
  period?: number;
}

export interface IInputReducer {
  value: IInput;
  type?: string;
}

export const InterestRatePageReducer = (state: IInput, action: IInputReducer) => {
    if (action.type === 'controlled') {
        return {
            ...state,
            ...action.value
        } as IInput;
    }

    const newObj =  {
        ...action.value
    }

    const oriObj = {
        ...state
    }

    _.entries(newObj)
    .forEach(([k, v])=> {
        oriObj[k] = oriObj[k] + v
    })

    return {
        ...oriObj
    } as IInput;
};