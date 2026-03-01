import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, Users, BookOpen, ClipboardList, Bell, Settings, 
  LogOut, Plus, Calendar, MessageSquare, CheckCircle, XCircle
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { PageShell } from "../components/PageShell";

export default function Portal() {
  const navigate = useNavigate();
  const { user, profile, signOut, isStudent, isTeacher, isAdmin, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [remarks, setRemarks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showAddClass, setShowAddClass] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newClass, setNewClass] = useState({ name: "", subject: "", schedule: "" });
  const [newStudent, setNewStudent] = useState({ name: "", email: "", grade: "" });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPortalData();
    }
  }, [user, profile]);

  const fetchPortalData = async () => {
    // Fetch classes
    const { data: classesData } = await window.supabase
      .from('classes')
      .select('*')
      .order('created_at', { ascending: false });
    if (classesData) setClasses(classesData);

    // Fetch students
    const { data: studentsData } = await window.supabase
      .from('students')
      .select('*')
      .order('name');
    if (studentsData) setStudents(studentsData);

    // Fetch attendance
    const { data: attendanceData } = await window.supabase
      .from('attendance')
      .select('*, students(name), classes(name)')
      .order('date', { ascending: false })
      .limit(20);
    if (attendanceData) setAttendance(attendanceData);

    // Fetch remarks
    const { data: remarksData } = await window.supabase
      .from('remarks')
      .select('*, students(name)')
      .order('created_at', { ascending: false })
      .limit(20);
    if (remarksData) setRemarks(remarksData);

    // Fetch notifications
    const { data: notificationsData } = await window.supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(10);
    if (notificationsData) setNotifications(notificationsData);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    const { data, error } = await window.supabase
      .from('classes')
      .insert([{ ...newClass, teacher_id: user.id }])
      .select();
    
    if (!error && data) {
      setClasses([...classes, data[0]]);
      setShowAddClass(false);
      setNewClass({ name: "", subject: "", schedule: "" });
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { data, error } = await window.supabase
      .from('students')
      .insert([newStudent])
      .select();
    
    if (!error && data) {
      setStudents([...students, data[0]]);
      setShowAddStudent(false);
      setNewStudent({ name: "", email: "", grade: "" });
    }
  };

  const handleAttendanceUpdate = async (studentId, date, status) => {
    const { error } = await window.supabase
      .from('attendance')
      .upsert({ student_id: studentId, date, status });
    
    if (!error) {
      fetchPortalData();
    }
  };

  const handleAddRemark = async (studentId, remark) => {
    const { data, error } = await window.supabase
      .from('remarks')
      .insert([{ student_id: studentId, remark, teacher_id: user.id }])
      .select();
    
    if (!error && data) {
      setRemarks([...remarks, { ...data[0], students: { name: students.find(s => s.id === studentId)?.name } }]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  const studentTabs = [
    { id: "dashboard", label: "Dashboard", icon: User },
    { id: "profile", label: "My Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  const teacherTabs = [
    { id: "dashboard", label: "Dashboard", icon: User },
    { id: "classes", label: "My Classes", icon: BookOpen },
    { id: "students", label: "Students", icon: Users },
    { id: "attendance", label: "Attendance", icon: ClipboardList },
    { id: "remarks", label: "Remarks", icon: MessageSquare },
  ];

  const adminTabs = [
    { id: "dashboard", label: "Dashboard", icon: User },
    { id: "classes", label: "Manage Classes", icon: BookOpen },
    { id: "students", label: "Manage Students", icon: Users },
    { id: "attendance", label: "Attendance", icon: ClipboardList },
    { id: "remarks", label: "Remarks", icon: MessageSquare },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  const tabs = isAdmin ? adminTabs : isTeacher ? teacherTabs : studentTabs;

  return (
    <PageShell title="Portal" subtitle={`Welcome, ${profile.full_name || profile.role}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                <div className="h-12 w-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">
                  {profile.full_name?.charAt(0) || profile.role?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{profile.full_name || "User"}</p>
                  <p className="text-sm text-slate-500 capitalize">{profile.role}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{classes.length}</p>
                        <p className="text-sm text-slate-500">Classes</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{students.length}</p>
                        <p className="text-sm text-slate-500">Students</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{notifications.length}</p>
                        <p className="text-sm text-slate-500">Notifications</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {attendance.slice(0, 5).map((record) => (
                      <div key={record.id} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            record.status === 'present' ? 'bg-green-100 text-green-700' : 
                            record.status === 'absent' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {record.status === 'present' ? <CheckCircle className="h-4 w-4" /> : 
                             record.status === 'absent' ? <XCircle className="h-4 w-4" /> : 
                             <Calendar className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{record.students?.name}</p>
                            <p className="text-xs text-slate-500">{record.classes?.name} • {new Date(record.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          record.status === 'present' ? 'bg-green-100 text-green-700' : 
                          record.status === 'absent' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {record.status}
                        </span>
                      </div>
                    ))}
                    {attendance.length === 0 && (
                      <p className="text-sm text-slate-500 text-center py-4">No recent activity</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Classes */}
            {activeTab === "classes" && (isTeacher || isAdmin) && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Classes</h3>
                  {(isTeacher || isAdmin) && (
                    <button
                      onClick={() => setShowAddClass(true)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800"
                    >
                      <Plus className="h-4 w-4" />
                      Add Class
                    </button>
                  )}
                </div>

                {showAddClass && (
                  <form onSubmit={handleAddClass} className="mb-4 p-4 bg-slate-50 rounded-lg">
                    <div className="grid sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Class name"
                        value={newClass.name}
                        onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        value={newClass.subject}
                        onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Schedule"
                        value={newClass.schedule}
                        onChange={(e) => setNewClass({ ...newClass, schedule: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button type="submit" className="px-3 py-1.5 bg-blue-700 text-white text-sm rounded-lg">Save</button>
                      <button type="button" onClick={() => setShowAddClass(false)} className="px-3 py-1.5 text-slate-600 text-sm rounded-lg hover:bg-slate-200">Cancel</button>
                    </div>
                  </form>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {classes.map((cls) => (
                    <div key={cls.id} className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-semibold text-slate-900">{cls.name}</h4>
                      <p className="text-sm text-slate-500">{cls.subject}</p>
                      <p className="text-xs text-slate-400 mt-1">{cls.schedule}</p>
                    </div>
                  ))}
                  {classes.length === 0 && (
                    <p className="text-sm text-slate-500 col-span-2 text-center py-4">No classes yet</p>
                  )}
                </div>
              </div>
            )}

            {/* Students */}
            {activeTab === "students" && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {isStudent ? "My Classmates" : "Students"}
                  </h3>
                  {(isTeacher || isAdmin) && (
                    <button
                      onClick={() => setShowAddStudent(true)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800"
                    >
                      <Plus className="h-4 w-4" />
                      Add Student
                    </button>
                  )}
                </div>

                {showAddStudent && (isTeacher || isAdmin) && (
                  <form onSubmit={handleAddStudent} className="mb-4 p-4 bg-slate-50 rounded-lg">
                    <div className="grid sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Student name"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Grade"
                        value={newStudent.grade}
                        onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        required
                      />
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button type="submit" className="px-3 py-1.5 bg-blue-700 text-white text-sm rounded-lg">Save</button>
                      <button type="button" onClick={() => setShowAddStudent(false)} className="px-3 py-1.5 text-slate-600 text-sm rounded-lg hover:bg-slate-200">Cancel</button>
                    </div>
                  </form>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-900">Name</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-900">Email</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-slate-900">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-slate-100">
                          <td className="py-3 px-2 text-sm text-slate-900">{student.name}</td>
                          <td className="py-3 px-2 text-sm text-slate-500">{student.email}</td>
                          <td className="py-3 px-2 text-sm text-slate-500">{student.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {students.length === 0 && (
                    <p className="text-sm text-slate-500 text-center py-4">No students yet</p>
                  )}
                </div>
              </div>
            )}

            {/* Attendance */}
            {activeTab === "attendance" && (isTeacher || isAdmin) && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Attendance</h3>
                <div className="space-y-3">
                  {attendance.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{record.students?.name}</p>
                        <p className="text-sm text-slate-500">{record.classes?.name} • {new Date(record.date).toLocaleDateString()}</p>
                      </div>
                      {(isTeacher || isAdmin) && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAttendanceUpdate(record.student_id, record.date, 'present')}
                            className={`px-2 py-1 text-xs rounded ${record.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}
                          >
                            Present
                          </button>
                          <button
                            onClick={() => handleAttendanceUpdate(record.student_id, record.date, 'absent')}
                            className={`px-2 py-1 text-xs rounded ${record.status === 'absent' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}
                          >
                            Absent
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  {attendance.length === 0 && (
                    <p className="text-sm text-slate-500 text-center py-4">No attendance records</p>
                  )}
                </div>
              </div>
            )}

            {/* Remarks */}
            {activeTab === "remarks" && (isTeacher || isAdmin) && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Student Remarks</h3>
                <div className="space-y-3">
                  {remarks.map((remark) => (
                    <div key={remark.id} className="p-3 border border-slate-200 rounded-lg">
                      <p className="font-medium text-slate-900">{remark.students?.name}</p>
                      <p className="text-sm text-slate-600 mt-1">{remark.remark}</p>
                      <p className="text-xs text-slate-400 mt-2">{new Date(remark.created_at).toLocaleDateString()}</p>
                    </div>
                  ))}
                  {remarks.length === 0 && (
                    <p className="text-sm text-slate-500 text-center py-4">No remarks yet</p>
                  )}
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === "profile" && isStudent && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">My Profile</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-500">Full Name</label>
                    <p className="text-slate-900">{profile.full_name || "Not set"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-500">Email</label>
                    <p className="text-slate-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-500">Role</label>
                    <p className="text-slate-900 capitalize">{profile.role}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-3 border border-slate-200 rounded-lg">
                      <p className="text-slate-900">{notif.message}</p>
                      <p className="text-xs text-slate-400 mt-2">{new Date(notif.created_at).toLocaleDateString()}</p>
                    </div>
                  ))}
                  {notifications.length === 0 && (
                    <p className="text-sm text-slate-500 text-center py-4">No notifications</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

