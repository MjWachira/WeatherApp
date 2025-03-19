provider "azurerm" {
  features {}

  subscription_id = "05efeed5-24b8-40d2-9609-ce5533de9950"
}

# Create Resource Group
resource "azurerm_resource_group" "johnsgroup" {
  name     = "johnsgroup"
  location = "East US 2"
}

# Create Free App Service Plan
resource "azurerm_service_plan" "weatherapp_plan" {
  name                = "weatherapp-plan"
  resource_group_name = azurerm_resource_group.johnsgroup.name
  location            = azurerm_resource_group.johnsgroup.location
  os_type             = "Linux"
  sku_name            = "F1"  # Free Plan
}

# Create Linux Web App
resource "azurerm_linux_web_app" "weatherapp_backend" {
  name                = "weatherapp-backend"
  resource_group_name = azurerm_resource_group.johnsgroup.name
  location            = azurerm_resource_group.johnsgroup.location
  service_plan_id     = azurerm_service_plan.weatherapp_plan.id

  site_config {
    application_stack {
      dotnet_version = "8.0"  # Use this for .NET apps
    }
  }
}
