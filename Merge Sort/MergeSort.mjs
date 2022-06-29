export default class MergeSort
{
    constructor()
    {

    }
   
    merge(arrayOne,arrayTwo)
    {
        let combined=[];
        let i=0;
        let j=0;
       
        
        while(i<arrayOne.length && j < arrayTwo.length)
        {
            if(arrayOne[i]<arrayTwo[j])
            {
                combined.push(arrayOne[i]);
                i++;
            }
            else
            {
                combined.push(arrayTwo[j]);
                j++;
            }
        }

        while(i< arrayOne.length)
        {
            combined.push(arrayOne[i]);
            i++
        }
        while(j<arrayTwo.length)
        {
            combined.push(arrayTwo[j]);
            j++
        }
        return combined;
    }

   

    mergeSort(array)
    {
        if(array.length === 1)return array
        

        let mid= Math.floor(array.length/2);

        let left = array.slice(0,mid);

        let right = array.slice(mid);

        return this.merge(this.mergeSort(left),this.mergeSort(right));
    }

    
    
    
}