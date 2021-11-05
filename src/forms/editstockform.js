import React, { useState, useEffect } from 'react'

const EditStockForm = props => {
  const [ stock, setStock ] = useState(props.currentStock)

  useEffect(
    () => {
      setStock(props.currentStock)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setStock({ ...stock, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateStock(stock.id, stock)
      }}
    >
      <label>Itemname</label>
			<input type="text" name="itemname" value={stock.itemname} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={stock.description} onChange={handleInputChange} />
			<label>Price</label>
			<input type="text" name="price" value={stock.price} onChange={handleInputChange} />
			<label>Quantity</label>
			<input type="text" name="quantity" value={stock.quantity} onChange={handleInputChange} />
			<label>Stock-Receiveddate</label>
			<input type="text" name="stockreceiveddate" value={stock.stockreceiveddate} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  )
}

export default EditStockForm