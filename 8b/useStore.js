import create from "zustand";
import { persist } from "zustand/middleware";

const CACHE_EXPIRY_MS = 86400000 // day
// const CACHE_EXPIRY_MS = 7000 // 7s

/**
 * add a timestamp to cache
 *
 * {
 *  url1: {
 *    data: {...},
 *    createdAt: timeStamp
 *  }
 * }
 */

const isCacheExpired = (cacheItem) => {
  const cacheCreatedAt = cacheItem?.createdAt;
  const currentTime = Date.now()

  const cacheExpired = (currentTime - cacheCreatedAt > CACHE_EXPIRY_MS)

  console.log("cacheExpired: ", {
    cacheExpired,
    diff: currentTime - cacheCreatedAt
  })

  return cacheExpired
}


const useStore = create(
  persist(
    (set, get) => ({
      data: null,
      cache: {},
      isFetching: false,
      fetchData: async (url, uniqueId, forceClearCache) => {
        const { isFetching, cache } = get();
        const cachedItem = cache[url];

        console.log(`${uniqueId} fetch function runs`);
        console.log(`${uniqueId} cache: `, cache);

        if (isFetching) {
          console.log("⏳ Fetch in progress...");
          // } else if (cache[url]) {
        } else if (!forceClearCache && cachedItem && !isCacheExpired(cachedItem)) {
          // only use cache if not "expired" yet
          console.log("✅ Using cached data");
          set({ data: cachedItem?.data });
        } else {
          if (cachedItem && isCacheExpired(cachedItem)) {
            console.log("🔥 Cache expired! refetch")
          }

          if (forceClearCache) {
            console.log("💣 Nuke the cache!")
          }

          console.log("🌏 Fetching...");

          set({ isFetching: true });

          const raw = await fetch(url);
          const result = await raw.json();

          set({ isFetching: false });

          console.log("📦 Data arrives!", result);

          // memoize the payload of the given URL

          // add a timestamp to cache
          const timestamp = Date.now();

          if (forceClearCache) {
            set({
              cache: {
                // ...cache, // don't spread all values, just new one
                // [url]: result,
                [url]: {
                  createdAt: timestamp,
                  data: result,
                },
              },
            });

          } else {
            // just set the current url
            set({
              cache: {
                ...cache,
                // [url]: result,
                [url]: {
                  createdAt: timestamp,
                  data: result,
                },
              },
            });
          }

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
