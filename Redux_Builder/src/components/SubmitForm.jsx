import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitData } from '../features/dataSlice'

const SubmitForm = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.data)
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && file) {
      dispatch(submitData({ name, file }))
      setName('')
      setFile(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
      />
      <input
        type='file'
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type='submit' disabled={loading}>
        {loading ? 'Uploading...' : 'Submit'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default SubmitForm
