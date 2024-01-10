import { useContext, ContextType } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../providers/Provider";
import { useForm } from "react-hook-form";

import * as yup from "yup"
import axios, { AxiosError } from "axios";


interface FormProps {
  name?: string;
  is_active?: boolean
}

const schema = yup
  .object({
    name: yup.string().required(),
    is_active: yup.boolean().required(),
  })
.required()

const AddContainer = () => {

  const navigate = useNavigate();
  

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
      resolver: yupResolver(schema)
  })

  

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          
          
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">

                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                      <input required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                  </div>

                  

                  
                  {/* <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                      
                    </div>
                    <div className="mt-2">
                      <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                  </div> */}
                </form>

              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
              <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContainer

function yupResolver(schema: any): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> | undefined {
  throw new Error("Function not implemented.");
}
