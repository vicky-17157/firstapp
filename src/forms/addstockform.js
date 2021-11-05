import React, { useState } from 'react'

const AddStockForm = props => {
	const initialStockState = { id: null, itemname: '', description: '' ,price:'', quantity:'', 
                                stockreceiveddate:''}
	const [ stock, setStock ] = useState(initialStockState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setStock({ ...stock, [name]: value })
	}

	return (
		<form className='AddForm'
			onSubmit={event => {
				event.preventDefault()
				if (!stock.itemname || !stock.price) return

				props.addStock(stock)
				setStock(initialStockState)
			}}
		>
			<label>Item-Name</label>
			<input type="text" name="itemname" value={stock.itemname} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={stock.description} onChange={handleInputChange} />
			<label>Price</label>
			<input type="text" name="price" value={stock.price} onChange={handleInputChange} />
			<label>Quantity</label>
			<input type="text" name="quantity" value={stock.quantity} onChange={handleInputChange} />
			<label>Stock-Receiveddate</label>
			<input type="text" name="stockreceiveddate" value={stock.stockreceiveddate} onChange={handleInputChange} />
			<button>Add new Detail</button>
		</form>
	)
}

export default AddStockForm