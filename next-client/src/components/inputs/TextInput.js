const TextInput = ({ label, type = 'text', name, value, onChange, className, containerClassName }) => {
  return (
    <div className={`${containerClassName}`}>
      <label className="block text-gray-600 font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      />
    </div>
  )
}

export default TextInput