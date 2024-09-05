import React from 'react'

const Select = ({ label, name, value, onChange, options, className, containerClassname }) => {
  return (
    <div className={`${containerClassname}`}>
      <label className="block text-gray-600 font-semibold mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      >
        {options.map(item => (<option key={item.value} value={item.value} disabled={!item.value}>{item.label}</option>))}
      </select>
    </div>
  )
}

export default Select