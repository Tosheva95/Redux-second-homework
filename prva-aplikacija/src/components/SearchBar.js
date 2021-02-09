import React, { useState } from 'react'
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchAlbum } from '../redux/albums/albums'

const SearchBar = () => {
  const [searchText, saveSearchText] = useState('')
  const [choose, setChoose] = useState('Choose')
  const [disable, setDisable] = useState(true)

  const dispatch = useDispatch()

  const saveText = (event) => {
    const { value } = event.target
    saveSearchText(value)
    dispatch(searchAlbum(value, choose))
  }

  return <InputGroup>

    <FormControl
      aria-describedby="basic-addon1"
      type='text'
      onChange={saveText}
      value={searchText}
      placeholder='Search albums by:'
      disabled={disable}
    />
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={choose}
      id="input-group-dropdown-1"
      style={{marginLeft:'5px'}}
    >
      <Dropdown.Item onClick={
        () => {
          setChoose('Name')
          setDisable('')
        }
      }>Name</Dropdown.Item>
      <Dropdown.Item onClick={
        () => {
          setChoose('Year')
          setDisable('')
        }
      }>Year</Dropdown.Item>
      <Dropdown.Item onClick={
        () => {
          setChoose('Artist')
          setDisable('')
        }
      }>Artist</Dropdown.Item>
      <Dropdown.Divider />

    </DropdownButton>


    {/* <InputGroup.Append>
      <Button variant='outline-secondary'
        onClick={() => dispatch(searchAlbum(searchText))}>
        Search!
      </Button>
    </InputGroup.Append> */}
  </InputGroup>
}

export default SearchBar