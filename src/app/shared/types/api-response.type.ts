export interface ApiGenericResponse<T> {
  succeeded: boolean;
  data: T;
  errors: any[];
}
