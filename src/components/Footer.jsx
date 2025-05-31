import React from 'react'
import styles ,{ layout } from '../style'
import { logo } from '../assets'

const Footer = () => (
    <section className={layout.section}>
      <div className="">
        <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      </div>
    </section>
)

export default Footer