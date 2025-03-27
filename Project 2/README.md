# Project 2 - Timeflect
Timeflect is a sleek time management app that tracks and analyzes your daily habits to boost productivity.

> [!IMPORTANT]
>
> This repository is used to host documents required for homework submission. Visit [github.com/LuoZihYuan/Timeflect](https://github.com/LuoZihYuan/Timeflect) to see the actual implementaion.

## Table of Contents
1. [Video Demonstration](#video-introduction)
2. [Business Requirements](#business-requirements)
3. [Challenges](#challenges)
4. [Verbs & Nouns Identification](#business-requirements)
5. [Classes & Attributes Declaration](#classes--attributes-declaration)
6. [Target Audiences](#target-audiences)
7. [User Personas & User Stories](#user-personas--user-stories)
8. [UML Module Diagram](#uml-module-diagram)
9. [Low Fidelity Wireframe](#low-fidelity-wireframe)
10. [Functional Programming Usages](#functional-programming-usages)
11. [Disclaimer: Use of Large Language Models (LLMs)](#disclaimer-use-of-large-language-models-llms)


## Video Introduction
Upcoming...

## Business Requirements
### Functional
- Provide an intuitive interface to record and manage hours in a timetracker.
- Generate daily and weekly analytics reports to visualize productivity trends.
- Integrate a Pomodoro helper interface that logs pomodoro sessions into the timetracker.
- Allow users to review and analyze their daily habits to boost productivity.
- Ensure seamless synchronization between tracked hours, pomodoro sessions, and report generation.
- Guarantee data integrity and real-time updating of reports.
- Support secure user authentication and data privacy.
- Offer a responsive design for quick data entry and effortless navigation.

<style>
v { background-color: DarkRed }
n { background-color: DarkGreen }
</style>

### Non-functional (rules)
- Data Integrity: Only validated time entries (manual or Pomodoro-triggered) can be logged.
- Report Accuracy: Daily and weekly reports must aggregate data from all time sessions without omissions.
- Privacy & Security: User data must be stored securely and only accessible by the respective user.
- Interface Consistency: The user interface must remain sleek and intuitive throughout the app.
- MVP Scope: Only Hours (time tracker), Reports (daily/weekly analytics), and Pomodoro (session entry) functionalities are implemented in this phase.
- User Control: Users can only start, pause, or stop sessions; no advanced editing or retrospective adjustments beyond the basic input for this phase.

## Challenges
1. Can I export my tracked data or reports right now?
    > At this stage, exporting functionality isn’t available. You can view your reports directly within the app, and we’re working on export features for a future update.

2. Is it possible to manually edit my time entries?
    > Currently, manual editing is not supported. The app automatically records your hours and pomodoro sessions to ensure data consistency. We understand this might be a limitation for some, and we’re considering improvements in future releases.

3. Can I integrate the app with my calendar or other productivity tools?
    > Integration with external tools isn’t available in this MVP. The focus now is on core tracking and reporting. We’re gathering feedback for potential integrations later on.

## Classes & Attributes Declaration

1. User:
    - Attributes: userID, username, password, email
    - Associations: Owns a TimeTracker instance.
2. TimeTracker:
    - Attributes: totalHours, date, entryList
    - Associations: Aggregates multiple PomodoroSession entries; linked to Report generation.
3. PomodoroSession:
    - Attributes: sessionID, startTime, duration, status
    - Associations: Composed within the TimeTracker.
4. Report:
    - Attributes: reportID, type (daily/weekly), generatedOn, dataSummary
    - Associations: Aggregates data from the TimeTracker.

## Target Audiences
- Busy professionals who need to manage their work hours.
- Freelancers seeking to optimize their daily schedules.
- Remote workers aiming for efficient self-management.
- Students looking for structured time management and productivity insights.

## User Personas & User Stories
1. Alice – The Freelance Designer
    - Background:
        - Alice works as a freelance designer juggling multiple projects. She is keen on tracking her work hours and optimizing productivity.
    - Dimensions:
        - Time Management Discipline: High
        - Productivity Focus: High
    - User Stories:
        1. As a freelance designer, I want to record my work hours seamlessly so I can monitor my project time effectively.
        2. As a productivity-focused professional, I need to see daily and weekly reports so I can analyze my design work trends.
        3. As someone who values efficiency, I want to log my pomodoro sessions quickly to maintain focus during creative bursts.
2. Bob – The Remote Developer
    - Background:
        - Bob is a remote software developer who values clear insights into his work patterns and productivity metrics.
    - Dimensions:
        - Time Management Discipline: High
        - Productivity Focus: High
    - User Stories:
        1. As a remote developer, I want to track my coding hours accurately to assess my productivity.
        2. As a tech-savvy professional, I need clear analytics on my daily habits to identify peak performance times.
        3. As an efficiency-driven individual, I want a dedicated interface for pomodoro sessions to better structure my work sprints.
3. Carla – The Graduate Student
    - Background:
        - Carla is a graduate student balancing coursework and part-time work. She seeks a simple tool to keep her study and work hours organized.
    - Dimensions:
        - Time Management Discipline: Moderate
        - Productivity Focus: High
    - User Stories:
        1. As a student, I want to record my study hours so I can manage my academic schedule effectively.
        2. As someone focused on productivity, I need weekly reports to review my progress and adjust my study plans.
        3. As a multitasker, I want to log pomodoro sessions to help maintain concentration during long study sessions.

4. David – The Corporate Professional
    - Background:
        - David works in a corporate environment where productivity and accountability are highly valued. He uses technology to manage his busy schedule.
    - Dimensions:
        - Time Management Discipline: High
        - Productivity Focus: Moderate
    - User Stories:
        1. As a corporate professional, I want to log my work hours to maintain transparency with my team.
        2. As someone mindful of efficiency, I need daily reports to monitor how I allocate my time throughout the day.
        3. As a focused worker, I want an easy way to enter pomodoro sessions to break my day into productive intervals.

## UML Module Diagram
![diagram](./assets/image/uml-class-diagram.png)

## Low Fidelity Wireframe
### Hours
- User stories:
    - "As a corporate professional, I want to log my work hours to maintain transparency with my team."
- Wireframe: 
![hours wireframe](./assets/image/wireframe-hours.png)

    

### Pomodoro
- User stories:
    - "As an efficiency-driven individual, I want a dedicated interface for pomodoro sessions to better structure my work sprints."
- Wireframe: 
![pomodoro wireframe](./assets/image/wireframe-pomodoro.png)

### Reports
- User stories:
    - "As someone mindful of efficiency, I need daily reports to monitor how I allocate my time throughout the day."
- Wireframe:
![reports wireframe](./assets/image/wireframe-reports.png)

## Functional Programming Usages
### Principles
1. Pure functions
    ```typescript
    // Pure function always returns the same result when given the same arguments
    const sum = data.reduce((acc, curr) => curr + acc, 0);
    ```

    ```typescript
    // Violating pure functions
    let temp = 0;
    const sum = data.reduce((acc, curr) => temp + curr, 0);
    ```
2. Immutability
    ```typescript
    // Calling toSorted does not mutate the original entries array
    entries
      .toSorted((a, b) => b.startTime.getTime() - a.startTime.getTime())
      .map(({ key, task, startTime, endTime }) => (
        // ...populate table
      )
    ```

    ```typescript
    // Violating immutability: Array.sort mutates the original entries array.
    entries.sort((a, b) => b.startTime.getTime() - a.startTime.getTime());
    entries.map(({ key, task, startTime, endTime }) => {
      // ...populate table
    });
    ```
3. First-class functions
    ```typescript
    // App is a first class function
    export const App = () => {
      const navigate = useNavigate();

      return (
        <HeroUIProvider
          navigate={(to: To, options?: NavigateOptions) => {
            void navigate(to, options);
          }}
          useHref={useHref}
        >
          <AppHeader />
          <div className="flex">
            <AppNavigation />
            <TimeEntriesProvider>
              <Routes>
                <Route path="/" Component={HoursPage} />
                <Route path="/reports" Component={ReportsPage} />
              </Routes>
            </TimeEntriesProvider>
          </div>
        </HeroUIProvider>
      );
    };
    ```

    ```typescript
    // Violating First-Class Functions: Not assigning the App Function to any variables
    export function App() {
      // ...
    }
    ```
4. Higher-order functions
    ```typescript
    // Reduce takes in an arrow function as parameter
    const sum = data.reduce((acc, curr) => curr + acc, 0);
    ```

    ```typescript
    // Violating Higher-order Functions: Not passing functions as parameter
    function sumArray(arr: number[]): number {
      let total = 0;
      for (const num of arr) {
        total += num;
      }
      return total;
    }
    const sum = sumArray(data);

    ```
5. Declarative over imperative
    ```typescript
    // Define the target to sort the entries array without imperatively specifying which algorithm to use
    entries.toSorted((a, b) => b.startTime.getTime() - a.startTime.getTime())
    ```

    ```typescript
    // Imperatively specifying the sort algorithm
    function imperativeSort(entries: Entry[]): Entry[] {
      // Create a shallow copy to avoid mutating the original array
      const sortedEntries = [...entries];

      for (let i = 0; i < sortedEntries.length - 1; i++) {
        for (let j = i + 1; j < sortedEntries.length; j++) {
          if (sortedEntries[i].startTime.getTime() < sortedEntries[j].startTime.getTime()) {
            // Swap the elements
            const temp = sortedEntries[i];
            sortedEntries[i] = sortedEntries[j];
            sortedEntries[j] = temp;
          }
        }
      }
      return sortedEntries;
    }

    // Pass the entries array into the imperative sort function
    const sortedEntries = imperativeSort(entries);
    ```

### Declarative Programming
1. Map
    ```typescript
    navContents.map(({ title, link, icon }) => (
      <AppNavigationRow
        key={`nav-${title}`}
        title={title}
        link={link}
        icon={icon}
        selected={location.pathname === link}
      />
    ))
    ```

    ```tsx
    // Not using Map
    const navRows: JSX.Element[] = [];
    for (const { title, link, icon } of navContents) {
      navRows.push(
        <AppNavigationRow
          key={`nav-${title}`}
          title={title}
          link={link}
          icon={icon}
          selected={location.pathname === link}
        />
      );
    }
    // Then, in your render/return statement:
    return <nav>{navRows}</nav>;
    ```
2. Reduce
    ```typescript
    const sum = data.reduce((acc, curr) => curr + acc, 0);
    ```

    ```typescript
    // Not using Reduce
    let sum = 0;
    for (const curr of data) {
      sum += curr;
    }
    ```
3. ToSorted
    ```typescript
    entries.toSorted((a, b) => b.startTime.getTime() - a.startTime.getTime())
    ```

    ```typescript
    // Not using toSorted
    // Create a shallow copy of entries
    const sortedEntries: typeof entries = [];
    for (let i = 0; i < entries.length; i++) {
      sortedEntries.push(entries[i]);
    }

    // Sort the copy in descending order based on startTime using bubble sort
    for (let i = 0; i < sortedEntries.length - 1; i++) {
      for (let j = 0; j < sortedEntries.length - 1 - i; j++) {
        if (sortedEntries[j].startTime.getTime() < sortedEntries[j + 1].startTime.getTime()) {
          const temp = sortedEntries[j];
          sortedEntries[j] = sortedEntries[j + 1];
          sortedEntries[j + 1] = temp;
        }
      }
    }
    ```

### Design Patterns
1. Singleton
    ```typescript
    // Always use the same db instance
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```

    ```typescript
    // Violates Singleton: Uses different Firestore instance on each call.
    export function createNewDbInstance() {
      const app = initializeApp(firebaseConfig);
      return getFirestore(app);
    }
    ```
2. Memento
    ```typescript
    // use setIsRunning instead of directly assigning values to isRunning
    const [isRunning, setIsRunning] = useState<boolean>(false);
    setIsRunning(true);
    ```

    ```typescript
    // Violates Memento
    const [isRunning, setIsRunning] = useState<boolean>(false);
    isRunning = true; 
    ```
3. Observer
    ```tsx
    // onPress listens to user click events
    setTheme(theme === "dark" ? "light" : "dark");
    ```

    ```tsx
    // Instead of using the provided setter function (which notifies all observers of the state change), the code directly reassigns the state variable.
    theme = (theme === "dark") ? "light" : "dark";
    ```

## Disclaimer: Use of Large Language Models (LLMs)
This project includes the use of Large Language Models (LLMs), such as OpenAI's ChatGPT, to support the development process. LLMs were used for tasks including:

- Brainstorming and refining ideas
- Debugging and optimizing code
- Generating code snippets or documentation templates
- Explaining technical concepts

All AI-generated content was carefully reviewed, tested, and adapted to ensure correctness and relevance. The final implementation reflects my own understanding and effort, in accordance with the academic integrity guidelines of the course.

### LLM Usage Details

|  Model  | Version | Prompt |
| :-----: | :-----: | :----- |
| ChatGPT | 4-o3-mini | Project Timeflect is a sleek time management app that tracks and analyzes your daily habits to boost productivity. For the first phase, the team has decided to focus on the MVP items: Hours(timetracker), Reports(daily/weekly analytics), and Pomodoro(helper interface for entering sessions of pomodoro into timetracker). Generate the following for the project: "1. Business Requirements: Bulletpoints, but do not separate the functionalities into different categories", "2. Identify Nouns, verbs from the requirments", "3. Target audience", "4. Rules", "5. Q&A: Things that users might not be able to accomplish with the current version; answer them as if you were talking to a real user", "6. Summary of Classes, Attributes, and Associations (from nouns and verbs): Associations are like composition and aggregation", "7. User Dimensions: Identify 4 user persona dimensions and pick the 2 most significant ones", "8. User Persona: Create 4 User personas, each with their name, background, 2 dimensions, and 3 user stories. For the three user stories, find the user group that best fits the user, and do not mention requirements not in the first phase." |