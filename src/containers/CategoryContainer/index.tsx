import { useEffect, useState } from "react"
import Pokemon from "./Pokemon";
import { useNavigate } from "react-router-dom";

interface PokemonData {
    name: string;
}

interface ResponseData{
    results: PokemonData[];
}

const CategoryContainer = () => {

    const navigate = useNavigate();

    const [pokemons, setPokemons] = useState<PokemonData[]>([])

    const fetchingPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data: ResponseData = await response.json();
        const result = data.results
        setPokemons(result)
    }

    useEffect(
        () => {
            fetchingPokemon()
        },
        []
    )

    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex justify-center">
                <h1 className="text-3xl">
                    LIST OF CATEGORY
                </h1>
            </div>
            <button onClick={() => navigate('/add')}
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">Add
            </button>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">ID</th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Status</th>
                            <th></th>
                        </tr>
                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                            <td className="p-3 px-5"><input type="text" className="bg-transparent"/>
                                <Pokemon pokemons={pokemons}/>
                            </td>
                            <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">Active</option>
                                    <option value="admin">Deactive</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                </svg>Edit</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                        <tr className="border-b hover:bg-orange-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent"/></td>
                            <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">Active</option>
                                    <option value="admin">Deactive</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                </svg>Edit</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                        
                        <tr className="border-b hover:bg-orange-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent"/></td>
                            <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">Active</option>
                                    <option value="admin">Deactive</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                </svg>Edit</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent"/></td>
                            <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">Active</option>
                                    <option value="admin">Deactive</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                </svg>Edit</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                        <tr className="border-b hover:bg-orange-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent"/></td>
                            <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">Active</option>
                                    <option value="admin">Deactive</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                </svg>Edit</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryContainer