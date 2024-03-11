import React, {useEffect, useState} from 'react';
import classes from "./shop.module.css";
import EtSidebar from '../sidebar/sidebar.jsx'
import EtMedicineList from '../medicine-list/medicineList.jsx'
import EtLoader from '../ui/loader/loader.jsx'
import {useFetching} from "../../hooks/useFetch.js";
import drugStoresService from "../../api/drugStoresService.js";

const Shop = () => {
  const [drugStores, setDrugStores] = useState([{ id: null, name: 'All' }])
  const [activeDrugStoreId, setActiveDrugStoreId] = useState(null)

  const [fetchDrugStores, isLoadedDrugStores, drugStoresError] = useFetching(async () => {
    const response = await drugStoresService.getAll();
    setDrugStores([...drugStores, ...response])
  })

  useEffect(() => {
    fetchDrugStores()
  }, [])

  const onSetActiveTab = (id) => {
    setActiveDrugStoreId(id)
  }

  return (
    <div className={classes.shop}>
      {
        isLoadedDrugStores
        ? (
            <EtLoader />
          )
          : (
            <>
              <EtSidebar tabs={drugStores} activeTab={activeDrugStoreId} setActiveTab={(id) => onSetActiveTab(id)} />
              <EtMedicineList activeDrugStoreId={activeDrugStoreId} />
            </>
          )
      }
    </div>
  );
};

export default Shop;