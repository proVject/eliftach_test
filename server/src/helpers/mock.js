const DrugStoresModel = require('../models/drug_stores')
const MedicineModel = require('../models/medicine')

const drugStoreData = [
  {
    id: 1,
    name: 'Аптека 1',
  },
  {
    id: 2,
    name: 'Аптека 2',
  },
  {
    id: 3,
    name: 'Аптека 3',
  },
  {
    id: 4,
    name: 'Аптека 4',
  },
  {
    id: 5,
    name: 'Аптека 5',
  },
];

const medicineData = [
  // Аптека 1
  {
    id: 1,
    name: 'Аспірин',
    image_url: 'https://example.com/medicine1.jpg',
    cost: 10.50,
    drug_store_id: 1,
  },
  {
    id: 2,
    name: 'Парацетамол',
    image_url: 'https://example.com/medicine2.jpg',
    cost: 5.00,
    drug_store_id: 1,
  },
  {
    id: 3,
    name: 'Ібупрофен',
    image_url: 'https://example.com/medicine3.jpg',
    cost: 8.00,
    drug_store_id: 1,
  },
  // Додайте інші ліки для Аптеки 1...

  // Аптека 2
  {
    id: 4,
    name: 'Лоратадин',
    image_url: 'https://example.com/medicine4.jpg',
    cost: 6.50,
    drug_store_id: 2,
  },
  {
    id: 5,
    name: 'Дексаметазон',
    image_url: 'https://example.com/medicine5.jpg',
    cost: 12.00,
    drug_store_id: 2,
  },
  // Додайте інші ліки для Аптеки 2...

  // Аптека 3
  {
    id: 6,
    name: 'Нурофен',
    image_url: 'https://example.com/medicine6.jpg',
    cost: 7.80,
    drug_store_id: 3,
  },
  {
    id: 7,
    name: 'Антигрипін',
    image_url: 'https://example.com/medicine7.jpg',
    cost: 9.20,
    drug_store_id: 3,
  },
  // Додайте інші ліки для Аптеки 3...

  // Аптека 4
  {
    id: 8,
    name: 'Цетрин',
    image_url: 'https://example.com/medicine8.jpg',
    cost: 8.90,
    drug_store_id: 4,
  },
  {
    id: 9,
    name: 'Амоксил',
    image_url: 'https://example.com/medicine9.jpg',
    cost: 15.60,
    drug_store_id: 4,
  },
  // Додайте інші ліки для Аптеки 4...

  // Аптека 5
  {
    id: 10,
    name: 'Ренгалан',
    image_url: 'https://example.com/medicine10.jpg',
    cost: 11.30,
    drug_store_id: 5,
  },
  {
    id: 11,
    name: 'Кетонал',
    image_url: 'https://example.com/medicine11.jpg',
    cost: 13.50,
    drug_store_id: 5,
  },
  // Додайте інші ліки для Аптеки 5...
];

async function initMockData() {
  try {
    drugStoreData.forEach((s) => {
      DrugStoresModel.findOrCreate({
        where: {id: s.id},
        defaults: s
      })
    })
    medicineData.forEach((m) => {
      MedicineModel.findOrCreate({
        where: {id: m.id, drug_store_id: m.drug_store_id},
        defaults: m
      })
    })

    console.log('Mock data added successfully.');
  } catch (error) {
    console.error('Error adding mock data:', error);
  }
}

module.exports = initMockData;