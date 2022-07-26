import { Component, OnInit } from '@angular/core';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MaincontentComponent implements OnInit {
  constructor(private getpic: GetPicsService) {}

  pic: any;
  ngOnInit(): void {
    this.getpic.getPics().subscribe((res) => console.log(res));
  }
}
