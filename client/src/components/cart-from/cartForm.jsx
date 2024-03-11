import React, {useEffect, useState} from 'react';
import persistenceStore from "../../helpers/persistenceStore.js";
import {getPrice} from "../../helpers/getPrice.js";
import classes from './cartForm.module.css'
import EtButton from '../ui/button/button.jsx'
import EtInput from '../ui/input/input.jsx'
import EtCartList from '../cart-list/cartList.jsx'
import {useFetching} from "../../hooks/useFetch.js";
import orderService from "../../api/orderService.js";

const CartForm = () => {
  const [order, setOrder] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [drugs, setDrugs] = useState(persistenceStore.getItem('order_medicine') || [])
  const [total, setTotal] = useState(getPrice())

  const [fetchingCreateOrder, isLoadingCreateOrder, createOrderError] = useFetching(async (inputData) => {
    const order = await orderService.createOrder(inputData)
    setDrugs(() => [])
    setOrder(() => order)
  })

  const onSubmit = (e) => {
    e.preventDefault()
    fetchingCreateOrder({
      drugs: drugs?.map(d => ({ medicine_id: d.id, count: d.count })),
      name,
      email,
      phone,
      address,
    })
  }

  const updateMedicine = (medicine) => {
    setDrugs(() => medicine)
    persistenceStore.setItem('order_medicine', medicine)
  }

  useEffect(() => {
    updateMedicine(drugs)
  }, [drugs])

  useEffect(() => {
    const newTotal = drugs?.reduce((acc, d) => {
      acc += (d.count * d.cost)
      return acc
    }, 0)

    setTotal(getPrice(newTotal))
  }, [drugs])

  return (
    <form onSubmit={onSubmit} className={classes.cartForm}>
      <div className={classes.row}>
        <div className={classes.fromWrapper}>
          <EtInput label="Name" value={name} onInput={setName} required />
          <EtInput label="Email" value={email} onInput={setEmail} type="email" required />
          <EtInput label="Phone" value={phone} onInput={setPhone} required/>
          <EtInput label="Address" value={address} onInput={setAddress} required/>
        </div>
        <EtCartList
          className={classes.cart}
          medicine={drugs}
          updateMedicine={updateMedicine}
          order={order}
        />
      </div>
      <div className={classes.info}>
        <div>Total price: { total }</div>
        <EtButton onClick={onSubmit} disabled={isLoadingCreateOrder} type="submit">Submit</EtButton>
      </div>
    </form>
  );
};

export default CartForm;