import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

const AddItem = () => {
    const INTIAL_STATE = {
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }
    const {type} = useParams();
    const [formData, setFormData] = useState(INTIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === "snacks") {
            async function send(data = formData) {
                let res = await SnackOrBoozeApi.postSnacks(data);
                navigate('/snacks');
            }
            send();
        } else if (type === "drinks") {
            async function send(data = formData) {
                let res = await SnackOrBoozeApi.postDrinks(data);
                navigate('/drinks')
            }
            send();
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            id="food-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange} />

            <label htmlFor="description">Description</label>
            <input 
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            /> 

            <label htmlFor="recipe">Description</label>
            <input 
            id="recipe"
            type="text"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            /> 
            <label htmlFor="serve">Description</label>
            <input 
            id="serve"
            type="text"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
            /> 
            <button>Add Item</button>

        </form>
    )
}

export default AddItem;