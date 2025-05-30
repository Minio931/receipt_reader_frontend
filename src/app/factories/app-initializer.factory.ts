import { translocoFactory } from './transloco.factory';

export const appInitializerFactory = async (): Promise<void> => {
  await translocoFactory();
};
