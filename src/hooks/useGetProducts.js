import {useState, useEffect}  from 'react'
import {ref,get} from 'firebase/database'
import {db} from 'libs/firebase'

function useGetProducts(path='shoes') {
    const [productData, setProductData] = useState(null)

    useEffect(()=>{
       async function getProductData() {
         // takes us to the root of the database
         const productRef = ref(db, path)
         const productSnapShot = await get(productRef)
         // val grabs objects from a snapshot
         // then must change the object to an array of objects using the object.values
         setProductData(Object.values(productSnapShot.val()))
         
       }
       getProductData()
    },[path])

    return productData;
}

export {useGetProducts}