import { createContext } from 'react';
//react  context() 新的API

const Context = createContext({});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;