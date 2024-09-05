import { BODY_OPTIONS, FLAVOR_OPTIONS, FRAGRANCE_OPTIONS, GROUND_TYPE_OPTIONS, ROAST_LEVEL_OPTIONS } from "@/utils/constant"
import Select from "../inputs/Select"
import TextInput from "../inputs/TextInput"

const CoffeeForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <TextInput label="Brand Name"
                    type="text"
                    name="brand_name"
                    value={formData.brand_name}
                    onChange={handleChange}
                />
                <TextInput label="Product Name"
                    type="text"
                    name="class_name"
                    value={formData.class_name}
                    onChange={handleChange}
                />
                <TextInput label="Processing Method"
                    type="text"
                    name="processing_method"
                    value={formData.processing_method}
                    onChange={handleChange}
                />
                <TextInput label="Coffee Type"
                    type="text"
                    name="coffee_type"
                    value={formData.coffee_type}
                    onChange={handleChange}
                />

                <Select label="Roast Level" name="roast_level" value={formData.roast_level} onChange={handleChange} options={ROAST_LEVEL_OPTIONS} />
                <Select label="Ground Type" name="ground_type" value={formData.ground_type} onChange={handleChange} options={GROUND_TYPE_OPTIONS} />
                <Select label="Fragrance" name="fragrance" value={formData.fragrance} onChange={handleChange} options={FRAGRANCE_OPTIONS} />
                <Select label="Flavor" name="flavor" value={formData.flavor} onChange={handleChange} options={FLAVOR_OPTIONS} />
                <Select label="Body" name="body" value={formData.body} onChange={handleChange} options={BODY_OPTIONS} />

                <TextInput label="Price"
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <TextInput label="Number of Bags"
                    type="text"
                    name="no_of_bags"
                    value={formData.no_of_bags}
                    onChange={handleChange}
                />
                <TextInput label="Net Weight"
                    type="text"
                    name="net_weight"
                    value={formData.net_weight}
                    onChange={handleChange}
                />
                <TextInput label="Contact"
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                />
            </div>

            <div className="text-center mt-8">
                <button
                    type="submit"
                    className="bg-[#38220f]/95 hover:opacity-80 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                >
                    {formData._id ? 'Update Coffee' : 'Add Coffee'}
                </button>
            </div>
        </form>
    )
}

export default CoffeeForm