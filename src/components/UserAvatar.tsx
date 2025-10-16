"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User, getUserInitials, logout } from "@/lib/auth";
import { ChevronDown, LogOut, User as UserIcon, Database } from "lucide-react";

interface UserAvatarProps {
  user: User;
  onLogout?: () => void;
}

export default function UserAvatar({ user, onLogout }: UserAvatarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOnEnvironmentSelector = pathname === "/environment-selector";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsOpen(false);
      if (onLogout) {
        onLogout();
      } else {
        // Reload the page to update auth state
        window.location.href = "/";
      }
    }
  };

  const initials = getUserInitials(user);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-1.5 py-1 rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-300 group"
      >
        {/* Avatar Circle */}
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
          {initials}
        </div>

        {/* User Name */}
        <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200 px-1.5">
          {user.full_name || user.email}
        </span>

        {/* Chevron Icon */}
        <ChevronDown
          className={`w-3 h-3 text-gray-400 transition-all duration-300 group-hover:text-gray-600 mr-0.5 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 flex items-center justify-center text-gray-700 text-sm font-semibold shadow-sm">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user.full_name || user.email}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Menu Item (Placeholder) */}
          <button
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
            onClick={() => {
              // Placeholder for profile action
              console.log("Profile clicked");
            }}
          >
            <UserIcon className="w-4 h-4" />
            <span>Profile Settings</span>
          </button>

          {/* Environment Selector Menu Item - Only show if not already on that page */}
          {!isOnEnvironmentSelector && (
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
              onClick={() => {
                setIsOpen(false);
                router.push("/environment-selector");
              }}
            >
              <Database className="w-4 h-4" />
              <span>ERP Environment</span>
            </button>
          )}

          {/* Logout Menu Item */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-gray-100"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}
