import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../auth/layouts/AuthLayout";
import { ErrorPage } from "../tourism/pages/ErrorPage";
import { LoginPage } from "../auth/pages/LoginPage";


export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage/>,
		element: <AuthLayout />,
		children: [
			{
				path: "/",
				index: true,
				element: <LoginPage />
			},
		]
	}
])
