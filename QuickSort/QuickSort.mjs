export default class QuickSort
{
    constructor()
    {

    }

    swap(array,firstIndex,secondIndex)
    {
         let temp = array[firstIndex];
         array[firstIndex]=array[secondIndex];
         array[secondIndex]= temp;
    }

    pivot(array,pivotIndex=0,endIndex=array.length-1)
    {
        let swapIndex = pivotIndex;
        for(let i=pivotIndex+1;i<=endIndex;i++)
        {
            if(array[i] < array[pivotIndex])
            {
                swapIndex++;
                this.swap(array,swapIndex,i);
            }
        }
        this.swap(array,pivotIndex,swapIndex);
        return swapIndex;
    }

    quickSort(array,left=0,right=array.length-1)
    {
        if(left < right)
        {
            let pivotIndex = this.pivot(array,left,right);
            this.quickSort(array,left,pivotIndex-1);
            this.quickSort(array,pivotIndex+1,right);
        }
        return array;
    }
}