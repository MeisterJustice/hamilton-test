export type ICallbackProps = {
  onSuccess?: Function;
  onError?: Function;
};
export type IAction = {
  type: string;
  id: string;
  payload: any;
  callback?: { onSuccess?: Function; onError?: Function };
};
