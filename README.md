# Introduction
This activity builds an interactive dashboard that visualizes the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small number of microbial species, called Operational Taxonomic Units (OTUs), are present in over 70% of individuals, while others are relatively rare.

## Project Overview

The dashboard allows users to explore the dataset interactively. Key features include:

* A horizontal bar chart showing the top 10 OTUs for a selected individual.
* A bubble chart displaying the distribution of all OTUs in the selected sample.
* A panel displaying demographic information for the selected individual.
* Dropdown-based interactivity to update all visualizations dynamically.

## Files and Folders

The repository is organized as follows:

* static/js/app.js – Contains the JavaScript code for building and updating the dashboard.
* index.html – The main HTML file for the dashboard.
* samples.json – Sample data file.

## Key Features
1. Horizontal Bar Chart:
Displays the top 10 OTUs for the selected individual, using:
* sample_values for the bar heights.
* otu_ids for the labels.
* otu_labels for the hover text.

2. Bubble Chart:
Visualizes all OTUs in the selected sample, with:
* otu_ids on the x-axis.
* sample_values on the y-axis and as marker sizes.
* otu_ids for marker colors.
* otu_labels for hover text.

3. Metadata Panel:
Displays demographic information for the selected individual by dynamically looping through the metadata in the dataset.

4. Dynamic Updates:
All visualizations and metadata update when a new sample is selected from the dropdown menu.

## How It Works

### Data Loading:
The D3 library fetches data from the JSON file hosted at:
https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
### Visualization Building:
The dashboard uses Plotly to create and update the bar and bubble charts.
### Interactivity:
A dropdown menu enables users to select a sample ID, triggering updates to the charts and metadata panel.

## How to Run Locally
1. Clone the repository:
    ##### git clone https://github.com/your-username/belly-button-biodiversity.git 
2. Navigate to the project directory 
    ##### cd belly-button-biodiversity
3. Open **index.html** in your web browser.    

## Technologies Used

* JavaScript (with D3.js and Plotly.js)
* HTML
* JSON