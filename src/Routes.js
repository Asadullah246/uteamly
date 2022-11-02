import React from "react";
import CareUpdatesOne from "pages/CareUpdatesOne";
import CareUpdates from "pages/CareUpdates";
import EmployeeTwo from "pages/EmployeeTwo";
import SettingsTermsConditionsOne from "pages/SettingsTermsConditionsOne";
import RequestTwo from "pages/RequestTwo";
import HelpCenterThree from "pages/HelpCenterThree";
import AddNewTaskThree from "pages/AddNewTaskThree";
import TimeSheetApproved from "pages/TimeSheetApproved";
import SettingsPrivacyPoliciesOne from "pages/SettingsPrivacyPoliciesOne";
import Tasks from "pages/Tasks";
import Tutorials from "pages/Tutorials";
import Signup from "pages/Signup";
import MessageFour from "pages/MessageFour";
import SettingsNotificationOne from "pages/SettingsNotificationOne";
import Calender from "pages/Calender";
import DashboardFour from "pages/DashboardFour";
import LoginOne from "pages/LoginOne";
import SettingsAvailibility from "pages/SettingsAvailibility";
import SettingsTermsConditions from "pages/SettingsTermsConditions";
import SettingsPrivacyPolicies from "pages/SettingsPrivacyPolicies";
import TimeSheetPaidHours from "pages/TimeSheetPaidHours";
import TimeSheet from "pages/TimeSheet";
import SettingsNotification from "pages/SettingsNotification";
import MessageTwo from "pages/MessageTwo";
import Request from "pages/Request";
import HelpCenter from "pages/HelpCenter";
import RequestforShiftChange from "pages/RequestforShiftChange";
import TasksOne from "pages/TasksOne";
import TutorialsOne from "pages/TutorialsOne";
import RequestforAbsentee from "pages/RequestforAbsentee";
import RequestforNewTask from "pages/RequestforNewTask";
import CalenderOne from "pages/CalenderOne";
import DashboardFive from "pages/DashboardFive";
import LoginTwo from "pages/LoginTwo";
import EmployeeProfile from "pages/EmployeeProfile";
import AddnewBookings from "pages/AddnewBookings";
import Employee from "pages/Employee";
import ClockinOne from "pages/ClockinOne";
import DocumentOne from "pages/DocumentOne";
import Bookingstask from "pages/Bookingstask";
import Message from "pages/Message";
import Clockin from "pages/Clockin";
import Document from "pages/Document";
import OnboardingTwo from "pages/OnboardingTwo";
import TimeSheetPaidHoursOne from "pages/TimeSheetPaidHoursOne";
import TimeSheetOne from "pages/TimeSheetOne";
import BookingsRequest from "pages/BookingsRequest";
import MessageThree from "pages/MessageThree";
import Training from "pages/Training";
import Addnewtask from "pages/Addnewtask";
import BookingstaskOne from "pages/BookingstaskOne";
import DashboardThree from "pages/DashboardThree";
import OnboardingOne from "pages/OnboardingOne";
import ClockinTwo from "pages/ClockinTwo";
import OnboardingTwoOne from "pages/OnboardingTwoOne";
import OnboardingOneOne from "pages/OnboardingOneOne";
import HelpCenterOne from "pages/HelpCenterOne";
import Forms from "pages/Forms";
import TimeSheetPaidHoursTwo from "pages/TimeSheetPaidHoursTwo";
import TimeSheetTwo from "pages/TimeSheetTwo";
import BookingsRequestOne from "pages/BookingsRequestOne";
import MessageFive from "pages/MessageFive";
import Updates from "pages/Updates";
import TrainingOne from "pages/TrainingOne";
import AddnewtaskTwo from "pages/AddnewtaskTwo";
import BookingstaskTwo from "pages/BookingstaskTwo";
import DashboardSix from "pages/DashboardSix";
import SettingsAdmins from "pages/SettingsAdmins";
import SettingsBilings from "pages/SettingsBilings";
import RequestOne from "pages/RequestOne";
import SettingsOne from "pages/SettingsOne";
import AddNewTaskOne from "pages/AddNewTaskOne";
import TasksTwo from "pages/TasksTwo";
import HelpCenterTwo from "pages/HelpCenterTwo";
import TutorialsTwo from "pages/TutorialsTwo";
import EmployeeShifts from "pages/EmployeeShifts";
import Groups from "pages/Groups";
import ActivitiesOne from "pages/ActivitiesOne";
import SignupOne from "pages/SignupOne";
import EmployeeOne from "pages/EmployeeOne";
import Selected from "pages/Selected";
import Login from "pages/Login";
import MessageOne from "pages/MessageOne";
import DocumentTwo from "pages/DocumentTwo";
import DashboardOne from "pages/DashboardOne";
import Settings from "pages/Settings";
import Activities from "pages/Activities";
import UserStats from "pages/UserStats";
import Users from "pages/Users";
import DashboardTwo from "pages/DashboardTwo";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboardtwo" element={<DashboardTwo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userstats" element={<UserStats />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/settings" element={<Settings />} />


        {/* owner pages  */}

        <Route path="/dashboardone" element={<DashboardOne />} />
        <Route path="/tutorialstwo" element={<TutorialsTwo />} />
        <Route path="/activitiesone" element={<ActivitiesOne />} />
        <Route path="/employeeone" element={<EmployeeOne />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/employeeshifts" element={<EmployeeShifts />} />
        <Route path="/documenttwo" element={<DocumentTwo />} />
        <Route path="/messageone" element={<MessageOne />} />
        <Route path="/helpcentertwo" element={<HelpCenterTwo />} />
        <Route path="/taskstwo" element={<TasksTwo />} />
        <Route path="/requestone" element={<RequestOne />} />

        <Route path="/login" element={<Login />} />
        <Route path="/selected" element={<Selected />} />
       
        <Route path="/signupone" element={<SignupOne />} />
        
        
        
     
        
       
        <Route path="/addnewtaskone" element={<AddNewTaskOne />} />
        <Route path="/settingsone" element={<SettingsOne />} />
        
        <Route path="/settingsbilings" element={<SettingsBilings />} />
        <Route path="/settingsadmins" element={<SettingsAdmins />} />

        {/* owner new  */}

        <Route path="/dashboardsix" element={<DashboardSix />} />
        <Route path="/bookingstasktwo" element={<BookingstaskTwo />} />
        <Route path="/addnewtasktwo" element={<AddnewtaskTwo />} />
        <Route path="/trainingone" element={<TrainingOne />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/messagefive" element={<MessageFive />} />
        <Route path="/bookingsrequestone" element={<BookingsRequestOne />} />
        <Route path="/timesheettwo" element={<TimeSheetTwo />} />
        <Route
          path="/timesheetpaidhourstwo"
          element={<TimeSheetPaidHoursTwo />}
        />
        <Route path="/forms" element={<Forms />} />
        <Route path="/helpcenterone" element={<HelpCenterOne />} />

        {/* employer new  */}

        <Route path="/onboardingoneone" element={<OnboardingOneOne />} />
        <Route path="/onboardingtwoone" element={<OnboardingTwoOne />} />
        <Route path="/clockintwo" element={<ClockinTwo />} />
        <Route path="/onboardingone" element={<OnboardingOne />} />
        <Route path="/dashboardthree" element={<DashboardThree />} />
        <Route path="/bookingstaskone" element={<BookingstaskOne />} />
        <Route path="/addnewtask" element={<Addnewtask />} />
        <Route path="/training" element={<Training />} />
        <Route path="/messagethree" element={<MessageThree />} />
        <Route path="/bookingsrequest" element={<BookingsRequest />} />
        <Route path="/timesheetone" element={<TimeSheetOne />} />
        <Route
          path="/timesheetpaidhoursone"
          element={<TimeSheetPaidHoursOne />}
        />
        <Route path="/onboardingtwo" element={<OnboardingTwo />} />
        <Route path="/document" element={<Document />} />
        <Route path="/clockin" element={<Clockin />} />
        <Route path="/message" element={<Message />} />
        <Route path="/bookingstask" element={<Bookingstask />} />
        <Route path="/documentone" element={<DocumentOne />} />
        <Route path="/clockinone" element={<ClockinOne />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/addnewbookings" element={<AddnewBookings />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/logintwo" element={<LoginTwo />} />

        {/* employee  */}
        
        <Route path="/dashboardfive" element={<DashboardFive />} />
        <Route path="/calenderone" element={<CalenderOne />} />
        <Route path="/requestfornewtask" element={<RequestforNewTask />} />
        <Route path="/requestforabsentee" element={<RequestforAbsentee />} />
        <Route path="/tutorialsone" element={<TutorialsOne />} />
        <Route path="/tasksone" element={<TasksOne />} />
        <Route
          path="/requestforshiftchange"
          element={<RequestforShiftChange />}
        />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/request" element={<Request />} />
        <Route path="/messagetwo" element={<MessageTwo />} />
        <Route
          path="/settingsnotification"
          element={<SettingsNotification />}
        />
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/timesheetpaidhours" element={<TimeSheetPaidHours />} />
        <Route
          path="/settingsprivacypolicies"
          element={<SettingsPrivacyPolicies />}
        />
        <Route
          path="/settingstermsconditions"
          element={<SettingsTermsConditions />}
        />
        <Route
          path="/settingsavailibility"
          element={<SettingsAvailibility />}
        />
        <Route path="/loginone" element={<LoginOne />} />
        <Route path="/dashboardfour" element={<DashboardFour />} />
        <Route path="/calender" element={<Calender />} />
        <Route
          path="/settingsnotificationone"
          element={<SettingsNotificationOne />}
        />
        <Route path="/messagefour" element={<MessageFour />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route
          path="/settingsprivacypoliciesone"
          element={<SettingsPrivacyPoliciesOne />}
        />
        <Route path="/timesheetapproved" element={<TimeSheetApproved />} />
        <Route path="/addnewtaskthree" element={<AddNewTaskThree />} />
        <Route path="/helpcenterthree" element={<HelpCenterThree />} />
        <Route path="/requesttwo" element={<RequestTwo />} />
        <Route
          path="/settingstermsconditionsone"
          element={<SettingsTermsConditionsOne />}
        />
        <Route path="/employeetwo" element={<EmployeeTwo />} />
        <Route path="/careupdates" element={<CareUpdates />} />
        <Route path="/careupdatesone" element={<CareUpdatesOne />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
