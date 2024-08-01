import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../auth/layouts/AuthLayout";
import { ErrorPage } from "../tourism/pages/ErrorPage";
import { RegisterPage } from "../auth/pages/RegisterPage";


export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <AuthLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <RegisterPage />,
			},
		],
	},
]);
