function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("Data/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("Data/samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(data);
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

//Create the buildCharts function.
function buildCharts(sample) {
//Use d3.json to load and retrieve the samples.json file 
d3.json("Data/samples.json").then((data) => {
   console.log(data); 
//Create a variable that holds the samples array. 
   var samples = data.samples;
//Create a variable that filters the samples for the object with the desired sample number.
   var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
//Create a variable that holds the first sample in the array.
   var sampleData = samplesArray[0];
   console.log(sampleData); 
//Create variables that hold the otu_ids, otu_labels, and sample_values.
   var otu_ids = sampleData.otu_ids;
   console.log(otu_ids);
   var otu_labels = sampleData.otu_labels;
   var sample_values = sampleData.sample_values;
// 
// Create Horizontal Bar Chart
// 
// Create the yticks for the bar chart.
// Get the the top 10 otu_ids and map them in descending order  
// so the otu_ids with the most bacteria are last. 
  var yticks = otu_ids.slice(0,10).reverse().map(otuID => `OTU ${otuID}`);
  //Create the trace for the bar chart. 
  var barData = [
    {
      y: yticks,
      x:sample_values.slice(0,10).reverse(),
      text:otu_labels.slice(0,10).reverse(),
      type:"bar",
      orientation:"h"
    }
    ];
    //Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    //Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

// }
// 
// // BUBBLE CHART 
// // Create the trace for the bubble chart.
  var bubbleData = 
      {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'Earth',  
       }
      };
  var bubbleArray = [bubbleData] 

// 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {
        title: "OTU ID"
      },
      yaxis: {
        title: "Sample Value"
      },
      hovermode: "closest",
      showlegend: false,
      height: 600
    };

// Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleArray, bubbleLayout);  
// 
// GAUGE CHART 
    // Filter the data for the object with the desired sample number
    var metadata = data.metadata
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
// // Create the trace for the gauge chart.
  var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: resultArray[0].wfreq,
      title: { text: "<b>Body Washing Frequency</b><br>Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow"},
          { range: [6, 8], color: "#5EFF33" },
          { range: [8, 10], color: "green"},
        ]
        }
      }
  ];
    
// Create the layout for the gauge chart.
  var gaugeLayout = { 
      // width: 600, 
      height: 450, 
      margin: { t: 0, b: 0 } 
  };

// Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout); 
  } 
)};
// save as a reminder for CORS error: python -m http.server


