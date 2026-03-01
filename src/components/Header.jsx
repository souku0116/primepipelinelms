import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";

const MAIN_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { to: "/services", label: "All Services" },
  { to: "/coaching", label: "Coaching" },
  { to: "/ell", label: "English Language Learners" },
  { to: "/leave-services", label: "Leave Services" },
  { to: "/college-placement", label: "College Placement" },
  { to: "/advocacy", label: "Advocacy" },
  { to: "/assessment", label: "Assessment" },
  { to: "/counseling", label: "Counseling" },
  { to: "/group-classes", label: "Group Classes" },
];

const desktopNavLinkBase =
  "text-sm font-medium transition-colors duration-200 border-b-2 py-1";

function desktopNavLinkClass({ isActive }) {
  return clsx(
    desktopNavLinkBase,
    isActive
      ? "text-blue-700 border-blue-700"
      : "text-slate-600 border-transparent hover:text-blue-600 hover:border-blue-200",
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = useMemo(() => {
    return SERVICE_LINKS.some((link) => location.pathname.startsWith(link.to));
  }, [location.pathname]);

  const closeMobile = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2" aria-label="Elevate Educate">
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
              Elevate Educate
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {MAIN_LINKS.slice(0, 3).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={desktopNavLinkClass}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Services dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={clsx(
                  desktopNavLinkBase,
                  "inline-flex items-center gap-1",
                  isServicesActive
                    ? "text-blue-700 border-blue-700"
                    : "text-slate-600 border-transparent hover:text-blue-600 hover:border-blue-200",
                )}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute left-0 mt-2 w-64 rounded-lg border border-gray-100 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {SERVICE_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      clsx(
                        "block px-4 py-2 text-sm",
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/contact" className={desktopNavLinkClass}>
              Contact
            </NavLink>

            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              Portal Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen ? (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 z-40 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-4 pb-5 space-y-1">
            {MAIN_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMobile}
                className={({ isActive }) =>
                  clsx(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-gray-50 hover:text-blue-600",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="border-t border-gray-100 my-2 pt-2">
              <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Services
              </div>
              {SERVICE_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    clsx(
                      "block px-3 py-3 rounded-md text-base font-medium",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-gray-50 hover:text-blue-600",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/login"
                onClick={closeMobile}
                className="block w-full text-center mt-2 px-5 py-3 rounded-md text-base font-semibold text-white bg-blue-700 hover:bg-blue-800"
              >
                Portal Login
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
