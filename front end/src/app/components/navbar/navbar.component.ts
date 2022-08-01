import { Component, OnInit } from '@angular/core';
import {GetPicsService} from '../../services/getPics/get-pics.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private getPicService:GetPicsService) { }

  ngOnInit(): void {
  }
   pic:any ='';
  getPic(){

    this.getPicService.getPics().subscribe((res)=>{
      return this.pic=res
      console.log(this.pic.url)
    })

  }
}
