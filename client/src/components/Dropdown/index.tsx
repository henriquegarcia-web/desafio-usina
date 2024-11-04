import { useState } from 'react'

import * as S from './styles'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface IDropdown {
  placeholder: string
}

const Dropdown = ({ placeholder }: IDropdown) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedData, setSelectedData] = useState(null)

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <S.Dropdown>
      <S.DropdownSelected>
        {selectedData ? <b>{selectedData}</b> : <p>{placeholder}</p>}
      </S.DropdownSelected>
      <S.DropdownToggle onClick={handleToggleDropdown}>
        {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
      </S.DropdownToggle>
    </S.Dropdown>
  )
}

export default Dropdown
