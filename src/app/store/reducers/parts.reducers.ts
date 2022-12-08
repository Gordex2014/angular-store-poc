import { Action, createReducer, on } from '@ngrx/store';
import { Part } from '../../models';
import { partsActions } from '../actions';

export interface PartsState {
  parts: Part[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialPartsState: PartsState = {
  parts: [],
  loading: false,
  loaded: false,
  error: null,
};

const _partsReducer = createReducer(
  initialPartsState,
  on(partsActions.loadpartsbyproductid, state => ({
    ...state,
    error: null,
    loaded: false,
    loading: true,
  })),
  on(partsActions.loadpartsbyproductidsuccess, (state, { parts }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    parts,
  })),
  on(partsActions.loadpartsbyproductidfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function partsReducer(state: PartsState | undefined, action: Action) {
  return _partsReducer(state, action);
}
