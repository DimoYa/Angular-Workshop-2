import { Component, OnInit } from '@angular/core';
import ITheme from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  public allThemes!: ITheme[];

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(data => {
      this.allThemes = data.sort((a, b) => b.subscribers.length - a.subscribers.length);
    });
  }

}
