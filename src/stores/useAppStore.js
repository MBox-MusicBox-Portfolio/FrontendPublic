import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const isSideBarOpen = ref(false);
  const setIsSideBarOpen = (isOpen) => {
    isSideBarOpen.value = isOpen;
  };

  return {
    isSideBarOpen,
    openSidePanel: () => setIsSideBarOpen(true),
    closeSidePanel: () => setIsSideBarOpen(false),
  };
});
