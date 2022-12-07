export interface GenericResponse<T> {
  succeeded: boolean;
  data: T;
  errors: any[];
}
