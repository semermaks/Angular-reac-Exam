import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(private service:ApiserviceService){}

  readDataStudent:any;


  ngOnInit():void{
    this.service.getAllDataStud().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataStudent=res.data;
    });
  }
}
