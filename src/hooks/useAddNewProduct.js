import { useState } from "react"

import {ref,push,set} from "firebase/database"

import {ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage'
import {db,storage} from "libs/firebase"

function useAddNewProduct() {
    const [loading, setLoading]= useState(false)

        const productLoader = async function(productData, imageFile) {
        setLoading(true);
        
        //Pushes unique shoe id into the realtime database
        const newRef = await push(ref(db,'shoes'))
        
        const imageRef= await storageRef(storage,`images/products/${imageFile.name}`)
        const uploadRef = await uploadBytes(imageRef,imageFile)
        const imageUrl = await getDownloadURL(imageRef)
        set(newRef,{...productData})
        
        //promise all takes an array of promises before we pass to the real time database
        let results = Promise.all([newRef,imageRef,uploadRef,imageUrl])
        
        //this writes the data to the realtime databbase
        results.then(()=> {
            set(newRef, {
                ...productData,
                imageUrl,
                imageStoragePath:uploadRef.metadata.fullPath,
                uid:newRef.key 
            })
            .then(()=> {
                //this means the loading state is false which means its finished
                setLoading(false)
            })
        })
    }

    return[loading,productLoader]
}

export {useAddNewProduct}