import { createActionGroup, props } from '@ngrx/store';

import { Part, PartBase } from '../../models';

export const partActions = createActionGroup({
  source: 'Part',
  events: {
    createPart: props<{ part: PartBase }>(),
    createPartSuccess: props<{ part: Part }>(),
    createPartFailure: props<{ error: Error }>(),
    updatePart: props<{ part: Part }>(),
    updatePartSuccess: props<{ part: Part }>(),
    updatePartFailure: props<{ error: Error }>(),
    deletePart: props<{ id: number }>(),
    deletePartSuccess: props<{ id: number }>(),
    deletePartFailure: props<{ error: Error }>(),
  },
});
