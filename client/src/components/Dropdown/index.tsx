import { forwardRef, useState } from 'react'
import * as S from './styles'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface IDropdown {
  placeholder: string
}

const Dropdown = forwardRef<HTMLDivElement, IDropdown>(
  ({ placeholder, ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedData, setSelectedData] = useState(null)

    const handleToggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
    }

    return (
      <S.Dropdown ref={ref} {...props}>
        <S.DropdownSelected>
          {selectedData ? <b>{selectedData}</b> : <p>{placeholder}</p>}
        </S.DropdownSelected>
        <S.DropdownToggle type="button" onClick={handleToggleDropdown}>
          {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
        </S.DropdownToggle>
      </S.Dropdown>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
