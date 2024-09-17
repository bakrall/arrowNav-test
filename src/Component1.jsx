import {
    FocusableElement,
    FocusableGroup
  } from '@arrow-navigation/react'

const Component1 = () => {
    return (
      <div>
        <FocusableGroup id="group-3">
          <FocusableElement id="btn-5">
            Button 1
          </FocusableElement>
          <FocusableElement id="btn-6">
            Button 2
          </FocusableElement>
        </FocusableGroup>
        <FocusableGroup id="group-4">
          <FocusableElement id="btn-8">
            Button 3
          </FocusableElement>
          <FocusableElement id="btn-9">
            Button 4
          </FocusableElement>
        </FocusableGroup>
      </div>
    )
  }

export default Component1;
