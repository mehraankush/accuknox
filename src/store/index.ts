import create from 'zustand';
import { DummyDashBoardData } from '@/data/dummyJson';

interface Widget {
    title: string;
    describe: string;
}

interface Category {
    category: string;
    categoryDisplayName: string;
    widgets: Widget[];
}
interface CategoryReturnType {
    category: string;
    categoryDisplayName: string;
}

interface DashboardState {
    categories: Category[];
    searchTerm: string;
    addWidget: (category: string, widget: Widget) => void;
    removeWidget: (category: string, title: string) => void;
    addCategory: (categoryName: string, categoryDisplayName: string, widgets?: Widget[]) => void;
    setSearchTerm: (term: string) => void;
    getFilteredWidgets: () => {
        category: string;
        categoryDisplayName: string;
        widgets: Widget[];
    }[]
}

const useDashboardStore = create<DashboardState>((set,get) => ({
    categories: [...DummyDashBoardData],
    searchTerm: '',
    addWidget: (category, widget) =>
        set((state) => ({
            categories: state.categories.map((c) =>
                c.category === category
                    ? { ...c, widgets: [...c.widgets, widget] }
                    : c
            )
        })),
    removeWidget: (category, widgetTitle) =>
        set((state) => ({
            categories: state.categories.map((c) =>
                c.category === category
                    ? { ...c, widgets: c.widgets.filter((w) => w.title !== widgetTitle) }
                    : c
            )
        })),
    addCategory: (categoryName, categoryDisplayName, widgets = []) =>
        set((state) => ({
            categories: [
                ...state.categories,
                {
                    category: categoryName,
                    categoryDisplayName: categoryDisplayName,
                    widgets: widgets
                }
            ]
        })),
    setSearchTerm: (term: string) => set({ searchTerm: term }),
    getFilteredWidgets: () => {
        
        const state = get();
        const filteredWidgets: {
            category: string;
            categoryDisplayName: string;
            widgets: Widget[];
        }[] = [];

        if (!state.searchTerm || state.searchTerm.trim() === '') {
            return [];
        }

        state.categories.forEach((category: Category) => {
            const filteredCategoryWidgets = category.widgets.filter((widget: Widget) =>
                widget.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                widget.describe.toLowerCase().includes(state.searchTerm.toLowerCase())
            );

            if (filteredCategoryWidgets.length > 0) {
                filteredWidgets.push({
                    category: category.category,
                    categoryDisplayName: category.categoryDisplayName,
                    widgets: filteredCategoryWidgets
                });
            }
        });

        return filteredWidgets;
    },
}));

export default useDashboardStore;