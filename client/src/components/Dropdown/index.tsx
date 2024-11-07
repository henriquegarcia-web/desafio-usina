import { forwardRef, useEffect, useState } from 'react'

import * as S from './styles'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface DropdownItem {
  key: string
  value: string
}

interface IDropdown {
  placeholder: string
  data: DropdownItem[]
  onSelect: (value: string) => void
  defaultSelected?: string
}

const Dropdown = forwardRef<HTMLDivElement, IDropdown>(
  ({ placeholder, data, onSelect, defaultSelected, ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedData, setSelectedData] = useState<string | null>(
      defaultSelected || null
    )

    useEffect(() => {
      if (defaultSelected) {
        setSelectedData(defaultSelected)
      }
    }, [defaultSelected])

    const handleToggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
    }

    const handleSelect = (item: DropdownItem) => {
      setSelectedData(item.value)
      onSelect(item.value)
      setIsDropdownOpen(false)
    }

    return (
      <S.Dropdown ref={ref} {...props}>
        <S.DropdownSelected onClick={handleToggleDropdown}>
          {selectedData ? <b>{selectedData}</b> : <p>{placeholder}</p>}
        </S.DropdownSelected>
        <S.DropdownToggle type="button" onClick={handleToggleDropdown}>
          {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
        </S.DropdownToggle>
        {isDropdownOpen && (
          <S.DropdownList>
            {data.map((item) => {
              const isActive = item.value === selectedData ? 1 : 0

              return (
                <S.DropdownItem
                  key={item.key}
                  active={isActive}
                  onClick={() => handleSelect(item)}
                >
                  {item.value}
                </S.DropdownItem>
              )
            })}
          </S.DropdownList>
        )}
      </S.Dropdown>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
