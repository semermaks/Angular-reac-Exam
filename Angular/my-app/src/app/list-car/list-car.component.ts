import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  constructor(private service:ApiserviceService){}
  readData:any;
  ngOnInit():void{
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData=res.data;
    });
  }
  deleteID(id:any)
  {
    console.log(id,'delete==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'delete res=>>');
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData=res.data;
      });
    })
  }
}
