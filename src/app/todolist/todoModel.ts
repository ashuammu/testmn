export class Model{
    user;
    items;

    constructor(){
        this.user = "vinay";
        this.items = [
                        new Todoitem("buy flowers", false),
                        new Todoitem("clean rooms", false),
                        new Todoitem("wash bike", false),
                        new Todoitem("fill bike petrol",false)
                    ]
        
        }
    }
export class Todoitem{
    action;
    done;

    constructor(acton, don){
        this.action = acton;
        this.done = don;  
    }
}