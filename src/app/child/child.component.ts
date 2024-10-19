import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() hero : EventEmitter<any> = new EventEmitter()
  
ngOnInit()
{
  
}
SendData()
{
  this.hero.emit('send data child to parent')
}

}
