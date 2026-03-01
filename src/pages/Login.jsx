import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, GraduationCap, BookOpen, Shield } from "lucide-react";
import { signIn } from "../services/authService";
import { PageShell } from "../components/PageShell";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = [
    { 
      id: "student", 
      label: "Student", 
      icon: GraduationCap,
      description: "Access your profile, classes, and notifications"
    },
    { 
      id: "teacher", 
      label: "Teacher", 
      icon: BookOpen,
      description: "Manage classes, students, attendance, and remarks"
    },
    { 
      id: "admin", 
      label: "Admin", 
      icon: Shield,
      description: "Full access to all portal features"
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user } = await signIn(email, password);
      
      // Get user profile to check role
      const { data: profile } = await window.supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (!profile) {
        setError("Profile not found. Please contact administrator.");
        setLoading(false);
        return;
      }

      // Check if role matches selected role
      if (profile.role !== selectedRole) {
        setError(`This account is not registered as a ${selectedRole}. Please select the correct role.`);
        setLoading(false);
        return;
      }

      // Navigate to portal
      navigate("/portal");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell
      title="Portal Login"
      subtitle="Access your personalized dashboard"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Role Selection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Select Your Role</h2>
            <div className="space-y-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      selectedRole === role.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                      selectedRole === role.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{role.label}</p>
                      <p className="text-sm text-slate-500">{role.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Sign in as {roles.find(r => r.id === selectedRole)?.label}
            </h2>
            
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-900">Email</label>
                <div className="mt-2 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">Password</label>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Need help? <a href="/contact" className="text-blue-700 hover:underline">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

