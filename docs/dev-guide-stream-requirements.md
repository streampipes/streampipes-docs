---
id: dev-guide-stream-requirements
title: SDK Guide: Stream Requirements
sidebar_label: Stream Requirements
---

## Introduction

Data processors and data sinks can define ``StreamRequirements``. Stream requirements allow pipeline elements to express requirements on an incoming event stream that are needed for the element to work properly.
Once users create pipelines in the StreamPipes Pipeline Editor, these requirements are verified against the connected event stream.
By using this feature, StreamPipes ensures that only pipeline elements can be connected that are syntactically and semantically valid.

This guide covers the creation of stream requirements. Before reading this section, we recommend that you make yourself familiar with the SDK guide on [data processors](dev-guide-processor-sdk.md) and [data sinks](dev-guide-sink-sdk.md).


## The StreamRequirementsBuilder

Stream requirements can be defined in the ``Controller`` class of the pipeline element. Start with a method body like this:

```java

@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create(ID, PIPELINE_ELEMENT_NAME, DESCRIPTION)
            .requiredStream(StreamRequirementsBuilder.
                    create()

                    .build())

            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```

The ``StreamRequirementsBuilder`` class provides methods to add stream requirements to a pipeline element.

## Requirements on primitive fields

As a very first example, let's assume we would like to create a data processor that filters numerical values that are above a given threshold.
Consequently, any data stream that is connected to the filter processor needs to provide a numerical value.

The stream requirement would be assigned as follows:

```java
@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create(ID, PIPELINE_ELEMENT_NAME, DESCRIPTION)
            .requiredStream(StreamRequirementsBuilder.
                    create()

                    .build())

            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```
