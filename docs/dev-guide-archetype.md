---
id: dev-guide-archetype
title: Start Developing
sidebar_label: Start Developing
---

In this tutorial we explain how you can use the Maven archetypes to develop your own StreamPipes processors and sinks.
We use IntelliJ in this tutorial, but it works with any IDE of your choice.

## Prerequisites
You need to have Maven installed, further you need a up and running StreamPipes installation on your development computer.
To ease the configuration of environment variables we use the IntelliJ [env Plugin](https://plugins.jetbrains.com/plugin/7861-envfile).
Install this in IntelliJ. The development also works without the plugin, then you have to set the environment variables manually instead of using the env configuration file.

## Create Project
To create a new project we provide Maven Archteypes.
Currently we have archetypes for the JVM and Flink wrapper, each for processors and sinks.
The commands can be found below. Make sure that you select a version compatible with your StreamPipes installation.
Copy the command into your terminal to create a new project.
The project will be created in the current folder.
First a group id must be set.
We use groupid: **org.example** and artifactId: **ExampleProcessor**.
You can keep the default values for the other settings, confirm them by hitting enter.
Now a new folder with the name **ExampleProcessor** is generated.


```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.60.1
```
<details class="info">
    <summary>Select: [Processors / Sinks] [JVM / Flink]</summary>

## Processors JVM
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.60.1
```

## Processors Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.60.1
```

## Sinks JVM
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.60.1
```

## Sinks Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.60.1
```
</details>


## Edit Processor
Open the project in your IDE.
When everything worked, the structure should look like in the following image.
The *config* package contains all the configuration parameters of your processors / sinks.
In the *main* package it is defined which processors / sinks you want to activate and the *pe.processor.example* package contains three classes with the application logic.
For details have a look at the other parts of the Developer Guide, where those classes are explained in detail.

<img src="/img/archetype/project_structure.png" width="30%" alt="Project Structure">

Open the class *Example* and edit the onEvent method to print the incoming event, log it to the console and send it to the next component without changing it.

```java
@Override
public void onEvent(Map<String, Object> in, String sourceInfo, SpOutputCollector out) {
    // Print the incoming event on the console
    System.out.println(in);

    // Hand the incoming event to the output collector without changing it.
    out.onEvent(in);
}
```

## Start Processor
Before the processor can be started you need to edit the *env* file in the *development* folder.
Replace all local hosts in this file the IP address or DNS name of your computer.
This is relevant to make the mapping between the services running in Docker and your component running in the IDE.
After changing all values this file is used by the envfile plugin.
As an alternative those environment variables can also be set on your host or IDE.
Now start the project by clicking on **(Run -> Edit Configuration)**.
Add a new configuration in the Configuration menu by clicking on the + sign and select **Application**.
Name the Configuration *ExampleProcessor* and select the *Init* class as the 'Main class'.
Then set *ExampleProcessor* in 'Use classpath of module'.


As the last step switch to the tab *EnvFile* and load the env file.
Click on 'Enable EnvFile' to activate it and add the just edited env file by clicking on the + sign.
Save all the changes by clicking Apply.
Then you can start the processor.

<div class="my-carousel">
    <img src="/img/archetype/run_configuration.png" alt="Configuration View">
    <img src="/img/archetype/run_env_configuration.png" alt="Environment Configuration View">
</div>

To check if the service is up and running open the browser on *'localhost:6666'*, there the description of the processor should be visible as shown below.

<img src="/img/archetype/endpoint.png" width="90%" alt="Project Structure">


<details class="error">
    <summary>Common Problems!</summary>
If the service description is not shown on 'localhost:6666', you might have to change the Port number.
You have to do this in the configurations of your service.
This is also explained in the Configurations part of the developer guide.

If the service does not show up in the StreamPipes installation menu, click on 'MANAGE ENDPOINTS' and add 'http://<span></span>YOUR_IP_OR_DNS_NAME:6666'.
Use the IP or DNS name you provided in the env file.
After adding the endpoint a new processor with the name *Example* should show up.

## Processors JVM
</details>


Now you can go to StreamPipes.
Your new processor *'Example'* should now show up in the installation menu.
Install it, then switch to the pipeline view and create a simple pipeline with your processor in the middle.
In case you opened the StreamPipes installation for the first time it should be automatically installed during the setup process.

<img src="/img/archetype/example_pipeline.png" width="80%" alt="Project Structure">

Start this pipeline.
Now you should see logging messages in your console and when you create a visualisation you can see the resulting events of your component.

Congratulations you have just created your first processor.
From here on you can start experimenting and implement your own algorithms.
