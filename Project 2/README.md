# Project 2 - Timeflect
Timeflect is a sleek time management app that tracks and analyzes your daily habits to boost productivity.

## Usage
1. You can choose to either:
    1. Get this repo for full requirements documentation and implementation
        - If you've cloned this project in the past: `git pull --recurse-submodules`
        - If you've not: `git clone --recurse-submodules [path]`
    2. Or, get only the implementation of Timeflect project: Visit [Timeflect](https://github.com/LuoZihYuan/Timeflect/tree/4238ce467acf8b542f253e113d2471c1bf699d9e)

2. Follow the instructions defined in [Timeflect](https://github.com/LuoZihYuan/Timeflect/tree/4238ce467acf8b542f253e113d2471c1bf699d9e).

## Video Demonstration
Upcoming...

## AI Assistance
|  Model  | Version | Prompt |
| :-----: | :-----: | :----- |
| ChatGPT | 4-o3-mini | Project Timeflect is a sleek time management app that tracks and analyzes your daily habits to boost productivity. For the first phase, the team has decided to focus on the MVP items: Hours(timetracker), Reports(daily/weekly analytics), and Pomodoro(helper interface for entering sessions of pomodoro into timetracker). Generate the following for the project: "1. Business Requirements: Bulletpoints, but do not separate the functionalities into different categories", "2. Identify Nouns, verbs from the requirments", "3. Target audience", "4. Rules", "5. Q&A: Things that users might not be able to accomplish with the current version; answer them as if you were talking to a real user", "6. Summary of Classes, Attributes, and Associations (from nouns and verbs): Associations are like composition and aggregation", "7. User Dimensions: Identify 4 user persona dimensions and pick the 2 most significant ones", "8. User Persona: Create 4 User personas, each with their name, background, 2 dimensions, and 3 user stories. For the three user stories, find the user group that best fits the user, and do not mention requirements not in the first phase." |

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

## Q&A (Challenges)
1. Can I export my tracked data or reports right now?
    > At this stage, exporting functionality isn’t available. You can view your reports directly within the app, and we’re working on export features for a future update.

2. Is it possible to manually edit my time entries?
    > Currently, manual editing is not supported. The app automatically records your hours and pomodoro sessions to ensure data consistency. We understand this might be a limitation for some, and we’re considering improvements in future releases.

3. Can I integrate the app with my calendar or other productivity tools?
    > Integration with external tools isn’t available in this MVP. The focus now is on core tracking and reporting. We’re gathering feedback for potential integrations later on.

## Classify Nouns/Verbs into Classes/Attributes

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

## User Personas and User Stories
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

## UML Class Diagram
![diagram](./assets/image/uml-class-diagram.png)

## Low Fidelity Wireframe
1. Hours
![hours wireframe](./assets/image/wireframe-hours.png)

    User stories:
    - "As a corporate professional, I want to log my work hours to maintain transparency with my team."

2. Pomodoro
![pomodoro wireframe](./assets/image/wireframe-pomodoro.png)

User stories:
- "As an efficiency-driven individual, I want a dedicated interface for pomodoro sessions to better structure my work sprints."

3. Reports
![reports wireframe](./assets/image/wireframe-reports.png)

User stories:
- "As someone mindful of efficiency, I need daily reports to monitor how I allocate my time throughout the day."