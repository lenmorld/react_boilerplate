import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      data: null,
      cache: {},
      isFetching: false,
      fetchData: async (url, uniqueId) => {
        const { isFetching, cache } = get();
        const cachedResults = cache[url];

        console.log(`${uniqueId} fetch function runs`);
        console.log(`${uniqueId} cache: `, cache);

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
    }),
    {
      name: "cache-storage", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;
