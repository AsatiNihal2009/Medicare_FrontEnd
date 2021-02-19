import { Age } from "../_enum/age.enum";
import { Category } from "../_enum/category.enum";
import { State } from "../_enum/state.enum";

export class Product {
    categoryName?:Category;
    age?:Age;
    state?:State;
    quantity?:Number;
    itemName?:string;
    itemTotal?:Number;

    constructor(categoryName:Category,age:Age,state:State,quantity:Number,itemName:string,itemTotal:Number){
        this.categoryName=categoryName;
        this.age=age;
        this.state=state;
        this.quantity=quantity;
        this.itemName=itemName;
        this.itemTotal=itemTotal;
    }
}


