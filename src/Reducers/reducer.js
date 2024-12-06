export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      const exists = state.favs.some((fav) => fav.id === action.payload.id);
      if (exists) return state; 
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV": 
      const filterFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filterFavs };
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };
  }
};
