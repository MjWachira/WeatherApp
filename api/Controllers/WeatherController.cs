using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/weather")]
public class WeatherController : ControllerBase
{
    private readonly IWebHostEnvironment _env;

    public WeatherController(IWebHostEnvironment env)
    {
        _env = env;
    }

    [HttpGet]
    public IActionResult GetWeather()
    {
        var filePath = Path.Combine(_env.ContentRootPath, "weather.json");
        if (!System.IO.File.Exists(filePath))
        {
            return NotFound("Weather data file not found.");
        }

        var jsonData = System.IO.File.ReadAllText(filePath);
        var weatherData = JsonSerializer.Deserialize<object>(jsonData);

        return Ok(weatherData);
    }
}
