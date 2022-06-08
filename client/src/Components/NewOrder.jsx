import React, {useState, useMemo, useCallback, useRef} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {createOrder} from '../redux/actions/orders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import TextField from '@mui/material/TextField'

import Swal from 'sweetalert2'

import{ MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'



const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const NewOrder = ({setNewOrder, items, totalPrice}) => {

  const dispatch = useDispatch()

  const success = useSelector(({orders}) => orders.orderSuccess)

    const [orderData, setOrderData] = useState({customerName: '', customerSurname: '', addres: '', phone: '', orderItems: '', price: ''})

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createOrder(orderData))
    }

    switch(success) {
      case 201: {
        Toast.fire({
          icon: 'success',
          title: 'Sifariş qəbul edildi'
        })
        dispatch({ type: 'ORDER_SUCCESS', payload: null })
        break
      }
      default: {
  
      }
    }

    const center = {
        lat: 40.4093,
        lng: 49.8671,
      }

    const [positions, setPosition] = useState(center)
      
      function DraggableMarker() {
        const [draggable, setDraggable] = useState(false)
        


        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
      
        return (
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={positions}
            ref={markerRef}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? 'Ünvanı seç'
                  : 'Markeri idarə etmək üçün tıkla!'}
              </span>
            </Popup>
          </Marker>
        )
      }

  return (
    <div className='neworder'>
        <div className="newpizza__back"></div>
        <form action="submit">
            <div className="exit__btn" onClick={() => setNewOrder(false)}><FontAwesomeIcon icon={faXmark} /></div>
            <h1>Sifarişin detalları</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <TextField label='Ad' margin='normal' onChange={(e) => setOrderData({...orderData, customerName: e.target.value, orderItems: items, adress: {lat: positions.lat, lng: positions.lng}, price: totalPrice})} />
                <TextField label='Soyad' margin='normal' onChange={(e) => setOrderData({...orderData, customerSurname: e.target.value, orderItems: items, adress: {lat: positions.lat, lng: positions.lng}, price: totalPrice})} />
            </div>
            <div className="neworder__map">
            <h2>Ünvan: </h2>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <DraggableMarker />
            </MapContainer>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <TextField style={{marginTop: '30px'}} fullWidth label='Əlaqə nömrəsi' margin='normal' onChange={(e) => setOrderData({...orderData, phone: e.target.value, orderItems: items, adress: {lat: positions.lat, lng: positions.lng}, price: totalPrice})} />
            </div>
            <button type='submit' className='header__btn' onClick={handleSubmit}><pre>Sifariş ver!</pre></button>
        </form>
    </div>
  )
}

export default NewOrder