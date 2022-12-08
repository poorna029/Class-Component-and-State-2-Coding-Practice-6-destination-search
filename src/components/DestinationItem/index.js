// Write your code here

const DestinationItem = props => {
  const {each} = props
  return (
    <li>
      <img src={each.imgUrl} alt={each.name} key={each.id} />
      <p>{each.name}</p>
    </li>
  )
}

export default DestinationItem
