# cohelm-test

## Running
1. `npm run start`

## Plan
Step 1: File Upload Component
- File upload components for medical record PDF and guidelines PDF
- Side by side dropzones
- Should show the uploaded files upon upload
- Next button to MainPage

Step 2: Main Page > Visualization
- Visualization of steps on top
- Loads static data file

Step 3: Main Page > Details Component
- Options
  - Lists Selected Option
  - Lists Other Options
  - REACH:
    - allows to change options, which updates the data and re-renders the tree
- Why selected (`reasoning`)
  - markdown render?
- Why decision was made (`evidence`)

Step 4: PDF component
- Lists the file to the right in PDF viewer
- Using mock file
- REACH
    - highlight evidence


Step 5: Final Decision
- Step `is_final`
- `reasoning` in red
    - PRobably not the right field
- List Evidence (Evidence Component) 


## Proof of Concept (POC)
**Objective**: Validate the core ideas with basic functionality and static data.

**Time Estimate**: 1-2 hours

### Components
- `FileUpload`: Basic file upload functionality without backend integration.

#### `MainPage`
- `TreeChart`: Static decision diagram bound to static data file
- `PDFViewer`: Basic PDF display functionality using a mock PDF file.
- ``

### Minimum Viable Product (MVP)
**Objective**: A usable version of the application with core functionalities properly integrated.
**Time Estimate**: 5-10 hours


To structure the Co:Helm Test project more technically, we'll outline a component tree detailing the responsibilities of each component and the data they handle. This will provide a clear blueprint for developers on how to architect the application using React and other supporting technologies.

---

# Co:Helm Test Project: Component Architecture

## Application Structure

- **App**
  - **Props**: None
  - **State**: Manages global state such as uploaded files and decision tree data.
  - **Children**:
    - FileUpload
    - MainPage

### FileUpload
Allows users to upload medical record PDFs and guidelines PDFs, displaying uploaded file names.

**Props**: 
- `onFilesUploaded`: callback function to update state in App - goes to `MainPage`

### MainPage
Manages state related to the current step in the decision process.
**Props**: 
- `medicalRecord` - static PDF path
- `guidelines` - static PDF path

**Children**:
  - StepsVisualization
  - Details
  - PDFViewer

#### NavigationBar
### NavigationBar Component

The `NavigationBar` component provides a user interface for navigating between steps in a multi-step process. It displays Previous and Next buttons allowing the user to move back and forth between steps.

#### Props:

- `currentStepIndex` (number): The index of the current step being displayed.
- `setCurrentStepIndex` (function): A function to update the `currentStepIndex`, allowing navigation between steps.
- `stepsLength` (number): The total number of steps in the process, used to determine the bounds of navigation.

#### Functionality:

- **Previous Button**: When clicked, decreases `currentStepIndex` by 1, navigating to the previous step. It is disabled when the user is on the first step.
- **Next Button**: When clicked, increases `currentStepIndex` by 1, navigating to the next step. It is disabled when the user is on the last step.

#### Usage:

```jsx
<NavigationBar
  currentStepIndex={currentStepIndex}
  setCurrentStepIndex={setCurrentStepIndex}
  stepsLength={steps.length}
/>
```

This component is intended to be used within a parent component (e.g., `MainPage`) that manages the state of `currentStepIndex` and has knowledge of the total number of steps (`stepsLength`) in the process. The parent component should pass the necessary props to the `NavigationBar` to enable it to function correctly.

#### StepsVisualization
Visualizes the decision tree based on static or dynamically generated data.

**Props**: 
- `data` - JSON object representing the decision tree (static from example)

#### Details
Taken in the `currentStep` object, and displays the `options` in the format 

- SelectedOptions: section with a green label "Selected Options"
  - choice where `selected` = `true` with checked checkbox on the left
    - (key) text
    - Example: (A) Initial diagnostic medial branch block
- AllOptions
  - list of all `options` in the same format with unchecked checkbox on the left

**Props**
- `currentStep` - data object for the current step in the decision tree


**Children**:
- `OptionList`
- `Reasoning`
- `Evidence`

##### OptionList
Lists all options with visual indicators for selected/non-selected status.

**Props**
- `options` - array of option objects from currentStep

##### Reasoning
Displays the reasoning behind the decision in markdown or plain text.

**Props**
- `reasoningText`

##### Evidence
Lists evidence pieces, potentially with functionality to highlight relevant sections in the `PDFViewer`

**Props**
- `evidence` - array of evidence objects related to the current decision

#### PDFViewer
Displays the PDF document, lives on the right of details

**Stretch Goal** interactive linking and highlighting to `Evidence` section.
**Props**: 
- `file` - PDF file url for the medical record

### FinalDecision

The `FinalDecision` component presents the outcome of a decision-making process, displaying the final reasoning and indicating success or failure through color coding. It serves as a clear summary at the conclusion of an evaluative or decision-making sequence.

#### Features

- **Conditional Display:** Renders only for the final decision (`is_final` is true).
- **Outcome Visualization:** Uses green for success (`next_step` is not "FAILURE") and red for failure.
- **Decision Insight:** Shows the `reasoning` behind the final decision.

#### Props

- `step`: Object containing `is_final`, `next_step`, and `reasoning` attributes to dictate the component's behavior and content.





## Data Flow and Interactions

- The **App** component initializes the application, managing global state and orchestrating the main flow of data through props to child components.
- **FileUpload** interacts with the user to capture and forward uploaded files, triggering a redirect to the `MainPage`
- **MainPage** acts as a container for the core interactive elements of the application, receiving processed data from **App** and distributing it to **VisualizationComponent**, **DetailsComponent**, and **PDFViewerComponent** for detailed analysis and display.
- Child components of **DetailsComponent** further specialize in displaying aspects of the decision-making process, such as options, reasoning, and evidence, enhancing the user's understanding and engagement.

