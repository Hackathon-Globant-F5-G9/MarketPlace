import axiosInstance from "./axios-instance";
import { Comic } from "../types/index.ts";

const API_URL = "/comics";

//Fetch all comics
export const fetchComics = async (): Promise<Comic[]> => {
  const response = await axiosInstance.get<Comic[]>(API_URL);
  return response.data;
};

//Fetch a single comic by ISBN
export const getComicByISBNFromAPI = async (ISBN: string): Promise<Comic> => {
  const response = await axiosInstance.get<Comic>(`${API_URL}/by-isbn/${ISBN}`);
  return response.data;
};

//Add a new comic
export const addNewComic = async (
  comic: Omit<Comic, "ISBN">
): Promise<Comic> => {
  const response = await axiosInstance.post<Comic>(API_URL, comic);
  return response.data;
};

// Update an existing comic
export const updateApiComic = async (
  ISBN: string,
  updatedComic: Partial<Comic>
): Promise<Comic> => {
  const response = await axiosInstance.put<Comic>(
    `${API_URL}/by-isbn/${ISBN}`,
    updatedComic
  );
  return response.data;
};

// Delete a comic
export const deleteComic = async (ISBN: string): Promise<void> => {
  await axiosInstance.delete(`${API_URL}/by-isbn/${ISBN}`);
};

//getComicById
