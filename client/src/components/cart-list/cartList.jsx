import React from 'react';
import classes from './cartList.module.css'
import EtCartItem from '../cart-item/cartItem.jsx'

const CartList = ({ medicine, updateMedicine, className, order, ...props }) => {
  const cartListClasses = [classes.cartList, className].join(' ')

  const updateMedicineItem = (m) => {
    const newMedicine = [...medicine]
    const medicineIdx = medicine.findIndex(med => med.id === m.id)

    if (medicineIdx === -1) return
    newMedicine[medicineIdx] = m
    updateMedicine(newMedicine)
  }

  const deleteMedicineItem = (m) => {
    const newMedicine = [...medicine]
    const medicineIdx = medicine.findIndex(med => med.id === m.id)

    if (medicineIdx === -1) return
    newMedicine.splice(medicineIdx, 1)
    updateMedicine(newMedicine)
  }

  let cartItems = <></>
  if (order) cartItems = <h3>Your was created successfully: #{ order.id }</h3>
  else if (!medicine?.length) cartItems = <span>Your cart is empty yet</span>
  else cartItems = medicine.map(m => (
    <EtCartItem
      key={m.id}
      medicineItem={m}
      updateMedicineItem={(newMedicine) => updateMedicineItem(newMedicine)}
      deleteMedicineItem={() => deleteMedicineItem(m)}
    />
  ))



  return (
    <div className={cartListClasses}>
      { cartItems }
    </div>
  );
};

export default CartList;