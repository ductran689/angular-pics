import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/pic.model';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
  pictures:Pic[]=[]
  constructor(private getpics:GetPicsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.getpics.getPics().subscribe((res:any)=>{
      this.pictures=res
    })
  }

}
