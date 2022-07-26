import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/pic.model';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  pictures:Pic[]=[
    {url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pocket-lint.com%2Fr%2Fs%2Fx1920%2Fassets%2Fimages%2F146898-phones-feature-the-best-apple-iphone-photos-ever-taken-image1-ydter7skel.jpg&imgrefurl=https%3A%2F%2Fwww.pocket-lint.com%2Fphones%2Fnews%2Fapple%2F146898-the-best-apple-iphone-photos-ever-taken&tbnid=tpULeTbXjAcGPM&vet=12ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygCegUIARDIAQ..i&docid=jWWnhVRLNSxKhM&w=2882&h=1920&q=pictures&hl=en&ved=2ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygCegUIARDIAQ"},
    {url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fiso.500px.com%2Fwp-content%2Fuploads%2F2014%2F12%2Ffineart_cover.jpg&imgrefurl=https%3A%2F%2Fiso.500px.com%2Fbest-of-2014-top-10-fine-art-photos%2F&tbnid=3RyyM62lf5W8HM&vet=12ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygFegUIARDOAQ..i&docid=J8-EfpcRQ7d2FM&w=2000&h=1333&q=pictures&hl=en&ved=2ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygFegUIARDOAQ"},
    {url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2F2021%2F12%2Fbest-photos-2021-simon-paul-needham-lion.jpeg&imgrefurl=https%3A%2F%2Fmymodernmet.com%2Fbest-photos-of-2021%2F&tbnid=vrElrLQ2nIuyoM&vet=12ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygAegUIARDEAQ..i&docid=AISGAvgtjkDx6M&w=1200&h=1351&q=pictures&hl=en&ved=2ahUKEwjrh6HUuIf5AhV8k9gFHYEcBV4QMygAegUIARDEAQ"}
  ]
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
