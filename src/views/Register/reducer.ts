export type InitialStateType = {
  email: string;
  password: string;
  confirmPassword: string;
};

type PayloadActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export enum RegisterReducerActionTypes {
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD',
}

export const registerReducer = (
  state: InitialStateType,
  action: PayloadActionType
) => {
  if (action.type === RegisterReducerActionTypes.CHANGE_EMAIL) {
    return {
      ...state,
      email: action.payload[RegisterReducerActionTypes.CHANGE_EMAIL],
    };
  }
  if (action.type === RegisterReducerActionTypes.CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload[RegisterReducerActionTypes.CHANGE_PASSWORD],
    };
  }
  if (action.type === RegisterReducerActionTypes.CHANGE_CONFIRM_PASSWORD) {
    return {
      ...state,
      confirmPassword:
        action.payload[RegisterReducerActionTypes.CHANGE_CONFIRM_PASSWORD],
    };
  }
  return state;
};
