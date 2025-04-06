import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, storage } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const submitData = createAsyncThunk(
  'data/submitData',
  async ({ name, file }) => {
    const storageRef = ref(storage, `uploads/${file.name}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)

    const docRef = await addDoc(collection(db, 'submissions'), {
      name,
      fileUrl: url,
    })

    return { id: docRef.id, name, fileUrl: url }
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(submitData.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(submitData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default dataSlice.reducer
