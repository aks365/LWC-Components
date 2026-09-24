# Salesforce LWC Components

## Overview

This repository contains a collection of reusable Salesforce Lightning Web Components (LWC) developed to enhance the user interface and functionality of Salesforce applications.

The repository is designed to maintain multiple independent and reusable LWC components in a single project. Each component is organized in its own folder and can be deployed to a Salesforce org as required.

## Components

### 1. Modal Popup

A reusable Lightning Web Component that displays a modal popup when a user clicks a button.

**Features:**
- Opens a modal popup on button click.
- Displays a custom title and message.
- Includes a Close button to dismiss the popup.
- Uses Salesforce Lightning Design System (SLDS) for styling.

**Use Cases:**
- Displaying confirmation messages.
- Showing custom forms or record details.
- Presenting information without navigating away from the current page.

## Upcoming Components

The following components will be added to this repository:

- Accordion
- Progress Bar
- Data Table and more...

## Technology Stack

- Salesforce Lightning Web Components (LWC)
- JavaScript
- HTML
- CSS
- Salesforce Lightning Design System (SLDS)
- Salesforce CLI
- Visual Studio Code

## Project Structure

```text
force-app/
└── main/
    └── default/
        └── lwc/
            ├── modalPopup/
            │   ├── modalPopup.html
            │   ├── modalPopup.js
            │   ├── modalPopup.js-meta.xml
            │   └── modalPopup.css
            ├── accordion/
            ├── progressBar/
            └── dataTable/
```

## Installation and Deployment

1. Clone this repository.
2. Open the project in Visual Studio Code.
3. Authenticate your Salesforce org using Salesforce CLI.
4. Deploy the required component to your org.

Example:

```bash
sf org login web
sf project deploy start --source-dir force-app/main/default/lwc/modalPopup
```

## Usage

After deployment, add the component to a Lightning App Page, Home Page, or Record Page using Lightning App Builder, depending on the component's supported targets.

## Purpose

This repository serves as a centralized library of reusable Salesforce LWC components for learning, development, and future project requirements.
  

## Common Salesforce CLI Commands

Here are common CLI commands that you'll use the most:

- `sf org login web`: Authorize an org
- `sf org open`: Open your org in a browser
- `sf org create scratch`: Create a scratch org
- `sf project deploy start`: Deploy metadata to your org
- `sf project retrieve start`: Retrieve metadata from your org
- `sf template generate <artifact>`: Scaffold new components, such as Apex classes and triggers, LWC components, Lightning apps, and more
- `sf apex <command>`: Run Apex tests, run anonymous Apex blocks, and view logs
- `sf data <command>`: Work with test data
- `sf alias <command>`: Manage org aliases
- `sf config <command>`: Configure CLI settings

