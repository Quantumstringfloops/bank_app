import React from 'react'
import { layout } from '../style'
import { logo } from '../assets'

const Footer = () => (
    <section className={layout.section}>
      <div className={``}>
        <img src={logo} alt="logo" className=' w-[100%] h-[100%]' />
      </div>
    </section>
)

export default Footer