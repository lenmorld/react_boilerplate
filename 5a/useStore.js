import create from "zustand";

const useStore = create((set, get) => ({
  data: null,
  cache: {},
  isFetching: false,
  fetchData: async (url, uniqueId) => {
    const { isFetching, cache } = get();

    console.log(`${uniqueId} fetch function runs`);

    const cachedResults = cache[url];

    if (isFetching) {
      console.log("⏳ Fetch in progress...");
    } else if (cachedResults) {
      console.log("✅ Using cached data");
      set({ data: cachedResults });
    } else {
      console.log("🌏 Fetching...");

      set({ isFetching: true });

      const raw = await fetch(url);
      const result = await raw.json();

      set({ isFetching: false });

      console.log("📦 Data arrives!", result);

      // memoize the payload of the given URL
      set({
        cache: {
          ...cache,
          [url]: result,
        },
      });

      set({ data: result });
      set({ isFetching: false });
    }
  },
}));

export default useStore;
