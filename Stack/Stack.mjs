import  Node from './Node.mjs'

export default class Stack
{
    constructor(value)
    {
        const newNode = new Node(value)

        this.top=newNode
        this.Length=1
    }

    push(value)
    {
        const newNode= new Node(value);
        if(this.Length===0)
        {
            this.top=newNode;
        }
        else
        {
            newNode.next=this.top;
            this.top=newNode;
        }
        this.Length++;
        return this;
    }

    pop()
    {
        if(this.Length ===0)
        {
            return undefined;
        }

        let temp = this.top;

        this.top = this.top.next;

        temp.next=null;
        this.Length--;
        return temp
    }
}