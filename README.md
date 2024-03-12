# Cluster Visualization React App

This React application provides a dynamic visualization of clustering data using for example Plotly.js. It fetches cluster data from a Flask API and displays it in a scatter plot, allowing users to visually explore the distribution of clusters in space.

## Features

- Fetch cluster data from a custom Flask API.
- Visualize clustering data with dynamic scatter plots.
- Configuration of API URL through an external file.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- A running Flask API server that provides the cluster data.

## Installation
Build the Image using the following command:

```bash
$ docker build -t react-app:latest .
```

Run the Docker container using the command shown below:

```bash
$ docker run -d -p 3000:3000 react-app
```