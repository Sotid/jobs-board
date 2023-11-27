export function useJobs() {
  const { data, error } = useFetch("/api/jobs");
  return {
    data,
    error,
  };
}



