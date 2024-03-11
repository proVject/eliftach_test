import React, {useEffect, useState} from 'react';
import classes from './cartItem.module.css'
import EtButton from '../ui/button/button.jsx'
import EtInput from '../ui/input/input.jsx'
import {getPrice} from "../../helpers/getPrice.js";

const CartItem = ({ medicineItem, updateMedicineItem, deleteMedicineItem }) => {
  const updateCount = (newCount) => {
    const maxCount = 10
    const minCount = 1
    if (newCount > maxCount || newCount < minCount) return

    const newMedicine = { ...medicineItem, count: newCount }
    updateMedicineItem(newMedicine)
  }

  const [totalConst, setTotalConst] = useState(medicineItem.cost * medicineItem.count)

  useEffect(() => {
    setTotalConst(medicineItem.cost * medicineItem.count)
  }, [medicineItem]);

  return (
    <div className={classes.cartItem}>
      <img src={medicineItem.image_url} alt="medicine"/>
      <div className={classes.info}>
        <div><b>{ medicineItem.name }</b></div>
        <div>{getPrice(totalConst)} ({ getPrice(medicineItem.cost) } per 1)</div>
        <EtInput value={medicineItem.count} onInput={updateCount} type='number' min="0" max='100' />
        <EtButton onClick={deleteMedicineItem}>Remove</EtButton>
      </div>
    </div>
  );
};

export default CartItem;