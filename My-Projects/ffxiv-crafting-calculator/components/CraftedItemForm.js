'use client';

import React, { useState } from 'react';

const isValidNumberInput = (value) => /^[0-9]+$/.test(value);

function CraftedItemForm() {
    const [formData, setFormData] = useState({
        material1Cost: '',
        material1Quantity: '',
        material2Cost: '',
        material2Quantity: '',
        material3Cost: '',
        material3Quantity: '',
        material4Cost: '',
        material4Quantity: '',
        material5Cost: '',
        material5Quantity: '',
        shard1Cost: '',
        shard1Quantity: '',
        shard2Cost: '',
        shard2Quantity: '',
        craftedItemSellPrice: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Check if the input is valid only for fields that require numeric input
        if (
            [
                'material1Cost',
                'material1Quantity',
                'material2Cost',
                'material2Quantity',
                'shard1Cost',
                'shard1Quantity',
                'shard2Cost',
                'shard2Quantity',
            ].includes(name) &&
            value !== '' &&
            !isValidNumberInput(value)
        ) {
            // Handle invalid input, e.g., by showing an error message
            // For demonstration, we'll just prevent the update
            console.error('Invalid input: Please enter only numbers.');
            return;
        }
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate results based on formData
        console.log('Form Data:', formData);
        // You can place your calculation logic here

        let material1Cost = Number(formData.material1Cost);
        let material1Quantity = Number(formData.material1Quantity);
        let material2Cost = Number(formData.material2Cost);
        let material2Quantity = Number(formData.material2Quantity);
        let material3Cost = Number(formData.material3Cost);
        let material3Quantity = Number(formData.material3Quantity);
        let material4Cost = Number(formData.material4Cost);
        let material4Quantity = Number(formData.material4Quantity);
        let material5Cost = Number(formData.material5Cost);
        let material5Quantity = Number(formData.material5Quantity);

        let shard1Cost = Number(formData.shard1Cost);
        let shard1Quantity = Number(formData.shard1Quantity);
        let shard2Cost = Number(formData.shard2Cost);
        let shard2Quantity = Number(formData.shard2Quantity);

        let craftingCost =
            material1Cost * material1Quantity +
            material2Cost * material2Quantity +
            material3Cost * material3Quantity +
            material4Cost * material4Quantity +
            material5Cost * material5Quantity +
            shard1Cost * shard1Quantity +
            shard2Cost * shard2Quantity;

        console.log(craftingCost);
    };

    const handleClearForm = () => {
        setFormData({
            material1Cost: '',
            material1Quantity: '',
            material2Cost: '',
            material2Quantity: '',
            material3Cost: '',
            material3Quantity: '',
            material4Cost: '',
            material4Quantity: '',
            material5Cost: '',
            material5Quantity: '',
            shard1Cost: '',
            shard1Quantity: '',
            shard2Cost: '',
            shard2Quantity: '',
            craftedItemSellPrice: '',
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='grid grid-cols-4 gap-4'
        >
            <div className=''>
                <label
                    htmlFor='material1Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 1 Cost
                </label>
                <input
                    type='number'
                    name='material1Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material1Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material1Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 1 Quantity
                </label>
                <input
                    type='number'
                    name='material1Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material1Quantity}
                    onChange={handleInputChange}
                />
            </div>

            {/* Repeat the above pattern for other inputs */}

            <div className='mb-2'>
                <label
                    htmlFor='material2Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 2 Cost
                </label>
                <input
                    type='number'
                    name='material2Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material2Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material1Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 2 Quantity
                </label>
                <input
                    type='number'
                    name='material2Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material2Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='material3Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 3 Cost
                </label>
                <input
                    type='number'
                    name='material3Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material3Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material3Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 3 Quantity
                </label>
                <input
                    type='number'
                    name='material3Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material3Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='material4Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 4 Cost
                </label>
                <input
                    type='number'
                    name='material4Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material4Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material4Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 4 Quantity
                </label>
                <input
                    type='number'
                    name='material4Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material4Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='material5Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 5 Cost
                </label>

                <input
                    type='number'
                    name='material5Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material5Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material5Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 5 Quantity
                </label>
                <input
                    type='number'
                    name='material5Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material5Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='material5Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 5 Cost
                </label>

                <input
                    type='number'
                    name='material5Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material5Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='material5Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Material 5 Quantity
                </label>
                <input
                    type='number'
                    name='material5Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.material5Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='shard1Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Shard 1 Cost
                </label>

                <input
                    type='number'
                    name='shard1Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.shard1Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='shard1Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Shard 1 Quantity
                </label>
                <input
                    type='number'
                    name='shard1Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.shard1Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='shard2Cost'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Shard 2 Cost
                </label>

                <input
                    type='number'
                    name='shard2Cost'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.shard2Cost}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label
                    htmlFor='shard2Quantity'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Shard 2 Quantity
                </label>
                <input
                    type='number'
                    name='shard2Quantity'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={formData.shard2Quantity}
                    onChange={handleInputChange}
                />
            </div>

            <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={handleSubmit}
            >
                Calculate
            </button>
            <button
                type='button'
                className='mx-4 text-white bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-200 dark:hover:bg-blue-300 dark:focus:ring-blue-300'
                onClick={handleClearForm}
            >
                Clear
            </button>
        </form>
    );
}

export default CraftedItemForm;
