export const preventNavigation = (event: BeforeUnloadEvent) => {
  event.preventDefault();
  event.returnValue = '';
};
