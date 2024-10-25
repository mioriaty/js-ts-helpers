export async function retryAsync<T>(fn: () => Promise<T>, retries: number = 5) {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.log("Retrying...");
      return await retryAsync(fn, retries - 1);
    }
    throw error;
  }
}

// example usage

retryAsync(() => Promise.resolve("foo")).then(data => {
  console.log(data)
});
