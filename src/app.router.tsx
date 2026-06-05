import { lazy } from "react";

import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { Productpage } from "./shop/pages/product/Productpage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { AdminLayout } from "./admin/layouts/AdminLayout";


const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));

export const AppRouter = createBrowserRouter([
    // public routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:idSlug',
                element: <Productpage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },

    // Auth routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    //Admin routes
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
])