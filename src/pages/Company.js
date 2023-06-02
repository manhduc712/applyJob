import React from 'react'
import '../css/Company.css'

import logo from '../../src/assets/logo.png';

const data2 = [
    {
        id: 1,
        name: 'ABC',
        address: 'Ha Noi',
        salary: '1000$',
        experience: '1 -2 year'
    },
    {
        id: 2,
        name: 'BCD',
        address: 'Ha Noi',
        salary: '1500$',
        experience: '2 -3 year'
    },
    {
        id: 3,
        name: 'BCD',
        address: 'Ha Noi',
        salary: '900$',
        experience: '2 -3 year'
    },
    {
        id: 4,
        name: 'BCD',
        address: 'Ha Noi',
        salary: '1300$',
        experience: '2 -3 year'
    },
    {
        id: 5,
        name: 'EFG',
        address: 'Ha Noi',
        salary: '1200$',
        experience: '2 -3 year'
    },
    {
        id: 6,
        name: 'LKJ',
        address: 'Ha Noi',
        salary: '1200$',
        experience: '2 -3 year'
    }


]
const Company = () => {
    return (
        <div className='w-full bg-white py-16 px-4 mt-[60px]'>
            <div className='max-w-[1240px] mx-auto'>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-2'>
                    <div className='grid col-span-1 grid-cols-1 lg:gird-cols-1 md:grid-cols-1'>
                        <div className='h-[60px] w-96 p-2 shadow-2xl menu'>
                            <h2>Hello</h2>
                        </div>
                    </div>
                    <div className='grid col-span-2 grid-cols-2 gap-2 '>
                        {data2.map((item, index) => {
                            return (
                                <div className='h-40 w-[100%] p-2 shadow-2xl mb-4 opacity-80 hover:opacity-[150]'>
                                    <div className='flex'>
                                        <img src={logo} alt='' width={70} />
                                        <h2 className='font-bold text-[#00df9a] mt-4'>{item.name}</h2>
                                        
                                    </div>
                                    <p className='font-bold'>Address: {item.address}</p>
                                    <p className='font-bold'>Salary: {item.salary}</p>
                                    
                                    <p className='font-bold'>Experience: {item.experience}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company

