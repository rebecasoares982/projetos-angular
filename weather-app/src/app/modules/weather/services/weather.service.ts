import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c28b5f21dad2dc264d3bee88fe820499'

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&mode=json&apid=${this.apiKey}',
      {}
    );
  }
}
