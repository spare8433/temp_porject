import { useState } from "react"

export default (inputValue = '') => {
  const [value, setValue] = useState(inputValue)
  
  const onChangeValue = e => setValue(e.currentTarget.files)

  return [value,onChangeValue]
}