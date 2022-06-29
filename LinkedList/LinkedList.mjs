import  Node from './Node.mjs';

export default class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value)
    {
        const newNode = new Node(value)
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
        }
        else
        {
            this.tail.next = newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop()
    {
        if(!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while(temp.next)
        {
            pre=temp;
            temp=temp.next;
        }

        this.tail=pre;
        this.tail.next=null;
        this.length--;
        if(this.length==0)
        {
            this.head=null;
            this.tail=null;
        }
        return temp;
    }
      
    Unshift(value)
    {
        if(!this.head)
        {
            this.push(value);
        }
        else
        {
            const newNode = new Node(value);
            newNode.next=this.head;
            this.head=newNode;
           

        }
        this.length++;
        return this;
    }

    Shift()
    {
      if(!this.head)
      {
          return undefined;
      }
      else
      {
          let temp =this.head;
          this.head= this.head.next;
          temp.next=null;
          this.length--;
          if(this.length === 0)
          {
              this.tail=null;
          }
          return temp;
      }
    }

    get(index)
    {
        if(index < 0 || index >= this.length)
        {
            return undefined;
        }

        let temp = this.head;

        for(let i=0; i<index;i++)
        {
            temp = temp.next;
        }
        return temp;
    }

    set(index,value)
     {
        let temp = this.get(index);
        if(temp)
        {
            temp.value=value;
            return true;
        }
        else
        {
            return false;
        }
    }

    insert(index,value)
    {
        if(index< 0 || index > this.length)
        {
            return
        }
        if(index===0)
        {
            return this.Unshift(value);
        }
        if(index=== this.length)
        {
            return this.push(value);
        }
        const newNode = new Node(value);
        let temp = this.get(index-1);

        newNode.next= temp.next
        temp.next=newNode;

        this.length++;

    }

    remove(index)
    {
        if(index< 0 || index >= this.length)
        {
            return false;
        }
        if(index===0)
        {
            return this.Shift();
        }
        if(index=== this.length-1)
        {
            return this.pop();
        }
       
        let before = this.get(index-1);
        let temp = before.next
        console.log("internal");
        console.log(JSON.stringify(temp));

        before.next=temp.next;
        temp.next=null;

        this.length--;
        return true;

    }

  
}