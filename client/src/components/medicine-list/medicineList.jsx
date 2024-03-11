import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetch.js";
import medicineService from "../../api/medicineService.js";
import EtLoader from "../ui/loader/loader.jsx";
import classes from './medicineList.module.css'
import EtShopItem from '../medicine-item/medicineItem.jsx'

const MedicineList = ({ activeDrugStoreId, ...props }) => {
  const [medicine, setMedicine] = useState([])

  const [fetchMedicine, isLoadedMedicine, medicineError] = useFetching(async (activeDrugStoreId) => {
    const response = await medicineService.getAll(activeDrugStoreId);
    setMedicine([...response])
  })

  useEffect(() => {
    fetchMedicine(activeDrugStoreId)
  }, [activeDrugStoreId])

  return (
    <div className={classes.medicineList}>
      {isLoadedMedicine && <EtLoader />}
      {medicineError && <div>error</div>}
      {medicine && !isLoadedMedicine && !medicineError && (
        medicine.map((m  => (
          <EtShopItem medicineItem={m} key={m.id} />
        ))
      ))}
    </div>
  );
};

export default MedicineList;