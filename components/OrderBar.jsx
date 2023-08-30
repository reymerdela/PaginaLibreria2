'use client'
import { useState } from 'react'
import styles from './OrderBar.module.css'
const OrderBar = () => {

  

    return (
        <select className={styles.orderMenu}>
        <option value="default">Opcion por defecto</option>
        <option value="precioAsc">Ordenar por precio: Ascendente</option>
        <option value="precioDesc">Ordenar por precio: Descendente</option>
      </select>
    )
}

export default OrderBar;