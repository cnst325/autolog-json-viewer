# AutoLog JSON Viewer - Web Version

A lightweight, browser-based viewer for AutoLog app backup files. No installation required.

## Features

- **Browser-Based** - No installation, just open and use
- **Privacy First** - All data processed locally in your browser
- **Cross-Platform** - Works on Windows, Mac, Linux, and mobile devices
- **Multilingual** - English and Korean supported
- **Export to CSV** - Excel-compatible format for all data types

## Quick Start

### Online (Recommended)

Host on GitHub Pages or any static file server.

### Offline

1. Download all files (`index.html`, `styles.css`, `app.js`)
2. Double-click `index.html` to open in your browser

## What You Can View

- **🚗 Vehicles** - All registered vehicles with details
- **⛽ Fuel/Charge Logs** - Refueling and charging history
- **🔧 Maintenance** - Service and repair records
- **💰 Expenses** - Other vehicle-related costs

## Data Summary

The viewer provides automatic cost summaries:
- Total Fuel/Charging Cost
- Total Maintenance Cost
- Total Other Expenses
- Combined Total

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Privacy & Security

All data processing happens entirely in your browser. No data is ever sent to any server.

## JSON File Format

The viewer expects JSON files exported from the AutoLog app with the following structure:

```json
{
  "schemaVersion": 1,
  "exportDate": "2025-12-25T12:00:00Z",
  "appVersion": "1.0.0",
  "vehicles": [...],
  "fuelLogs": [...],
  "maintenance": [...],
  "expenses": [...]
}
```

## License

MIT License

---

Made with ❤️ for AutoLog users
