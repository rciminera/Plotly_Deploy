# Plotly_Deploy
###  Belly Button Bio Diversity
by Bob Ciminera

## Overview

The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, researchers at North Carolina State University launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.

In this analysis, a web page has been created to identify specific species of bacteria by individual test subjects taken from a number of studies.  This can be used to identify those subjects that have bacteria that is found to be useful.

Tools used in the analysis include Javascript, JSON, HTML, and CSS.

The webpage can be accessed by using the following link:

https://rciminera.github.io/Plotly_Deploy/

## Results

Four technical analyses were prepared and presented on the webpage to provide test sample information for each subject in the study.  A drop down menu allows a user to select a test subject by id which then causes 4 analyses to display  on the page foir that id.

The HTML and Javascript code used to present the webpage are in the following files:

[html.index](https://github.com/rciminera/Plotly_Deploy/blob/main/index.html)

[charts.js](https://github.com/rciminera/Plotly_Deploy/blob/main/Static/js/charts.js)


#### I. Demographic Info

A table of demographic data is presented for the test subject with key information such as gender, age, and location.

#### II. Top 10 Bacteria Cultures

A horizontal bar chart shows the number of observations for each of top 10 bacteria identified for each individual in descending order by occurence.

More information about each data point is obtained by hovering over a bubble.

#### III. Washing Frequency

A gauge chart is available to indicate the frequency of washing per week.

#### IV. Bacteria Cultures per Sample

A bubble chart is presented to show all bacteria by occurrence for the selected test subject.

Finally, some customizations were made to make the webapge more useful including:

1. image was added to the jumbotron
2. font size and color changed on the jumbotron
2. an earth color pallet was added to the bubble chart  
3. title was added to the bubble chart y axis


## Summary

The webpage is a useful interactive tool for researchers to identify those subjects that have the bacteria that they may be seeking for a specific application or study.

![GitHubLogo](https://github.com/rciminera/Plotly_Deploy/blob/main/Screenshots/bellybuttonpage.png)

