---
id: version-0.62.0-org.streampipes.processors.enricher.flink.processor.trigonometry
title: Trigonometry Functions
sidebar_label: Trigonometry Functions
original_id: org.streampipes.processors.enricher.flink.processor.trigonometry
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.processors.enricher.flink.processor.trigonometry/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Performs Trigonometric functions (sin, cos, tan) on event properties.

***

## Required input
The trigonometry processor works with any event that has at least one field containing a numerical value.

***

## Configuration

Describe the configuration parameters here

### Alpha
The field that should be used for calculating the trigonometric function.


### Operation
The trigonometric function that should be calculated.

## Output
The processor appends the calculation result to each input event.