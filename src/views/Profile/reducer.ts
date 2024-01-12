export enum ProfileReducerActionTypes {
  CHANGE_ADDRESS = 'CHANGE_ADDRESS',
  CHANGE_BIRTHDAY = 'CHANGE_ADDRESS',
  CHANGE_CITY = 'CHANGE_ADDRESS',
  CHANGE_CONFIRM_PASSWORD = 'CHANGE_ADDRESS',
  CHANGE_COUNTY = 'CHANGE_ADDRESS',
  CHANGE_PASSWORD = 'CHANGE_ADDRESS',
  CHANGE_USERNAME = 'CHANGE_ADDRESS',
  CHANGE_COUNTRY = 'CHANGE_ADDRESS',
  CHANGE_GENDER = 'CHANGE_ADDRESS',
}

export type InitialStateType = {
  username: string;
  password: string;
  confirmPassword: string;
  birthday: string;
  gender: string;
  address: string;
  city: string;
  county: string;
  country: string;
};

type PayloadActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export const profileReducer = (
  state: InitialStateType,
  action: PayloadActionType
) => {
  if (action.type === ProfileReducerActionTypes.CHANGE_USERNAME) {
    return {
      ...state,
      username: action.payload[ProfileReducerActionTypes.CHANGE_USERNAME],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload[ProfileReducerActionTypes.CHANGE_PASSWORD],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_CONFIRM_PASSWORD) {
    return {
      ...state,
      confirmPassword:
        action.payload[ProfileReducerActionTypes.CHANGE_CONFIRM_PASSWORD],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_BIRTHDAY) {
    return {
      ...state,
      birthday: action.payload[ProfileReducerActionTypes.CHANGE_BIRTHDAY],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_ADDRESS) {
    return {
      ...state,
      address: action.payload[ProfileReducerActionTypes.CHANGE_ADDRESS],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_GENDER) {
    return {
      ...state,
      gender: action.payload[ProfileReducerActionTypes.CHANGE_GENDER],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_CITY) {
    return {
      ...state,
      city: action.payload[ProfileReducerActionTypes.CHANGE_CITY],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_COUNTY) {
    return {
      ...state,
      county: action.payload[ProfileReducerActionTypes.CHANGE_COUNTY],
    };
  }
  if (action.type === ProfileReducerActionTypes.CHANGE_COUNTRY) {
    return {
      ...state,
      country: action.payload[ProfileReducerActionTypes.CHANGE_COUNTRY],
    };
  }

  return state;
};
