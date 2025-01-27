# React Router v6 useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6: using it outside of a component rendered within a route.  The provided code examples show the incorrect usage and the correct solution.

## Bug

The bug occurs when attempting to use `useParams` outside of the component that is rendered inside a route.  This causes an error as `useParams` requires the routing context which is only available within the route. 

## Solution

The solution is to ensure `useParams` is called within a component that is rendered by a `Route` component, allowing access to the routing context.