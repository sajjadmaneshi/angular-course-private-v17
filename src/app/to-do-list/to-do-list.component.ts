import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ToDoListItemComponent} from "./to-do-list-item/to-do-list-item.component";


@Component(
  {
    selector: 'app-to-do-list',
    templateUrl: 'to-do-list.component.html',
    // template:`
    //   <h1>to-do-list work correctly</h1>
    //   <h2>h2</h2>
    // `,
    styleUrls: ['to-do-list.component.scss'],
    imports: [
      FormsModule,
      ToDoListItemComponent
    ],
    // styles:[
    //   `h2{
    //     color: red;
    //   }`
    standalone: true
  }
)
export class ToDoListComponent{
  changeEvent='hello'
  allowedAddNewTask=false;
  taskName='';
  showNewTask=false;
  twoWayBinding='hello';
  tasks:{id:number,name:string,importance:string}[]=[];
  static id=1;
  importance!:string;
  constructor() {
    setTimeout(()=>{
      this.allowedAddNewTask=true;
    },5000)
  }

  addTask(){
    //
    // console.log('on button click')
    // console.log(event);
    if(this.taskName){
      this.tasks.push({id:ToDoListComponent.id,name:this.taskName,importance:this.importance});
      ToDoListComponent.id++;
    }
    //
    // this.showNewTask=true;
  }

  sendTaskName(event:any){
    this.taskName=event.target.value
  }
}
