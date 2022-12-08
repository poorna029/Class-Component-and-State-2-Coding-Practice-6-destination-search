// Write your code here

import DestinationItem from '../DestinationItem/index'

const DestinationSearch = props => {
  const {destinationsList} = props
  console.log(destinationsList)

  return destinationsList.map(each => (
    <DestinationItem key={each.id} each={each} />
  ))
}

export default DestinationSearch
