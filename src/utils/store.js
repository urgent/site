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
    message: false,
    focusMessage: (id) => set((state) => ({
        message: id
    }))
}));

export default useStore;