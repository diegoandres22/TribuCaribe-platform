'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { closeSnackbar, enqueueSnackbar, SnackbarKey } from 'notistack'
import { TiShoppingCart } from 'react-icons/ti'

export const Buttons = () => {

    const message = 'Compra realizada con éxito'
    const carrr = 'Producto agregado al carrito'

    const action = (snackbarId: SnackbarKey | undefined) => (
        <>

          <button className='text-lg font-bold text-red-500' onClick={() => { closeSnackbar(snackbarId) }}>
            Deshacer
          </button>
        </>
      );
      
    const comprar = () => {
        return enqueueSnackbar(message, { variant: 'success' })
    }
    const carr = () => {
        enqueueSnackbar(carrr, {
            action,
        })
    }

    return (
        <div className="flex w-full justify-evenly">

            <Button color="secondary" className="flex w-32 text-lg" onClick={comprar}>
                Comprar
            </Button>
            <Button color="secondary" className="flex w-32 text-lg" onClick={carr} endContent={<TiShoppingCart />}>
                Carrito
            </Button>
        </div>
    )
}
