import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ITheme from '../model/Theme';
import { environment } from '../../environments/environment';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getThemes(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${BASE_URL}/themes`);
  }
}
