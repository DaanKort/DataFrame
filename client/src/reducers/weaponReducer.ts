import { IWeapons } from '../interfaces';

const defaultState: IWeapons = {
  weapons: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type WeaponState = {}

export const weaponReducer =  (
  state: WeaponState = defaultState,
  action: IWeapons
  ) => {
  switch (action.type) {
    case 'REQUEST_WEAPON_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_WEAPON_DATA':
      return {
        ...state,
        isLoading: false,
        weapons: action.payload,
      };
    case 'REQUEST_WEAPON_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Gaat nie goed he'
      };
    default:
      return state;
  }
}
