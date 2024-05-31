# WiJungle Dashboard

This project is a network security dashboard that visualizes alert data using various types of charts. The charts included are Line Chart, Bar Chart, Pie Chart, and Doughnut Chart. The dashboard allows users to easily navigate and view different visual representations of the alert data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/wijungle-dashboard.git
   cd wijungle-dashboard
   ```

2. Install the dependencies:
   ```sh
    npm install
   ```
3. Start the development server:
   ```sh
    npm start
   ```
4. Open the browser and navigate to `http://localhost:3000/` to view the dashboard.

## Usage

Once the development server is running, open your browser and navigate to http://localhost:3000 to view the dashboard.

## Navigating the Dashboard

- Line Chart: Displays the number of alerts over time.
- Bar Chart: Shows the destination ports and the number of alerts associated with each port.
- Pie Chart: Visualizes the distribution of different alert signatures.
- Doughnut Chart: Represents the distribution of alert events based on source IP addresses.

  **NOTE:** Clicking on the items in the navigation bar will smoothly scroll to the corresponding chart section.

## Features

1. Line Chart: Tracks the frequency of alerts and identifies trends or spikes in network activity.
2. Bar Chart: Identifies the most frequently targeted ports in the network.
3. Pie Chart: Understands the variety and prevalence of different security threats.
4. Doughnut Chart: Highlights which source IPs are most active in generating alerts.
5. Smooth Scrolling Navigation: Click on the navbar items to scroll to the corresponding chart.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Chart.js: A JavaScript library for creating beautiful charts.
- React-Chartjs-2: A React wrapper for Chart.js.
- CSS: For styling the application.
- Bootstrap: For responsive design.
