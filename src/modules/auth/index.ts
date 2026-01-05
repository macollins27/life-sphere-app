// Client-safe exports only
// Server-side auth.service should be imported directly from the service file
export { AuthProvider } from "./components/auth-provider";
export { LoginForm } from "./components/login-form";
export { RegisterForm } from "./components/register-form";
export { useSession } from "./hooks/use-session";
