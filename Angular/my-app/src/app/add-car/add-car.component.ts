import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  constructor(private service:ApiserviceService,private router:ActivatedRoute){}
  errormsg:any;
  successmsg:any;
  getparamid:any;
  ngOnInit():void{

    this.getparamid=this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,"res==>");
        this.productForm.patchValue({
          'year':res.data[0].year,
          'name':res.data[0].name,
          'price':res.data[0].price,
        })

      });
    }

  }
  productForm=new FormGroup({
    'year':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'price':new FormControl('',Validators.required),
  });

  productSubmit()
  {
    if(this.productForm.valid){
      console.log(this.productForm.value);

      this.service.createData(this.productForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.productForm.reset();
        this.successmsg=res.message;
      });

    }else{
      this.errormsg='all fields are required';

    }

  }
  productUpdate()
  {
    console.log(this.productForm.value,"Update from");
    if(this.productForm.valid){


      this.service.updateData(this.productForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');

      });

    }else{
      this.errormsg='all fields are required';

    }

  }
}
