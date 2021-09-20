import create from "zustand";

const useStore = create((set) => ({
    filter: [],
    addFilter: (tag) => set((state) => ({
        filter: [tag, ...state.filter]
    })),
    removeFilter: (id) => set((state) => {
        const indexToRemove = state.filter.indexOf(id)
        return {
            filter: state.filter.filter((tag) => tag !== id),
            filterName: [...state.filterName.slice(0, indexToRemove), ...state.filterName.slice(indexToRemove + 1)],
            filterColor: [...state.filterColor.slice(0, indexToRemove), ...state.filterColor.slice(indexToRemove + 1)],
        }
    }),
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
    filterColor: [],
    addFilterColor: (tag) => set((state) => ({
        filterColor: [tag, ...state.filterColor]
    })),
    editorValue: '',
    setEditorValue: (value) => set((state) => ({
        editorValue: value
    })),
    editMessage: false,
    setEditMessage: (toggle) => set((state) => ({
        editMessage: toggle
    })),

}));

export default useStore;