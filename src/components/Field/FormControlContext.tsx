import { createContext, useContext } from 'react';

type FormControlContextValue = {
  displaysError: boolean;
};

export const FormControlContext = createContext<FormControlContextValue>({
  displaysError: false
});

export const useFormControlContext = () => useContext(FormControlContext);
