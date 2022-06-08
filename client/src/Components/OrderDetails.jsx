import React from 'react'

import OrderPizza from './OrderPizza'

import TextField from '@mui/material/TextField'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import{ MapContainer, TileLayer, Marker } from 'react-leaflet'

const OrderDetails = ({setOrderDetails, customerName, customerSurname, adress, phone, items}) => {

    const center = {
        lat: adress.lat,
        lng: adress.lng,
      }

    const pizzas = Object.keys(items).map((key) => items[key].items)

  return (
    <div className='neworder'>
        <div className="newpizza__back"></div>
        <form action="submit">
            <div className="exit__btn" onClick={() => setOrderDetails(false)}><FontAwesomeIcon icon={faXmark} /></div>
            <h1>Sifarişin detalları</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <TextField label='Ad' margin='normal' value={customerName} />
                <TextField label='Soyad' margin='normal' value={customerSurname} />
            </div>
            <div className="neworder__map">
            <h2>Ünvan: </h2>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={center} />
            </MapContainer>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <TextField style={{marginTop: '30px'}} fullWidth label='Əlaqə nömrəsi' margin='normal' value={phone} />
            </div>
            <div className="order__pizzas">
                {pizzas.map((pizza) => {
                        return (
                            pizza.map((a) =>  <h2>{a.name}, {a.size} sm., {a.price} ₼ </h2>)
                        )
                })}
            </div>
        </form>
    </div>
  )
}

export default OrderDetails