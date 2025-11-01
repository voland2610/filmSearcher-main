import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],

  toggleFavorite: (film) =>
    set((state) => {
      const isFavorite = state.favorites.some((f) => f.id === film.id);

      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = state.favorites.filter((f) => f.id !== film.id);
      } else {
        updatedFavorites = [...state.favorites, film];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      
      return { favorites: updatedFavorites };
    }),
}));
