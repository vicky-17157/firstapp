import React, { useState, Fragment } from 'react'
import AddStockForm from './forms/addstockform'
import EditStockForm from './forms/editstockform'
import { Table } from './table/stocktable'
import './apple.css'


const Appt = () => {


  const columns = [
    { accessor: 'id', label: 'Id' },
    { accessor: 'itemname', label: 'Itemname' },
    { accessor: 'description', label: 'Description', },
    { accessor: 'price', label: 'Price' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'stockreceiveddate', label: 'Stock-Receiveddate' },
    
  ]

	// Data
	const StockData = [
		{ id: 1, itemname: 'Tie', description: 'A professional and also a party wearable' , price:1200 , quantity :250 ,stockreceiveddate:'1/1/2021'},
		{ id: 2, itemname: 'Waist-Coat', description: 'A full handed wearable' , price:3000 , quantity :550 ,stockreceiveddate:'10/1/2021'},
		{ id: 3, itemname: 'Hoodie', description: 'A normal wearable' , price:1500 , quantity :750 ,stockreceiveddate:'05/10/2021'},
    { id: 4, itemname: 'Coat', description: 'A party and aslo a professional cloth' , price:700 , quantity :5 ,stockreceiveddate:'18/09/2021'},
    { id: 5, itemname: 'Suit', description: 'A combination with coat' , price:8500 , quantity :200 ,stockreceiveddate:'25/08/2021'},
    { id: 6, itemname: 'Scarf', description: 'Imported from netherlands' , price:2500 , quantity :150 ,stockreceiveddate:'27/10/2021'},
    { id: 7, itemname: 'Sweater', description: 'Imported from icelands' , price:4500 , quantity :80 ,stockreceiveddate:'24/11/2021'},
    { id: 8, itemname: 'Tracks', description: 'Imported from england' , price:2000 , quantity :300 ,stockreceiveddate:'28/12/2021'},
	]

	const initialStockState = { id: null, itemname: '', description: '' ,price:null, quantity:null,stockreceiveddate:''}

	// Setting state
	const [ stocks, setStocks ] = useState(StockData)
	const [ currentStock, setCurrentStock ] = useState(initialStockState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addStock = stock => {
		stock.id = stocks.length + 1
		setStocks([ ...stocks, stock ])
	}

	const deleteStock = id => {
		setEditing(false)

		setStocks(stocks.filter(stock => stock.id !== id))
	}

	const updateStock = (id, updatedStock) => {
		setEditing(false)

		setStocks(stocks.map(stock => (stock.id === id ? updatedStock : stock)))
	}

	const editRow = stock => {
		setEditing(true)

		setCurrentStock({ id: stock.id, itemname: stock.itemname, description: stock.description,
            price:stock.price,quantity:stock.quantity,stockreceiveddate:stock.stockreceiveddate })
	}

	return (
		<div className="container">
			<h1 className="tt">High Fashions App </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditStockForm
								editing={editing}
								setEditing={setEditing}
								currentStock={currentStock}
								updateStock={updateStock}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Items</h2>
							<AddStockForm addStock={addStock} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Details of Items</h2>
					{/* <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} /> */}
          <Table rows={stocks} columns={columns} editRow={editRow} deleteStock={deleteStock} />
				</div>
			</div>
		</div>
	)
}

export default Appt
	