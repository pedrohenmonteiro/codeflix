import { createSlice } from "@reduxjs/toolkit"

interface Category {
  id: string
  name: string
  is_active: boolean
  created_at: string
  description: string | null
  updated_at: string | null
  deleted_at: string | null
}

const category: Category = {
  id: "xxxxxxxx",
  name: "Olive",
  description: "Olive is the most popular vegetable in the world.",
  is_active: true,
  deleted_at: null,
  created_at: "2023-05-24T14:20:00.000Z",
  updated_at: "2023-05-24T14:20:00.000Z",
}

export const initialState = [
  category,
  { ...category, id: "xxxxxxxx", name: "Peach", description: "Peach" },
  { ...category, id: "xxxxxxxx", name: "Apple", description: "Apple" },
  { ...category, id: "xxxxxxxx", name: "Banana", description: "Banana" },
]

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
})

export default categoriesSlice.reducer
