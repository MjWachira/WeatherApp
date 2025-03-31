import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-weather',
  template: `
  <div class="container mt-4">
    <h2 class="text-primary text-center">Weather Forecasts..............</h2>
    <div class="row justify-content-center d-flex flex-wrap">
      <div class="col-md-4" *ngFor="let weather of weatherData">
        <div class="card shadow-sm border-primary mb-3 p-3">
          <div class="card-body">
            <h5 class="card-title">{{ weather.date }}</h5>
            <p class="card-text">
              <strong>Temperature:</strong> {{ weather.temperatureC }}°C
            </p>
            <p class="card-text">
              <strong>Summary:</strong> {{ weather.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`,
styles: [
  `
    .card {
      transition: transform 0.3s ease-in-out, margin-left 0.3s ease-in-out;
      padding: 20px;
      margin-bottom: 15px;
    }
    .card:hover {
      transform: scale(1.05);
      margin-left: 10px;
    }
    .text-primary {
      font-family: Arial, sans-serif;
    }
    .d-flex {
      display: flex;
      gap: 15px;
    }
  `
]
})
export class WeatherComponent {
  weatherData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://my-weather-app-backend.azurewebsites.net/api/weather').subscribe(
      data => this.weatherData = data,
      error => console.error('Error fetching weather data', error)
    );
  }

}
