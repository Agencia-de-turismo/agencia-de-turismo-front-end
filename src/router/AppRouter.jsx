import { createBrowserRouter } from "react-router-dom";

import { HomeLayout } from "../tourism/layouts/HomeLayout";
import { AuthLayout } from "../auth/layouts/AuthLayout";

import { ErrorPage } from "../tourism/pages/ErrorPage";
import { HomePage } from "../tourism/pages/HomePage";

import { RegisterPage } from "../auth/pages/RegisterPage";
import { LoginPage } from "../auth/pages/LoginPage";


export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage/>,
		element: <HomeLayout/>,
		children: [
			{
				path: "/",
				index: true,
				element: <HomePage/>
			}
		]
	},
	{
		path: "/auth",
		errorElement: <ErrorPage/>,
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/login",
				element: <LoginPage />
			},
			{
				path: "/auth/register",
				element: <RegisterPage />
			}
		]
	}
])
