import { CDropdownMenu, CDropdown, CDropdownItem, CDropdownToggle } from '@coreui/react'

export default function DropDown ({intro, choices, onSelect, selectedType}) {

    const handleChoiceClick = (choice) => {
        // Call the onSelect callback with the selected choice
        onSelect(choice);
    };
    

    return (
    <CDropdown>
    { selectedType ? <CDropdownToggle color="primary">{selectedType}</CDropdownToggle> : <CDropdownToggle color="primary">{intro}</CDropdownToggle>}
    <CDropdownMenu>
    {
        choices.map((choice) => {
           return <CDropdownItem onClick={() => handleChoiceClick(choice)}>{choice}</CDropdownItem>
        })
    }
    </CDropdownMenu>
</CDropdown>
    )
}