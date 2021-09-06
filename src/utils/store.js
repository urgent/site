import create from "zustand";

const useStore = create((set) => ({
    filter: [],
    addFilter: (tag) => set((state) => ({
        filter: [tag, ...state.filter]
    })),
    removeFilter: (id) => set((state) => ({
        filter: state.filter.filter((tag) => tag !== id),
    })),
    edit: false,
    toggleEdit: () => set(state => ({
        edit: !state.edit
    })),
    organization: false,
    focusOrganization: (id) => set((state) => ({
        organization: id
    })),
    message: [false],
    focusMessage: (id) => set((state) => ({
        message: id
    })),
    filterName: [],
    addFilterName: (tag) => set((state) => ({
        filterName: [tag, ...state.filterName]
    })),
    removeFilterName: (name) => set((state) => ({
        filterName: state.filterName.filter((tag) => tag !== name),
    })),
    filterColor: [],
    addFilterColor: (tag) => set((state) => ({
        filterColor: [tag, ...state.filterColor]
    })),
    removeFilterColor: (color) => set((state) => ({
        filterColor: state.filterColor.filter((tag) => tag !== color),
    }))
}));

export default useStore;