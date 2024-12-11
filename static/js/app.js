// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    console.log(metadata);


    // Filter the metadata for the object with the desired sample number
    let sampleMetadata = metadata.filter(data => data.id == sample)[0];
    console.log('sample meta data', sampleMetadata);
    

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");


    // Use `.html("") to clear any existing metadata
    panel.html("");


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (let key in sampleMetadata) {
      panel.append("h6").text(`${key.toUpperCase()}: ${sampleMetadata[key]}`);
            
 } 

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;


    // Filter the samples for the object with the desired sample number
    let sampleData = samples.filter(data => data.id === sample)[0];
    console.log('sample data', sampleData);
    


    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sampleData.otu_ids;
    let otu_labels = sampleData.otu_labels;
    let sample_values = sampleData.sample_values;

    // Use console.log() to print 'otu_ids', 'otu_labels', 'sample_values' to the console
    console.log('otu_ids', otu_ids);
    console.log('otu_labels', otu_labels);
    console.log('sample_values', sample_values);


    // Build a Bubble Chart
    let traceBubbleChart = {
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      text: otu_labels,
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    };
    let dataBubbleChart = [traceBubbleChart];
    let layoutBubbleChart = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
     
    };


    // Render the Bubble Chart
    Plotly.newPlot('bubble', dataBubbleChart, layoutBubbleChart);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.slice(0, 10).map(idNum => `OTU ${idNum}`);


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let traceBarChart = {
      x: sample_values.slice(0, 10).reverse(),
      y: yticks.reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'
    };
    let dataBarChart = [traceBarChart];
    let layoutBarChart = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      
    };


    // Render the Bar Chart
    Plotly.newPlot('bar', dataBarChart, layoutBarChart);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names


    // Use d3 to select the dropdown with id of `#selDataset`
    let dropDownSelect = d3.select("#selDataset")


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((sample) => {
      dropDownSelect.append("option").text(sample).property("value", sample);
      });


    // Get the first sample from the list
    let firstSample = names[0];


    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);

}

// Initialize the dashboard
init();
