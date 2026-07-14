import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface City {
  id: string;
  name: string;
  isActive: boolean;
}

export const CITIES: City[] = [
  { id: 'btm_layout', name: 'BTM Layout, Bangalore', isActive: true },
  { id: 'koramangala', name: 'Koramangala, Bangalore', isActive: false },
  { id: 'hsr_layout', name: 'HSR Layout, Bangalore', isActive: false },
  { id: 'jayanagar', name: 'Jayanagar, Bangalore', isActive: false },
  { id: 'indiranagar', name: 'Indiranagar, Bangalore', isActive: false },
  { id: 'jp_nagar', name: 'JP Nagar, Bangalore', isActive: false },
];

interface CityStore {
  selectedCity: City | null;
  setCity: (city: City) => void;
  resetCity: () => void;
}

export const useCityStore = create<CityStore>((set) => ({
  selectedCity: null,
  setCity: (city) => set({ selectedCity: city }),
  resetCity: () => set({ selectedCity: null }),
}));
