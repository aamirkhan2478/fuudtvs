import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import LoginLayout from "../Layouts/LoginLayout";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import UpdateLayout from "../Layouts/UpdateLayout";
import ShowLayout from "../Layouts/ShowLayout";

//Main Pages
import Home from "../Layouts/MainLayout/Pages/Home";
import DegreeValidation from "../Layouts/MainLayout/Pages/DegreeValidation";
import AboutUs from "../Layouts/MainLayout/Pages/AboutUs";
import ContactUs from "../Layouts/MainLayout/Pages/ContactUs";
import NotFound from "../Layouts/MainLayout/Pages/NotFound";

//Dashboard Pages
import Dashboard from "../Layouts/DashboardLayout/Pages/Dashboard";
import ManageStudent from "../Layouts/DashboardLayout/Pages/ManageStudent";
import ManageUser from "../Layouts/DashboardLayout/Pages/ManageUser";
import ManageDepartment from "../Layouts/DashboardLayout/Pages/ManageDepartment";
import DegreeApplications from "../Layouts/DashboardLayout/Pages/DegreeApplications";
import ViewContactUs from "../Layouts/DashboardLayout/Pages/ViewContactUs";
import ViewFeedback from "../Layouts/DashboardLayout/Pages/ViewFeedback";
import ApplyApplication from "../Layouts/DashboardLayout/Pages/ApplyApplication";
import DownloadChalan from "../Layouts/DashboardLayout/Pages/DownloadChalan";
import ViewStatus from "../Layouts/DashboardLayout/Pages/ViewStatus";
import SendFeedback from "../Layouts/DashboardLayout/Pages/SendFeedback";
import Applications from "../Layouts/DashboardLayout/Pages/Applications";
import PageNotFound from "../Layouts/DashboardLayout/Pages/PageNotFound";

//Login Pages
import Login from "../Layouts/LoginLayout/Pages/Login";
import ForgetPassword from "../Layouts/LoginLayout/Pages/ForgetPassword";
import ChangePassword from "../Layouts/LoginLayout/Pages/ChangePassword";

//Update Pages
import UpdateStudent from "../Layouts/UpdateLayout/Pages/UpdateStudent";
import UpdateUser from "../Layouts/UpdateLayout/Pages/UpdateUser";
import UpdateDepartment from "../Layouts/UpdateLayout/Pages/UpdateDepartment";
import UpdateStatus from "../Layouts/UpdateLayout/Pages/UpdateStatus";
import UploadChalan from "../Layouts/UpdateLayout/Pages/UploadChalan";
import UploadPaidChalan from "../Layouts/UpdateLayout/Pages/UploadPaidChalan";
import UpdatePassword from "../Layouts/UpdateLayout/Pages/UpdatePassword";

//Show Pages
import ShowDocuments from "../Layouts/ShowLayout/Pages/ShowDocuments";
import ShowPaidChalan from "../Layouts/ShowLayout/Pages/ShowPaidChalan";

// Protected Routes
import {
  DashboardProtected,
  LoginProtected,
} from "../Layouts/ReusableComponents/Protected";

const AppRouters = () => {
  return (
    <>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="degree-validation" element={<DegreeValidation />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<LoginProtected />}>
          {/* Login Routes */}
          <Route path="/login" element={<LoginLayout />}>
            <Route path="app" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route
              path="change-password/:resetToken"
              element={<ChangePassword />}
            />
          </Route>
        </Route>

        <Route element={<DashboardProtected />}>
          {/* Dashboard Routes */}
          <Route path="/app" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-student" element={<ManageStudent />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="manage-department" element={<ManageDepartment />} />
            <Route
              path="degree-applications"
              element={<DegreeApplications />}
            />
            <Route path="view-feedback" element={<ViewFeedback />} />
            <Route path="view-contact" element={<ViewContactUs />} />
            <Route path="apply-application" element={<ApplyApplication />} />
            <Route path="download-chalan" element={<DownloadChalan />} />
            <Route path="view-status" element={<ViewStatus />} />
            <Route path="send-feedback" element={<SendFeedback />} />
            <Route path="applications" element={<Applications />} />
            <Route path="pagenotfound" element={<PageNotFound />} />
          </Route>
          {/* Update Routes */}
          <Route path="/update" element={<UpdateLayout />}>
            <Route path="update-student/:id" element={<UpdateStudent />} />
            <Route path="update-user/:id" element={<UpdateUser />} />
            <Route
              path="update-department/:id"
              element={<UpdateDepartment />}
            />
            <Route path="update-status/:id" element={<UpdateStatus />} />
            <Route path="upload-chalan/:id" element={<UploadChalan />} />
            <Route
              path="upload-paid-chalan/:id"
              element={<UploadPaidChalan />}
            />
            <Route path="update-password/:id" element={<UpdatePassword />} />
          </Route>
          {/* Show Routes */}
          <Route path="/show" element={<ShowLayout />}>
            <Route path="show-documents/:id" element={<ShowDocuments />} />
            <Route path="show-paid-chalan/:id" element={<ShowPaidChalan />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouters;
