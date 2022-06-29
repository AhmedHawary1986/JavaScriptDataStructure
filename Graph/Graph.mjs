export default class Graph
{
    constructor()
    {
        this.AdhacencyList={};
    }
    addVertex(value)
    {
        if(!this.AdhacencyList[value])
        {
            this.AdhacencyList[value]=[];
            return true;
        }
        else
        {
            return false;
        }
    }

    addEdge(vertexOne,vertexTwo)
    {
        if(this.AdhacencyList[vertexOne] && this.AdhacencyList[vertexTwo])
        {
          this.AdhacencyList[vertexOne].push(vertexTwo)
          this.AdhacencyList[vertexTwo].push(vertexOne)   
          return true;
        }
        else
        {
            return false;
        }
    }

    removeEdge(vertexOne,vertexTwo)
    {
        if(this.AdhacencyList[vertexOne] && this.AdhacencyList[vertexTwo])
        {
        this.AdhacencyList[vertexOne] =  this.AdhacencyList[vertexOne].filter(v=> v !== vertexTwo)
        this.AdhacencyList[vertexTwo] =  this.AdhacencyList[vertexTwo].filter(v=> v !== vertexOne)

        return true;
        }
        else
        {
            return false;
        }
    }

    removeVertex(vertex)
    {
        if(this.AdhacencyList[vertex])
        {
            while(this.AdhacencyList[vertex].length)
            {
                let temp = this.AdhacencyList[vertex].pop();
                this.removeEdge(vertex,temp);
            }
            delete this.AdhacencyList[vertex];
        }

        return this;
    }

}