import Node from './Node.mjs'

export default class BST
{
    constructor()
    {
        this.root=null;
        this.result=[];
    }

    insert(value)
    {
        const newNode = new Node(value);
        if(this.root === null)
        {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true)
        {
            if(newNode.value === temp.value)
            {
                return undefined;
            }
            if(newNode.value < temp.value)
            {
                if(temp.left === null)
                {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            else
            {
                if(temp.right===null)
                {
                    temp.right = newNode;
                    return this;
                }
                temp=temp.right;
            }
        }
    }

    contains(value)
    {
        if(this.root === null)
        {
            return false;
        }
        let temp = this.root;
        while(temp)
        {
            if(value < temp.value)
            {
                temp = temp.left;
            }
            else if ( value > temp.value)
            {
                temp = temp.right;
            }
            else
            {
                return true;
            }
        }
        return false;
    }

    MinimumValue(CurrentNode)
    {
        while(CurrentNode.left != null)
        {
            CurrentNode = CurrentNode.left;
        }

        return CurrentNode;
    }

    BFS()
    {
        let CurrentNode = this.root;
        let queue=[];
        let result=[];
        queue.push(CurrentNode);
        while(queue.length)
        {
            CurrentNode= queue.shift();
            result.push(CurrentNode.value);
            if(CurrentNode.left)
            {
                queue.push(CurrentNode.left);
            }
            if(CurrentNode.right)
            {
                queue.push(CurrentNode.right);
            }
        }
        return result;
    }

    Traverse(CurrentNode)
    {
         this.result.push(CurrentNode.value);
         if(CurrentNode.left)
         {
            this.Traverse(CurrentNode.left);
         }
         if(CurrentNode.right)
         {
            this.Traverse(CurrentNode.right);
         }
    }

    TraverseDFSPostOrder(CurrentNode)
    {
        
         if(CurrentNode.left)
         {
            this.TraverseDFSPostOrder(CurrentNode.left);
         }
         if(CurrentNode.right)
         {
            this.TraverseDFSPostOrder(CurrentNode.right);
         }
         this.result.push(CurrentNode.value);
    }

    TraverseDFSInOrder(CurrentNode)
    {
        
         if(CurrentNode.left)
         {
            this.TraverseDFSInOrder(CurrentNode.left);
         }
         this.result.push(CurrentNode.value);
         if(CurrentNode.right)
         {
            this.TraverseDFSInOrder(CurrentNode.right);
         }
        
    }

    DFSPreOrder()
    {
        this.result=[]
        this.Traverse(this.root);
        return this.result;
    }

    DFSPostOrder()
    {
        this.result=[]
        this.TraverseDFSPostOrder(this.root);
        return this.result;
    }

    DFSInOrder()
    {
        this.result=[]
        this.TraverseDFSInOrder(this.root);
        return this.result;
    }
}