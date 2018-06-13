---
id: processing-elements
title: Processing Elements
sidebar_label: Processing Elements
---

#Processing Elements
This page explains all the Procesing Elements that are available in the StreamPipes Starter Kit.
New Processing Elements can also be included during runtime.
The once presented on this page come with StreamPipes and cen be used immediately. 
The next section "Developer Guide" explains how new Processing Elements can be implemented and integrated into StreamPipes.

## Data Streams

??? info "Water Level"
	 	Example Event
		  {
				"underflow": false,
				"overflow": false,
				"level": 74.2184,
				"timestamp": 1515450274503,
				"sensorId": "level01"
			}
    
??? info "Flow Rate"
		Example Event: 
			{
				"mass_flow":5.344,
				"temperature":45.8665,
				"timestamp":1515450053387,
				"sensorId":"flowrate01"
			}
     
??? info "Pressure Tank"
    Example Event: 
		{
			"pressure": 57.1648,
			"timestamp": 1515450424800,
			"sensorId": "pressure01"
		}

??? info "Vehicle Position"
 		Example Event: 
		{
			"latitude": 40.7551,
			"plateNumber": "level02",
			"timestamp": 1515450606449,
			"longitude": -73.953
		}
		   
    
## Processing Elements

!!! info "Numerical Filter"
    Filters numerical values based on a given threshold
    
!!! info "Projection"
    Outputs a subset of an incoming event, e.g., if the input event contains both temperature and machineId, only the temperature can be send to the next component
     
!!! info "Text Filter"
    Filters text-based fields based on a filter condition
    
!!! info "Aggregation"
    Can be used to aggregate measurements, e.g., to calculate the average temperature during the last 10 minutes

!!! info "Peak Detection"
    This component detects peaks in time series data
    
!!! info "Timestamp Enrichment"
    Appends the current time to any incoming event
    
!!! info "Increase"
    Detects the increase of a value over time, e.g., a 10-percent-increase of the temperature within 5 minutes

!!! info "Co-Occurrence"
    Can be used to detect the co-occurrence of two events, e.g., a high temperature occurs together with high dust particle level within 10 minutes

## Data Sinks

!!! info "Notification"
    Creates a notification in the ProaSense UI.
    
!!! info "Dashboard"
    Forwards events to the visualization component
    
!!! info "CouchDB"
    Stores data in a CouchDB database
    
!!! info "Kafka Publisher"
    Forwards data to a Kafka cluster
    
!!! info "Elasticsearch"
    Stores data in an Elasticsearch cluster

