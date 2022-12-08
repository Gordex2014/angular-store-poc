import { Action, createReducer, on } from '@ngrx/store';
import { Part } from '../../models';
import { partActions } from '../actions';

export interface PartState {
  part: Part | undefined;
  loading: boolean;
  changed: boolean;
  error: any;
}

export const initialPartState: PartState = {
  part: undefined,
  loading: false,
  changed: false,
  error: null,
};

const _partReducer = createReducer(
  initialPartState,
  on(partActions.createpart, state => ({
    ...state,
    loading: true,
    changed: false,
    error: null,
  })),
  on(partActions.createpartsuccess, (state, { part }) => ({
    ...state,
    loading: false,
    changed: true,
    error: null,
    part,
  })),
  on(partActions.createpartfailure, (state, { error }) => ({
    ...state,
    loading: false,
    changed: false,
    error,
  })),
  on(partActions.deletepart, state => ({
    ...state,
    loading: true,
    changed: false,
    error: null,
  })),
  on(partActions.deletepartsuccess, state => ({
    ...state,
    loading: false,
    changed: true,
    error: null,
  })),
  on(partActions.deletepartfailure, (state, { error }) => ({
    ...state,
    loading: false,
    changed: false,
    error,
  })),
  on(partActions.updatepart, state => ({
    ...state,
    loading: true,
    changed: false,
    error: null,
  })),
  on(partActions.updatepartsuccess, (state, { part }) => ({
    ...state,
    loading: false,
    changed: true,
    error: null,
    part,
  })),
  on(partActions.updatepartfailure, (state, { error }) => ({
    ...state,
    loading: false,
    changed: false,
    error,
  }))
);

export function partReducer(state: PartState | undefined, action: Action) {
  return _partReducer(state, action);
}
