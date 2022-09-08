import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const Checkout = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" })

  useEffect(() => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1]
    }
    setSubtotal(myTotal)

  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <div>


      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto min-h-screen">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Checkout</h1>
            <h2 className='text-2xl font-medium'>Cart</h2>
            <div className="cart">{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}</div>
            <ul className='list-decimal px-8'>

              {cart.map((item) => {
                return <li key={item.id}>
                  Product {item[0]} with a price of ₹{item[1]}
                </li>
              })}
            </ul>
            <div className="font-bold">
              Subtotal: {subtotal}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout