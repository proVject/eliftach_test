import React, {useEffect, useState} from 'react';
import classes from './medicineItem.module.css'
import EtButton from '../ui/button/button.jsx'
import persistenceStore from "../../helpers/persistenceStore.js";
import {getPrice} from "../../helpers/getPrice.js";

const MedicineItem = ({medicineItem}) => {

  const [orderMedicine, setOrderMedicine] = useState(persistenceStore.getItem('order_medicine') || [])
  const [isInCart, setIsInCart] = useState(false)

  const addToCart = () => {
    const meds = JSON.parse(JSON.stringify(orderMedicine))
    const medIdx = orderMedicine?.findIndex(m => m.id === medicineItem.id)
    if (medIdx === -1) {
      meds.push({...JSON.parse(JSON.stringify(medicineItem)), count: 1})
    } else {
      meds[medIdx].count++
    }

    setOrderMedicine(meds)
  }

  const onUpdateCart = () => {
    const medIdx = orderMedicine?.findIndex(m => m.id === medicineItem.id)
    if (medIdx === -1) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }
  }

  useEffect(() => {
    onUpdateCart()
    persistenceStore.setItem('order_medicine', orderMedicine)
  }, [orderMedicine])

  return (
    <div className={classes.medicineItem}>
      <img src={medicineItem.image_url} alt={medicineItem.name}/>
      <div className={classes.medicineItem__info}>
        <div>
          <span>{medicineItem.name}</span>
          <div>{getPrice(medicineItem.cost)}</div>
        </div>
        <EtButton className={isInCart ? classes.added : ''} onClick={addToCart}>{
          isInCart
            ? 'Add More'
            : 'Add to Cart'
        }</EtButton>
      </div>
    </div>
  );
};

export default MedicineItem;