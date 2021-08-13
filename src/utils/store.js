import create from "zustand";

const useStore = create((set) => ({
    filter: [],
    addFilter: (tag) => set((state) => ({
        filter: [tag, ...state.filter]
    })),
    removeFilter: (id) => set((state) => ({
        filter: state.filter.filter((tag) => tag !== id),
    })),
}));

export default useStore;