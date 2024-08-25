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

interface DashboardState {
    categories: Category[];
    addWidget: (category: string, widget: Widget) => void;
    removeWidget: (category: string, title: string) => void;
    addCategory: (categoryName: string, categoryDisplayName: string, widgets?: Widget[]) => void;
}

const useDashboardStore = create<DashboardState>((set) => ({
    categories: [...DummyDashBoardData],
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
}));

export default useDashboardStore;