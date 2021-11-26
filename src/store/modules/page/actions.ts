export function nextPage(lastPage: number) {
  return {
    type: "NEXT_PAGE",
    payload: {
      lastPage,
    },
  };
}

export function previousPage() {
  return {
    type: "PREVIOUS_PAGE",
  };
}
