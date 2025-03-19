provider "azurerm" {
  features {}
}

resource "azurerm_static_site" "weatherapp" {
  name                = "weatherapp-frontend"
  resource_group_name = "johnsgroup"
  location           = "East US 2"

  sku_tier = "Free"
  sku_size = "Free"

  repository_url       = "https://github.com/MjWachira/WeatherApp"
  branch              = "main"
  app_location        = "ui"
  output_location     = "ui/dist"

  # Enable GitHub Actions for automatic deployments
  allow_configure_github_action = true
}
