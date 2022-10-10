import { useState } from 'react';

type UseFetchingCallback = (limit: number, page: number) => Promise<void>

export const useFetching = (callback: UseFetchingCallback): [UseFetchingCallback, boolean, (string | null)] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetching = async (limit: number, page: number): Promise<void> => {
    try {
      setIsLoading(true);
      await callback(limit, page);
      setError(null);
    } catch (e: unknown | Error) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
