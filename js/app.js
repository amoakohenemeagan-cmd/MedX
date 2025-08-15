// Medical Appointment System
class MedicalApp {
    constructor() {
        this.currentUser = null;
        this.currentTab = 'dashboard';
        
        // Initialize data storage
        this.initializeData();
        
        // Bind events
        this.bindEvents();
        
        // Initialize app
        this.init();
    }

    // Initialize default data
    initializeData() {
        // Initialize localStorage with default data if empty
        if (!localStorage.getItem('medx_patients')) {
            localStorage.setItem('medx_patients', JSON.stringify(this.getDefaultPatients()));
        }
        if (!localStorage.getItem('medx_staff')) {
            localStorage.setItem('medx_staff', JSON.stringify(this.getDefaultStaff()));
        }
        if (!localStorage.getItem('medx_appointments')) {
            localStorage.setItem('medx_appointments', JSON.stringify(this.getDefaultAppointments()));
        }
        if (!localStorage.getItem('medx_visits')) {
            localStorage.setItem('medx_visits', JSON.stringify(this.getDefaultVisits()));
        }
        if (!localStorage.getItem('medx_medications')) {
            localStorage.setItem('medx_medications', JSON.stringify(this.getDefaultMedications()));
        }
    }

    getDefaultPatients() {
        return [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@email.com',
                phone: '(555) 123-4567',
                dob: '1985-06-15',
                gender: 'male',
                address: '123 Main St, Anytown, ST 12345',
                emergencyContact: 'Jane Doe',
                emergencyPhone: '(555) 987-6543',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                firstName: 'Sarah',
                lastName: 'Johnson',
                email: 'sarah.johnson@email.com',
                phone: '(555) 234-5678',
                dob: '1990-03-22',
                gender: 'female',
                address: '456 Oak Ave, Somewhere, ST 54321',
                emergencyContact: 'Mike Johnson',
                emergencyPhone: '(555) 876-5432',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                firstName: 'Michael',
                lastName: 'Brown',
                email: 'michael.brown@email.com',
                phone: '(555) 345-6789',
                dob: '1978-11-08',
                gender: 'male',
                address: '789 Pine Rd, Elsewhere, ST 67890',
                emergencyContact: 'Lisa Brown',
                emergencyPhone: '(555) 765-4321',
                createdAt: new Date().toISOString()
            }
        ];
    }

    getDefaultStaff() {
        return [
            {
                id: 1,
                username: 'doctor1',
                password: 'password123',
                role: 'doctor',
                firstName: 'Dr. Emily',
                lastName: 'Wilson',
                email: 'emily.wilson@medx.com',
                phone: '(555) 111-2222',
                specialization: 'Internal Medicine',
                license: 'MD12345'
            },
            {
                id: 2,
                username: 'doctor2',
                password: 'password123',
                role: 'doctor',
                firstName: 'Dr. James',
                lastName: 'Miller',
                email: 'james.miller@medx.com',
                phone: '(555) 333-4444',
                specialization: 'Cardiology',
                license: 'MD67890'
            },
            {
                id: 3,
                username: 'nurse1',
                password: 'password123',
                role: 'nurse',
                firstName: 'Nancy',
                lastName: 'Davis',
                email: 'nancy.davis@medx.com',
                phone: '(555) 555-6666',
                specialization: 'General Nursing',
                license: 'RN11111'
            },
            {
                id: 4,
                username: 'nurse2',
                password: 'password123',
                role: 'nurse',
                firstName: 'Robert',
                lastName: 'Garcia',
                email: 'robert.garcia@medx.com',
                phone: '(555) 777-8888',
                specialization: 'Emergency Nursing',
                license: 'RN22222'
            },
            {
                id: 5,
                username: 'admin',
                password: 'password123',
                role: 'admin',
                firstName: 'Admin',
                lastName: 'User',
                email: 'admin@medx.com',
                phone: '(555) 999-0000',
                specialization: 'System Administration',
                license: 'ADM001'
            }
        ];
    }

    getDefaultAppointments() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        return [
            {
                id: 1,
                patientId: 1,
                doctorId: 1,
                date: today.toISOString().split('T')[0],
                time: '09:00',
                reason: 'Annual checkup',
                notes: 'Routine examination',
                status: 'scheduled',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                patientId: 2,
                doctorId: 2,
                date: today.toISOString().split('T')[0],
                time: '14:30',
                reason: 'Chest pain evaluation',
                notes: 'Follow-up from previous visit',
                status: 'scheduled',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                patientId: 3,
                doctorId: 1,
                date: tomorrow.toISOString().split('T')[0],
                time: '10:15',
                reason: 'Diabetes management',
                notes: 'Medication review',
                status: 'scheduled',
                createdAt: new Date().toISOString()
            }
        ];
    }

    getDefaultVisits() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        return [
            {
                id: 1,
                patientId: 1,
                doctorId: 1,
                nurseId: 3,
                date: yesterday.toISOString().split('T')[0],
                vitals: {
                    bloodPressure: '120/80',
                    heartRate: 72,
                    temperature: 98.6,
                    weight: 175,
                    height: 70,
                    oxygenSaturation: 98
                },
                chiefComplaint: 'Routine annual physical examination',
                symptoms: 'No acute symptoms reported',
                diagnosis: 'Healthy adult - no significant findings',
                treatment: 'Continue current health maintenance routine',
                notes: 'Patient reports feeling well. All vital signs normal.',
                createdAt: yesterday.toISOString()
            }
        ];
    }

    getDefaultMedications() {
        return [
            {
                id: 1,
                patientId: 3,
                name: 'Metformin',
                dosage: '500mg',
                frequency: 'twice-daily',
                instructions: 'Take with meals',
                prescribedBy: 1,
                startDate: '2024-01-15',
                endDate: null,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                patientId: 2,
                name: 'Lisinopril',
                dosage: '10mg',
                frequency: 'once-daily',
                instructions: 'Take in the morning',
                prescribedBy: 2,
                startDate: '2024-02-01',
                endDate: null,
                createdAt: new Date().toISOString()
            }
        ];
    }

    // Bind event listeners
    bindEvents() {
        // Login form
        const loginForm = document.getElementById('login-form');
        console.log('Binding login form events to:', loginForm); // Debug log
        
        loginForm.addEventListener('submit', (e) => {
            console.log('Login form submitted'); // Debug log
            e.preventDefault();
            this.handleLogin();
        });

        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                this.switchTab(item.dataset.tab);
            });
        });

        // Patient form
        document.getElementById('patient-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.savePatient();
        });

        // Appointment form
        document.getElementById('appointment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveAppointment();
        });

        // Visit form
        document.getElementById('visit-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveVisit();
        });

        // Medication form
        document.getElementById('medication-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveMedication();
        });

        // Staff form
        document.getElementById('staff-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveStaff();
        });

        // Search functionality
        document.getElementById('patient-search').addEventListener('input', (e) => {
            this.searchPatients(e.target.value);
        });

        // Staff search and filters
        const staffSearch = document.getElementById('staff-search');
        const staffRoleFilter = document.getElementById('staff-role-filter');
        const staffStatusFilter = document.getElementById('staff-status-filter');
        
        if (staffSearch) {
            staffSearch.addEventListener('input', () => this.loadStaff());
        }
        if (staffRoleFilter) {
            staffRoleFilter.addEventListener('change', () => this.loadStaff());
        }
        if (staffStatusFilter) {
            staffStatusFilter.addEventListener('change', () => this.loadStaff());
        }

        // Filter functionality
        document.getElementById('appointment-filter-status').addEventListener('change', () => {
            this.filterAppointments();
        });
        document.getElementById('appointment-filter-date').addEventListener('change', () => {
            this.filterAppointments();
        });
        document.getElementById('appointment-filter-doctor').addEventListener('change', () => {
            this.filterAppointments();
        });
    }

    // Initialize application
    init() {
        // Check for existing login session immediately
        const savedUser = localStorage.getItem('medx_current_user');
        
        if (savedUser) {
            try {
                this.currentUser = JSON.parse(savedUser);
                this.showDashboard();
            } catch (error) {
                console.error('Error parsing saved user:', error);
                localStorage.removeItem('medx_current_user');
                this.showScreen('login-screen');
            }
        } else {
            this.showScreen('login-screen');
        }
        
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 60000); // Update every minute
    }

    // Handle user login
    handleLogin() {
        console.log('handleLogin called'); // Debug log
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        console.log('Login attempt:', { username, password, role }); // Debug log

        const staff = this.getStaff();
        console.log('Staff data:', staff); // Debug log
        
        const user = staff.find(s => 
            s.username === username && 
            s.password === password && 
            s.role === role
        );

        console.log('Found user:', user); // Debug log

        if (user) {
            this.currentUser = user;
            localStorage.setItem('medx_current_user', JSON.stringify(user));
            console.log('Login successful, switching to dashboard'); // Debug log
            this.showDashboard();
            this.showNotification('Login successful!', 'success');
        } else {
            console.log('Login failed'); // Debug log
            this.showNotification('Invalid credentials. Please try again.', 'error');
        }
    }

    // Show dashboard (used for both login and refresh)
    showDashboard() {
        this.showScreen('dashboard-screen');
        
        // Load UI and data asynchronously for better performance
        setTimeout(() => {
            this.setupUserInterface();
            this.loadDashboard();
        }, 10);
    }

    // Setup UI based on user role
    setupUserInterface() {
        const userInfo = document.getElementById('user-info');
        userInfo.textContent = `${this.currentUser.firstName} ${this.currentUser.lastName} (${this.currentUser.role})`;

        // Show/hide staff management for admin users
        const staffTab = document.getElementById('staff-nav-tab');
        if (this.currentUser.role === 'admin') {
            staffTab.style.display = 'block';
        } else {
            staffTab.style.display = 'none';
        }

        // Restore the last active tab or default to dashboard
        const savedTab = localStorage.getItem('medx_current_tab');
        const tabToActivate = savedTab || 'dashboard';
        
        // Ensure the tab is accessible to the current user
        if (tabToActivate === 'staff' && this.currentUser.role !== 'admin') {
            this.switchTab('dashboard');
        } else {
            this.switchTab(tabToActivate);
        }

        // Populate dropdowns
        this.populateDropdowns();
    }

    // Populate dropdown menus
    populateDropdowns() {
        const patients = this.getPatients();
        const doctors = this.getStaff().filter(s => s.role === 'doctor');

        // Patient dropdowns
        const patientSelects = document.querySelectorAll('#appointment-patient, #visit-patient, #medication-patient');
        patientSelects.forEach(select => {
            select.innerHTML = '<option value="">Select Patient</option>';
            patients.forEach(patient => {
                const option = document.createElement('option');
                option.value = patient.id;
                option.textContent = `${patient.firstName} ${patient.lastName}`;
                select.appendChild(option);
            });
        });

        // Doctor dropdowns
        const doctorSelects = document.querySelectorAll('#appointment-doctor, #visit-doctor, #appointment-filter-doctor');
        doctorSelects.forEach(select => {
            select.innerHTML = '<option value="">Select Doctor</option>';
            doctors.forEach(doctor => {
                const option = document.createElement('option');
                option.value = doctor.id;
                option.textContent = `${doctor.firstName} ${doctor.lastName}`;
                select.appendChild(option);
            });
        });
    }

    // Show/hide screens
    showScreen(screenId) {
        console.log('showScreen called with:', screenId); // Debug log
        
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
            console.log('Removed active from:', screen.id, 'Display:', window.getComputedStyle(screen).display); // Debug log
        });
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Added active to:', screenId, 'Display:', window.getComputedStyle(targetScreen).display); // Debug log
            
            // Force a style recalculation
            targetScreen.offsetHeight;
            
            // Double-check the classes
            console.log('Final classes on', screenId, ':', targetScreen.className);
        } else {
            console.error('Screen not found:', screenId); // Debug log
        }
    }

    // Switch between tabs
    switchTab(tabName) {
        // Get current active tab content for smooth transition
        const currentActiveContent = document.querySelector('.tab-content.active');
        
        if (currentActiveContent) {
            // Start fade-out animation
            currentActiveContent.classList.add('fade-out');
            
            // Wait for fade-out to complete, then switch content
            setTimeout(() => {
                // Update nav items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

                // Update tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active', 'fade-out');
                });
                
                const newTabContent = document.getElementById(`${tabName}-tab`);
                newTabContent.classList.add('active');
                
            }, 300); // Wait for fade-out animation to complete
        } else {
            // No current tab, switch immediately
            // Update nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabName}-tab`).classList.add('active');
        }

        this.currentTab = tabName;
        
        // Save current tab to localStorage for persistence on refresh
        localStorage.setItem('medx_current_tab', tabName);

        // Load tab-specific data after animation completes
        setTimeout(() => {
            switch (tabName) {
                case 'dashboard':
                    this.loadDashboard();
                    break;
                case 'patients':
                    this.loadPatients();
                    break;
                case 'appointments':
                    this.loadAppointments();
                    break;
                case 'visits':
                    this.loadVisits();
                    break;
                case 'medications':
                    this.loadMedications();
                    break;
                case 'staff':
                    if (this.currentUser.role === 'admin') {
                        this.loadStaff();
                    } else {
                        alert('Access denied: Only administrators can access staff management.');
                    }
                    break;
            }
        }, currentActiveContent ? 500 : 0); // Delay data loading if animation is running (0.5s total)
    }

    // Load dashboard data
    loadDashboard() {
        const patients = this.getPatients();
        const appointments = this.getAppointments();
        const visits = this.getVisits();
        
        const today = new Date().toISOString().split('T')[0];
        const todayAppointments = appointments.filter(apt => apt.date === today);
        const pendingAppointments = appointments.filter(apt => apt.status === 'scheduled');

        // Update stats
        document.getElementById('total-patients').textContent = patients.length;
        document.getElementById('today-appointments').textContent = todayAppointments.length;
        document.getElementById('pending-appointments').textContent = pendingAppointments.length;
        document.getElementById('total-visits').textContent = visits.length;

        // Load today's appointments
        this.loadTodayAppointments();
        this.loadRecentPatients();
    }

    // Load today's appointments
    loadTodayAppointments() {
        const appointments = this.getAppointments();
        const patients = this.getPatients();
        const staff = this.getStaff();
        const today = new Date().toISOString().split('T')[0];
        
        const todayAppointments = appointments.filter(apt => apt.date === today);
        const container = document.getElementById('today-appointments-list');
        
        if (todayAppointments.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">No appointments scheduled for today.</p>';
            return;
        }

        container.innerHTML = todayAppointments.map(appointment => {
            const patient = patients.find(p => p.id === appointment.patientId);
            const doctor = staff.find(s => s.id === appointment.doctorId);
            
            return `
                <div class="appointment-item">
                    <div class="appointment-info">
                        <h4>${patient?.firstName} ${patient?.lastName}</h4>
                        <p>Dr. ${doctor?.firstName} ${doctor?.lastName}</p>
                        <p>${appointment.reason}</p>
                    </div>
                    <div class="appointment-time">${appointment.time}</div>
                </div>
            `;
        }).join('');
    }

    // Load recent patients
    loadRecentPatients() {
        const patients = this.getPatients();
        const recentPatients = patients.slice(-5).reverse();
        const container = document.getElementById('recent-patients-list');
        
        container.innerHTML = recentPatients.map(patient => `
            <div class="patient-item">
                <div class="patient-info-brief">
                    <h4>${patient.firstName} ${patient.lastName}</h4>
                    <p>${patient.email}</p>
                    <p>${patient.phone}</p>
                </div>
            </div>
        `).join('');
    }

    // Load patients
    loadPatients() {
        const patients = this.getPatients();
        this.displayPatients(patients);
    }

    displayPatients(patients) {
        const container = document.getElementById('patients-grid');
        
        if (patients.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">No patients found.</p>';
            return;
        }

        container.innerHTML = patients.map(patient => `
            <div class="patient-card" onclick="app.showPatientDetails(${patient.id})" style="cursor: pointer;">
                <div class="patient-header">
                    <div class="patient-info">
                        <h3>${patient.firstName} ${patient.lastName}</h3>
                        <p><i class="fas fa-envelope"></i> ${patient.email}</p>
                        <p><i class="fas fa-phone"></i> ${patient.phone}</p>
                        <p><i class="fas fa-birthday-cake"></i> ${this.formatDate(patient.dob)}</p>
                        <p><i class="fas fa-venus-mars"></i> ${patient.gender}</p>
                    </div>
                </div>
                <div class="patient-actions" onclick="event.stopPropagation()">
                    <button class="btn btn-primary" onclick="app.editPatient(${patient.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-danger" onclick="app.deletePatient(${patient.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Search patients
    searchPatients(query) {
        const patients = this.getPatients();
        const filteredPatients = patients.filter(patient => 
            patient.firstName.toLowerCase().includes(query.toLowerCase()) ||
            patient.lastName.toLowerCase().includes(query.toLowerCase()) ||
            patient.email.toLowerCase().includes(query.toLowerCase()) ||
            patient.phone.includes(query)
        );
        this.displayPatients(filteredPatients);
    }

    // Load appointments
    loadAppointments() {
        this.displayAppointments(this.getAppointments());
    }

    displayAppointments(appointments) {
        const patients = this.getPatients();
        const staff = this.getStaff();
        const tbody = document.getElementById('appointments-table-body');
        
        if (appointments.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #64748b; padding: 2rem;">No appointments found.</td></tr>';
            return;
        }

        tbody.innerHTML = appointments.map(appointment => {
            const patient = patients.find(p => p.id === appointment.patientId);
            const doctor = staff.find(s => s.id === appointment.doctorId);
            
            return `
                <tr>
                    <td>${patient?.firstName} ${patient?.lastName}</td>
                    <td>Dr. ${doctor?.firstName} ${doctor?.lastName}</td>
                    <td>${this.formatDate(appointment.date)} ${appointment.time}</td>
                    <td><span class="status-badge status-${appointment.status}">${appointment.status}</span></td>
                    <td>
                        <button class="btn btn-primary" onclick="app.editAppointment(${appointment.id})" style="padding: 0.25rem 0.5rem; margin-right: 0.5rem;">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger" onclick="app.deleteAppointment(${appointment.id})" style="padding: 0.25rem 0.5rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Filter appointments
    filterAppointments() {
        const appointments = this.getAppointments();
        const statusFilter = document.getElementById('appointment-filter-status').value;
        const dateFilter = document.getElementById('appointment-filter-date').value;
        const doctorFilter = document.getElementById('appointment-filter-doctor').value;

        let filteredAppointments = appointments;

        if (statusFilter) {
            filteredAppointments = filteredAppointments.filter(apt => apt.status === statusFilter);
        }

        if (dateFilter) {
            filteredAppointments = filteredAppointments.filter(apt => apt.date === dateFilter);
        }

        if (doctorFilter) {
            filteredAppointments = filteredAppointments.filter(apt => apt.doctorId == doctorFilter);
        }

        this.displayAppointments(filteredAppointments);
    }

    // Load visits
    loadVisits() {
        const visits = this.getVisits();
        const patients = this.getPatients();
        const staff = this.getStaff();
        const tbody = document.getElementById('visits-table-body');
        
        if (visits.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 2rem;">No visits recorded.</td></tr>';
            return;
        }

        tbody.innerHTML = visits.map(visit => {
            const patient = patients.find(p => p.id === visit.patientId);
            const doctor = staff.find(s => s.id === visit.doctorId);
            const nurse = staff.find(s => s.id === visit.nurseId);
            
            return `
                <tr>
                    <td>${patient?.firstName} ${patient?.lastName}</td>
                    <td>Dr. ${doctor?.firstName} ${doctor?.lastName}</td>
                    <td>${nurse?.firstName} ${nurse?.lastName}</td>
                    <td>${this.formatDate(visit.date)}</td>
                    <td>${visit.vitals.bloodPressure} / ${visit.vitals.heartRate}bpm</td>
                    <td>
                        <button class="btn btn-primary" onclick="app.viewVisitDetails(${visit.id})" style="padding: 0.25rem 0.5rem; margin-right: 0.5rem;">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="btn btn-secondary" onclick="app.editVisit(${visit.id})" style="padding: 0.25rem 0.5rem; margin-right: 0.5rem;">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger" onclick="app.deleteVisit(${visit.id})" style="padding: 0.25rem 0.5rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Load medications
    loadMedications() {
        const medications = this.getMedications();
        const patients = this.getPatients();
        const staff = this.getStaff();
        const tbody = document.getElementById('medications-table-body');
        
        if (medications.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 2rem;">No medications recorded.</td></tr>';
            return;
        }

        tbody.innerHTML = medications.map(medication => {
            const patient = patients.find(p => p.id === medication.patientId);
            const prescriber = staff.find(s => s.id === medication.prescribedBy);
            
            return `
                <tr>
                    <td>${patient?.firstName} ${patient?.lastName}</td>
                    <td>${medication.name}</td>
                    <td>${medication.dosage}</td>
                    <td>${medication.frequency.replace('-', ' ')}</td>
                    <td>Dr. ${prescriber?.firstName} ${prescriber?.lastName}</td>
                    <td>${this.formatDate(medication.startDate)}</td>
                    <td>
                        <button class="btn btn-primary" onclick="app.editMedication(${medication.id})" style="padding: 0.25rem 0.5rem; margin-right: 0.5rem;">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger" onclick="app.deleteMedication(${medication.id})" style="padding: 0.25rem 0.5rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Load staff (admin only)
    loadStaff() {
        const allStaff = this.getStaff().filter(s => s.role !== 'admin');
        
        // Apply filters
        const roleFilter = document.getElementById('staff-role-filter')?.value || '';
        const statusFilter = document.getElementById('staff-status-filter')?.value || '';
        const searchFilter = document.getElementById('staff-search')?.value.toLowerCase() || '';
        
        let filteredStaff = allStaff.filter(member => {
            const matchesRole = !roleFilter || member.role === roleFilter;
            const matchesStatus = !statusFilter || member.status === statusFilter;
            const matchesSearch = !searchFilter || 
                member.firstName.toLowerCase().includes(searchFilter) ||
                member.lastName.toLowerCase().includes(searchFilter) ||
                member.email.toLowerCase().includes(searchFilter) ||
                member.specialization?.toLowerCase().includes(searchFilter);
            
            return matchesRole && matchesStatus && matchesSearch;
        });
        
        // Update statistics
        this.updateStaffStats(allStaff);
        
        // Separate doctors and nurses
        const doctors = filteredStaff.filter(s => s.role === 'doctor');
        const nurses = filteredStaff.filter(s => s.role === 'nurse');
        
        // Load doctors
        const doctorsContainer = document.getElementById('doctors-grid');
        if (doctorsContainer) {
            doctorsContainer.innerHTML = doctors.length > 0 ? doctors.map(member => this.renderStaffCard(member)).join('') : 
                '<div class="empty-state"><p>No doctors found</p></div>';
        }
        
        // Load nurses
        const nursesContainer = document.getElementById('nurses-grid');
        if (nursesContainer) {
            nursesContainer.innerHTML = nurses.length > 0 ? nurses.map(member => this.renderStaffCard(member)).join('') : 
                '<div class="empty-state"><p>No nurses found</p></div>';
        }
    }

    // Update staff statistics
    updateStaffStats(staff) {
        const doctors = staff.filter(s => s.role === 'doctor' && s.status === 'active');
        const nurses = staff.filter(s => s.role === 'nurse' && s.status === 'active');
        const totalActive = staff.filter(s => s.status === 'active');
        
        const doctorsCountEl = document.getElementById('doctors-count');
        const nursesCountEl = document.getElementById('nurses-count');
        const totalStaffCountEl = document.getElementById('total-staff-count');
        
        if (doctorsCountEl) doctorsCountEl.textContent = doctors.length;
        if (nursesCountEl) nursesCountEl.textContent = nurses.length;
        if (totalStaffCountEl) totalStaffCountEl.textContent = totalActive.length;
    }

    // Render individual staff card
    renderStaffCard(member) {
        const statusBadge = `<span class="status-badge status-${member.status || 'active'}">${(member.status || 'active').charAt(0).toUpperCase() + (member.status || 'active').slice(1)}</span>`;
        const roleIcon = member.role === 'doctor' ? 'fas fa-user-md' : 'fas fa-user-nurse';
        
        return `
            <div class="staff-card">
                <div class="staff-header">
                    <div class="staff-info">
                        <h3><i class="${roleIcon}"></i> ${member.firstName} ${member.lastName}</h3>
                        <p><strong>Role:</strong> ${member.role.charAt(0).toUpperCase() + member.role.slice(1)}</p>
                        <p><strong>Status:</strong> ${statusBadge}</p>
                        <p><i class="fas fa-envelope"></i> ${member.email}</p>
                        <p><i class="fas fa-phone"></i> ${member.phone}</p>
                        ${member.specialization ? `<p><i class="fas fa-stethoscope"></i> ${member.specialization}</p>` : ''}
                        ${member.license ? `<p><i class="fas fa-certificate"></i> License: ${member.license}</p>` : ''}
                        ${member.hireDate ? `<p><i class="fas fa-calendar"></i> Hired: ${new Date(member.hireDate).toLocaleDateString()}</p>` : ''}
                    </div>
                </div>
                <div class="staff-actions">
                    <button class="btn btn-primary" onclick="app.editStaff(${member.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-secondary" onclick="app.toggleStaffStatus(${member.id})">
                        <i class="fas fa-toggle-${member.status === 'active' ? 'on' : 'off'}"></i> 
                        ${member.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button class="btn btn-danger" onclick="app.deleteStaff(${member.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }

    // Save patient
    savePatient() {
        const patientId = document.getElementById('patient-id').value;
        
        const patient = {
            firstName: document.getElementById('patient-first-name').value,
            lastName: document.getElementById('patient-last-name').value,
            email: document.getElementById('patient-email').value,
            phone: document.getElementById('patient-phone').value,
            dob: document.getElementById('patient-dob').value,
            gender: document.getElementById('patient-gender').value,
            address: document.getElementById('patient-address').value,
            emergencyContact: document.getElementById('patient-emergency-contact').value,
            emergencyPhone: document.getElementById('patient-emergency-phone').value
        };

        let patients = this.getPatients();
        
        if (patientId) {
            // Update existing patient
            const index = patients.findIndex(p => p.id == patientId);
            if (index !== -1) {
                patients[index] = { ...patients[index], ...patient };
                this.showNotification('Patient updated successfully!', 'success');
            }
        } else {
            // Add new patient
            patient.id = Date.now();
            patient.createdAt = new Date().toISOString();
            patients.push(patient);
            this.showNotification('Patient added successfully!', 'success');
        }

        localStorage.setItem('medx_patients', JSON.stringify(patients));
        this.hideModal('patient-modal');
        this.loadPatients();
        this.populateDropdowns();
        this.resetForm('patient-form');
    }

    // Save appointment
    saveAppointment() {
        const appointment = {
            patientId: parseInt(document.getElementById('appointment-patient').value),
            doctorId: parseInt(document.getElementById('appointment-doctor').value),
            date: document.getElementById('appointment-date').value,
            time: document.getElementById('appointment-time').value,
            reason: document.getElementById('appointment-reason').value,
            notes: document.getElementById('appointment-notes').value,
            status: 'scheduled'
        };

        let appointments = this.getAppointments();
        const appointmentId = document.getElementById('appointment-id').value;
        
        if (appointmentId) {
            // Update existing appointment
            const index = appointments.findIndex(a => a.id == appointmentId);
            if (index !== -1) {
                appointments[index] = { ...appointments[index], ...appointment };
                this.showNotification('Appointment updated successfully!', 'success');
            }
        } else {
            // Add new appointment
            appointment.id = Date.now();
            appointment.createdAt = new Date().toISOString();
            appointments.push(appointment);
            this.showNotification('Appointment scheduled successfully!', 'success');
        }

        localStorage.setItem('medx_appointments', JSON.stringify(appointments));
        this.hideModal('appointment-modal');
        this.loadAppointments();
        this.resetForm('appointment-form');
    }

    // Save visit
    saveVisit() {
        const visit = {
            patientId: parseInt(document.getElementById('visit-patient').value),
            doctorId: parseInt(document.getElementById('visit-doctor').value),
            nurseId: this.currentUser.id,
            date: new Date().toISOString().split('T')[0],
            vitals: {
                bloodPressure: document.getElementById('visit-blood-pressure').value,
                heartRate: parseInt(document.getElementById('visit-heart-rate').value) || null,
                temperature: parseFloat(document.getElementById('visit-temperature').value) || null,
                weight: parseInt(document.getElementById('visit-weight').value) || null,
                height: parseInt(document.getElementById('visit-height').value) || null,
                oxygenSaturation: parseInt(document.getElementById('visit-oxygen-saturation').value) || null
            },
            chiefComplaint: document.getElementById('visit-chief-complaint').value,
            symptoms: document.getElementById('visit-symptoms').value,
            diagnosis: document.getElementById('visit-diagnosis').value,
            medication: document.getElementById('visit-medication').value,
            treatment: document.getElementById('visit-treatment').value,
            notes: document.getElementById('visit-notes').value
        };

        let visits = this.getVisits();
        const visitId = document.getElementById('visit-id').value;
        
        if (visitId) {
            // Update existing visit
            const index = visits.findIndex(v => v.id == visitId);
            if (index !== -1) {
                visits[index] = { ...visits[index], ...visit };
                this.showNotification('Visit updated successfully!', 'success');
            }
        } else {
            // Add new visit
            visit.id = Date.now();
            visit.createdAt = new Date().toISOString();
            visits.push(visit);
            this.showNotification('Visit recorded successfully!', 'success');
        }

        localStorage.setItem('medx_visits', JSON.stringify(visits));
        this.hideModal('visit-modal');
        this.loadVisits();
        this.resetForm('visit-form');
        
        // If we're on the patient details page, refresh the patient visits
        if (document.getElementById('patient-details-screen').classList.contains('active') && this.currentPatientId) {
            this.loadPatientVisits(this.currentPatientId);
        }
    }

    // Save medication
    saveMedication() {
        const medication = {
            patientId: parseInt(document.getElementById('medication-patient').value),
            name: document.getElementById('medication-name').value,
            dosage: document.getElementById('medication-dosage').value,
            frequency: document.getElementById('medication-frequency').value,
            instructions: document.getElementById('medication-instructions').value,
            startDate: document.getElementById('medication-start-date').value,
            endDate: document.getElementById('medication-end-date').value || null,
            prescribedBy: this.currentUser.id
        };

        let medications = this.getMedications();
        const medicationId = document.getElementById('medication-id').value;
        
        if (medicationId) {
            // Update existing medication
            const index = medications.findIndex(m => m.id == medicationId);
            if (index !== -1) {
                medications[index] = { ...medications[index], ...medication };
                this.showNotification('Medication updated successfully!', 'success');
            }
        } else {
            // Add new medication
            medication.id = Date.now();
            medication.createdAt = new Date().toISOString();
            medications.push(medication);
            this.showNotification('Medication added successfully!', 'success');
        }

        localStorage.setItem('medx_medications', JSON.stringify(medications));
        this.hideModal('medication-modal');
        this.loadMedications();
        this.resetForm('medication-form');
    }

    // Save staff
    saveStaff() {
        const staffId = document.getElementById('staff-id').value;
        
        const staff = {
            username: document.getElementById('staff-username').value,
            password: staffId ? undefined : 'password123', // Default password for new staff only
            role: document.getElementById('staff-role').value,
            firstName: document.getElementById('staff-first-name').value,
            lastName: document.getElementById('staff-last-name').value,
            email: document.getElementById('staff-email').value,
            phone: document.getElementById('staff-phone').value,
            address: document.getElementById('staff-address').value,
            specialization: document.getElementById('staff-specialization').value,
            license: document.getElementById('staff-license').value,
            hireDate: document.getElementById('staff-hire-date').value,
            status: document.getElementById('staff-status').value,
            notes: document.getElementById('staff-notes').value
        };

        // Remove undefined password field for updates
        if (staff.password === undefined) {
            delete staff.password;
        }

        let staffList = this.getStaff();
        
        if (staffId) {
            // Update existing staff
            const index = staffList.findIndex(s => s.id == staffId);
            if (index !== -1) {
                staffList[index] = { ...staffList[index], ...staff };
                this.showNotification('Staff member updated successfully!', 'success');
            }
        } else {
            // Add new staff
            staff.id = Date.now();
            staffList.push(staff);
            this.showNotification('Staff member added successfully!', 'success');
        }

        localStorage.setItem('medx_staff', JSON.stringify(staffList));
        this.hideModal('staff-modal');
        this.loadStaff();
        this.populateDropdowns();
        this.resetForm('staff-form');
    }

    // Edit functions
    editPatient(id) {
        const patient = this.getPatients().find(p => p.id === id);
        if (patient) {
            document.getElementById('patient-id').value = patient.id;
            document.getElementById('patient-first-name').value = patient.firstName;
            document.getElementById('patient-last-name').value = patient.lastName;
            document.getElementById('patient-email').value = patient.email;
            document.getElementById('patient-phone').value = patient.phone;
            document.getElementById('patient-dob').value = patient.dob;
            document.getElementById('patient-gender').value = patient.gender;
            document.getElementById('patient-address').value = patient.address;
            document.getElementById('patient-emergency-contact').value = patient.emergencyContact;
            document.getElementById('patient-emergency-phone').value = patient.emergencyPhone;
            
            document.getElementById('patient-modal-title').textContent = 'Edit Patient';
            this.showModal('patient-modal');
        }
    }

    editAppointment(id) {
        const appointment = this.getAppointments().find(a => a.id === id);
        if (appointment) {
            document.getElementById('appointment-id').value = appointment.id;
            document.getElementById('appointment-patient').value = appointment.patientId;
            document.getElementById('appointment-doctor').value = appointment.doctorId;
            document.getElementById('appointment-date').value = appointment.date;
            document.getElementById('appointment-time').value = appointment.time;
            document.getElementById('appointment-reason').value = appointment.reason;
            document.getElementById('appointment-notes').value = appointment.notes;
            
            document.getElementById('appointment-modal-title').textContent = 'Edit Appointment';
            this.showModal('appointment-modal');
        }
    }

    editMedication(id) {
        const medication = this.getMedications().find(m => m.id === id);
        if (medication) {
            document.getElementById('medication-id').value = medication.id;
            document.getElementById('medication-patient').value = medication.patientId;
            document.getElementById('medication-name').value = medication.name;
            document.getElementById('medication-dosage').value = medication.dosage;
            document.getElementById('medication-frequency').value = medication.frequency;
            document.getElementById('medication-instructions').value = medication.instructions;
            document.getElementById('medication-start-date').value = medication.startDate;
            document.getElementById('medication-end-date').value = medication.endDate || '';
            
            document.getElementById('medication-modal-title').textContent = 'Edit Medication';
            this.showModal('medication-modal');
        }
    }

    editStaff(id) {
        const staff = this.getStaff().find(s => s.id === id);
        if (staff) {
            document.getElementById('staff-id').value = staff.id;
            document.getElementById('staff-username').value = staff.username;
            document.getElementById('staff-role').value = staff.role;
            document.getElementById('staff-first-name').value = staff.firstName;
            document.getElementById('staff-last-name').value = staff.lastName;
            document.getElementById('staff-email').value = staff.email;
            document.getElementById('staff-phone').value = staff.phone;
            document.getElementById('staff-address').value = staff.address || '';
            document.getElementById('staff-specialization').value = staff.specialization || '';
            document.getElementById('staff-license').value = staff.license || '';
            document.getElementById('staff-hire-date').value = staff.hireDate || '';
            document.getElementById('staff-status').value = staff.status || 'active';
            document.getElementById('staff-notes').value = staff.notes || '';
            
            document.getElementById('staff-modal-title').textContent = 'Edit Staff Member';
            this.showModal('staff-modal');
        }
    }

    // Toggle staff status
    toggleStaffStatus(id) {
        const staffList = this.getStaff();
        const index = staffList.findIndex(s => s.id === id);
        
        if (index !== -1) {
            const currentStatus = staffList[index].status || 'active';
            staffList[index].status = currentStatus === 'active' ? 'inactive' : 'active';
            
            localStorage.setItem('medx_staff', JSON.stringify(staffList));
            this.loadStaff();
            this.showNotification(
                `Staff member ${staffList[index].status === 'active' ? 'activated' : 'deactivated'} successfully!`, 
                'success'
            );
        }
    }

    // Add new staff member
    addNewStaff() {
        // Reset the form
        this.resetForm('staff-form');
        
        // Clear any hidden ID field
        document.getElementById('staff-id').value = '';
        
        // Set default values
        document.getElementById('staff-status').value = 'active';
        document.getElementById('staff-hire-date').value = new Date().toISOString().split('T')[0]; // Today's date
        
        // Set modal title for adding
        document.getElementById('staff-modal-title').textContent = 'Add New Staff Member';
        
        // Show the modal
        this.showModal('staff-modal');
    }

    // Delete functions
    deletePatient(id) {
        if (confirm('Are you sure you want to delete this patient?')) {
            let patients = this.getPatients();
            patients = patients.filter(p => p.id !== id);
            localStorage.setItem('medx_patients', JSON.stringify(patients));
            this.loadPatients();
            this.populateDropdowns();
            this.showNotification('Patient deleted successfully!', 'success');
        }
    }

    // Show patient details
    showPatientDetails(patientId) {
        this.currentPatientId = patientId;
        const patient = this.getPatients().find(p => p.id === patientId);
        if (!patient) return;

        // Update page title and user info
        document.getElementById('patient-details-name').textContent = `${patient.firstName} ${patient.lastName}`;
        document.getElementById('user-info-details').textContent = `${this.currentUser.firstName} ${this.currentUser.lastName} (${this.currentUser.role})`;

        // Load patient information
        this.loadPatientInfo(patient);
        
        // Load patient visits
        this.loadPatientVisits(patientId);
        
        // Switch to patient details screen
        this.showScreen('patient-details-screen');
    }

    // Load patient information
    loadPatientInfo(patient) {
        const container = document.getElementById('patient-details-info');
        
        container.innerHTML = `
            <div class="patient-info-grid">
                <div class="patient-info-item">
                    <label>Full Name:</label>
                    <span>${patient.firstName} ${patient.lastName}</span>
                </div>
                <div class="patient-info-item">
                    <label>Date of Birth:</label>
                    <span>${this.formatDate(patient.dob)}</span>
                </div>
                <div class="patient-info-item">
                    <label>Gender:</label>
                    <span>${patient.gender}</span>
                </div>
                <div class="patient-info-item">
                    <label>Email:</label>
                    <span>${patient.email}</span>
                </div>
                <div class="patient-info-item">
                    <label>Phone:</label>
                    <span>${patient.phone}</span>
                </div>
                <div class="patient-info-item">
                    <label>Emergency Contact:</label>
                    <span>${patient.emergencyContact || 'Not provided'}</span>
                </div>
                <div class="patient-info-item">
                    <label>Emergency Phone:</label>
                    <span>${patient.emergencyPhone || 'Not provided'}</span>
                </div>
            </div>
            <div class="patient-info-item" style="margin-top: 1rem;">
                <label>Address:</label>
                <span>${patient.address || 'Not provided'}</span>
            </div>
        `;
    }

    // Load patient visits
    loadPatientVisits(patientId) {
        const visits = this.getVisits().filter(v => v.patientId === patientId);
        const staff = this.getStaff();
        const container = document.getElementById('patient-visits-list');
        
        if (visits.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">No visits recorded for this patient.</p>';
            return;
        }

        // Sort visits by date (newest first)
        visits.sort((a, b) => new Date(b.date) - new Date(a.date));

        container.innerHTML = visits.map(visit => {
            const doctor = staff.find(s => s.id === visit.doctorId);
            const nurse = staff.find(s => s.id === visit.nurseId);
            
            return `
                <div class="visit-item">
                    <div class="visit-header">
                        <div>
                            <div class="visit-date">${this.formatDate(visit.date)}</div>
                            <div class="visit-doctor">Dr. ${doctor?.firstName} ${doctor?.lastName} | ${nurse?.firstName} ${nurse?.lastName}</div>
                        </div>
                        <div class="visit-actions">
                            <button class="btn btn-secondary" onclick="app.editVisit(${visit.id}); event.stopPropagation();" style="padding: 0.25rem 0.5rem; margin-right: 0.5rem;">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-primary" onclick="app.viewVisitDetails(${visit.id}); event.stopPropagation();" style="padding: 0.25rem 0.5rem;">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="visit-summary">
                        <p><strong>Chief Complaint:</strong> ${visit.chiefComplaint || 'Not recorded'}</p>
                        <p><strong>Diagnosis:</strong> ${visit.diagnosis || 'Not recorded'}</p>
                        ${visit.medication ? `<p><strong>Medication:</strong> ${visit.medication}</p>` : ''}
                        <p><strong>Vitals:</strong> BP: ${visit.vitals.bloodPressure || 'N/A'}, HR: ${visit.vitals.heartRate || 'N/A'} bpm, Temp: ${visit.vitals.temperature || 'N/A'}°F</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Edit patient from details page
    editPatientFromDetails() {
        if (this.currentPatientId) {
            this.editPatient(this.currentPatientId);
        }
    }

    // Show visit modal for current patient
    showVisitModalForPatient() {
        if (this.currentPatientId) {
            this.showModal('visit-modal');
            // Pre-select the current patient
            setTimeout(() => {
                document.getElementById('visit-patient').value = this.currentPatientId;
            }, 100);
        }
    }

    deleteAppointment(id) {
        if (confirm('Are you sure you want to delete this appointment?')) {
            let appointments = this.getAppointments();
            appointments = appointments.filter(a => a.id !== id);
            localStorage.setItem('medx_appointments', JSON.stringify(appointments));
            this.loadAppointments();
            this.showNotification('Appointment deleted successfully!', 'success');
        }
    }

    // Edit visit
    editVisit(id) {
        const visit = this.getVisits().find(v => v.id === id);
        if (!visit) return;

        // Populate the form with visit data
        document.getElementById('visit-id').value = visit.id;
        document.getElementById('visit-patient').value = visit.patientId;
        document.getElementById('visit-doctor').value = visit.doctorId;
        
        // Populate vital signs
        document.getElementById('visit-blood-pressure').value = visit.vitals.bloodPressure || '';
        document.getElementById('visit-heart-rate').value = visit.vitals.heartRate || '';
        document.getElementById('visit-temperature').value = visit.vitals.temperature || '';
        document.getElementById('visit-weight').value = visit.vitals.weight || '';
        document.getElementById('visit-height').value = visit.vitals.height || '';
        document.getElementById('visit-oxygen-saturation').value = visit.vitals.oxygenSaturation || '';
        
        // Populate visit details
        document.getElementById('visit-chief-complaint').value = visit.chiefComplaint || '';
        document.getElementById('visit-symptoms').value = visit.symptoms || '';
        document.getElementById('visit-diagnosis').value = visit.diagnosis || '';
        document.getElementById('visit-medication').value = visit.medication || '';
        document.getElementById('visit-treatment').value = visit.treatment || '';
        document.getElementById('visit-notes').value = visit.notes || '';
        
        // Update modal title
        document.getElementById('visit-modal-title').textContent = 'Edit Patient Visit';
        
        // Show the modal
        this.showModal('visit-modal');
    }

    deleteVisit(id) {
        if (confirm('Are you sure you want to delete this visit?')) {
            let visits = this.getVisits();
            visits = visits.filter(v => v.id !== id);
            localStorage.setItem('medx_visits', JSON.stringify(visits));
            this.loadVisits();
            this.showNotification('Visit deleted successfully!', 'success');
        }
    }

    deleteMedication(id) {
        if (confirm('Are you sure you want to delete this medication?')) {
            let medications = this.getMedications();
            medications = medications.filter(m => m.id !== id);
            localStorage.setItem('medx_medications', JSON.stringify(medications));
            this.loadMedications();
            this.showNotification('Medication deleted successfully!', 'success');
        }
    }

    deleteStaff(id) {
        if (confirm('Are you sure you want to delete this staff member?')) {
            let staff = this.getStaff();
            staff = staff.filter(s => s.id !== id);
            localStorage.setItem('medx_staff', JSON.stringify(staff));
            this.loadStaff();
            this.populateDropdowns();
            this.showNotification('Staff member deleted successfully!', 'success');
        }
    }

    // View visit details
    viewVisitDetails(id) {
        const visit = this.getVisits().find(v => v.id === id);
        if (!visit) return;

        const patients = this.getPatients();
        const staff = this.getStaff();
        const patient = patients.find(p => p.id === visit.patientId);
        const doctor = staff.find(s => s.id === visit.doctorId);
        const nurse = staff.find(s => s.id === visit.nurseId);

        const content = document.getElementById('visit-details-content');
        content.innerHTML = `
            <div class="visit-details">
                <div class="visit-detail-section">
                    <h4>Patient Information</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <label>Name:</label>
                            <span>${patient?.firstName} ${patient?.lastName}</span>
                        </div>
                        <div class="detail-item">
                            <label>Date:</label>
                            <span>${this.formatDate(visit.date)}</span>
                        </div>
                        <div class="detail-item">
                            <label>Doctor:</label>
                            <span>Dr. ${doctor?.firstName} ${doctor?.lastName}</span>
                        </div>
                        <div class="detail-item">
                            <label>Nurse:</label>
                            <span>${nurse?.firstName} ${nurse?.lastName}</span>
                        </div>
                    </div>
                </div>

                <div class="visit-detail-section">
                    <h4>Vital Signs</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <label>Blood Pressure:</label>
                            <span>${visit.vitals.bloodPressure || 'Not recorded'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Heart Rate:</label>
                            <span>${visit.vitals.heartRate ? visit.vitals.heartRate + ' bpm' : 'Not recorded'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Temperature:</label>
                            <span>${visit.vitals.temperature ? visit.vitals.temperature + ' °F' : 'Not recorded'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Weight:</label>
                            <span>${visit.vitals.weight ? visit.vitals.weight + ' lbs' : 'Not recorded'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Height:</label>
                            <span>${visit.vitals.height ? visit.vitals.height + ' inches' : 'Not recorded'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Oxygen Saturation:</label>
                            <span>${visit.vitals.oxygenSaturation ? visit.vitals.oxygenSaturation + '%' : 'Not recorded'}</span>
                        </div>
                    </div>
                </div>

                <div class="visit-detail-section">
                    <h4>Visit Details</h4>
                    <div class="detail-item" style="margin-bottom: 1rem;">
                        <label>Chief Complaint:</label>
                        <span>${visit.chiefComplaint || 'Not recorded'}</span>
                    </div>
                    <div class="detail-item" style="margin-bottom: 1rem;">
                        <label>Symptoms:</label>
                        <span>${visit.symptoms || 'Not recorded'}</span>
                    </div>
                    <div class="detail-item" style="margin-bottom: 1rem;">
                        <label>Diagnosis:</label>
                        <span>${visit.diagnosis || 'Not recorded'}</span>
                    </div>
                    <div class="detail-item" style="margin-bottom: 1rem;">
                        <label>Medication Prescribed:</label>
                        <span>${visit.medication || 'No medication prescribed'}</span>
                    </div>
                    <div class="detail-item" style="margin-bottom: 1rem;">
                        <label>Treatment Plan:</label>
                        <span>${visit.treatment || 'Not recorded'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Additional Notes:</label>
                        <span>${visit.notes || 'No additional notes'}</span>
                    </div>
                </div>
            </div>
        `;

        this.showModal('visit-details-modal');
    }

    // Data retrieval functions
    getPatients() {
        return JSON.parse(localStorage.getItem('medx_patients') || '[]');
    }

    getStaff() {
        const stored = localStorage.getItem('medx_staff');
        
        if (!stored || JSON.parse(stored).length === 0) {
            // Initialize with sample staff data
            const sampleStaff = [
                {
                    id: 1,
                    username: 'doctor1',
                    password: 'password123',
                    role: 'doctor',
                    firstName: 'Dr. Sarah',
                    lastName: 'Johnson',
                    email: 'sarah.johnson@medx.com',
                    phone: '(555) 123-4567',
                    address: '123 Medical Plaza, Suite 100',
                    specialization: 'Cardiology',
                    license: 'MD12345',
                    hireDate: '2020-01-15',
                    status: 'active',
                    notes: 'Board-certified cardiologist with 10+ years experience'
                },
                {
                    id: 2,
                    username: 'doctor2',
                    password: 'password123',
                    role: 'doctor',
                    firstName: 'Dr. Michael',
                    lastName: 'Chen',
                    email: 'michael.chen@medx.com',
                    phone: '(555) 234-5678',
                    address: '456 Healthcare Dr, Suite 200',
                    specialization: 'Pediatrics',
                    license: 'MD23456',
                    hireDate: '2019-03-22',
                    status: 'active',
                    notes: 'Specialized in pediatric care and family medicine'
                },
                {
                    id: 3,
                    username: 'doctor3',
                    password: 'password123',
                    role: 'doctor',
                    firstName: 'Dr. Emily',
                    lastName: 'Rodriguez',
                    email: 'emily.rodriguez@medx.com',
                    phone: '(555) 345-6789',
                    address: '789 Wellness Ave, Floor 3',
                    specialization: 'Emergency Medicine',
                    license: 'MD34567',
                    hireDate: '2021-07-10',
                    status: 'active',
                    notes: 'Emergency medicine specialist, trauma certified'
                },
                {
                    id: 4,
                    username: 'nurse1',
                    password: 'password123',
                    role: 'nurse',
                    firstName: 'Jessica',
                    lastName: 'Williams',
                    email: 'jessica.williams@medx.com',
                    phone: '(555) 456-7890',
                    address: '321 Care Center Blvd',
                    specialization: 'ICU',
                    license: 'RN12345',
                    hireDate: '2020-05-18',
                    status: 'active',
                    notes: 'ICU specialist with critical care certification'
                },
                {
                    id: 5,
                    username: 'nurse2',
                    password: 'password123',
                    role: 'nurse',
                    firstName: 'David',
                    lastName: 'Thompson',
                    email: 'david.thompson@medx.com',
                    phone: '(555) 567-8901',
                    address: '654 Nursing Way',
                    specialization: 'Emergency',
                    license: 'RN23456',
                    hireDate: '2018-11-12',
                    status: 'active',
                    notes: 'Emergency department nurse with trauma experience'
                },
                {
                    id: 6,
                    username: 'nurse3',
                    password: 'password123',
                    role: 'nurse',
                    firstName: 'Maria',
                    lastName: 'Garcia',
                    email: 'maria.garcia@medx.com',
                    phone: '(555) 678-9012',
                    address: '987 Health St',
                    specialization: 'Pediatrics',
                    license: 'RN34567',
                    hireDate: '2022-02-28',
                    status: 'active',
                    notes: 'Pediatric nursing specialist, excellent with children'
                },
                {
                    id: 7,
                    username: 'admin',
                    password: 'password123',
                    role: 'admin',
                    firstName: 'Admin',
                    lastName: 'User',
                    email: 'admin@medx.com',
                    phone: '(555) 000-0000',
                    address: '123 Admin Building',
                    specialization: 'Administration',
                    license: 'ADMIN001',
                    hireDate: '2018-01-01',
                    status: 'active',
                    notes: 'System administrator'
                }
            ];
            localStorage.setItem('medx_staff', JSON.stringify(sampleStaff));
            return sampleStaff;
        }
        return JSON.parse(stored);
    }

    getAppointments() {
        return JSON.parse(localStorage.getItem('medx_appointments') || '[]');
    }

    getVisits() {
        return JSON.parse(localStorage.getItem('medx_visits') || '[]');
    }

    getMedications() {
        return JSON.parse(localStorage.getItem('medx_medications') || '[]');
    }

    // Utility functions
    formatDate(dateString) {
        if (!dateString) return 'Not set';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const element = document.getElementById('current-date-time');
        if (element) {
            element.textContent = dateTimeString;
        }
    }

    // Modal functions
    showModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }

    // Reset form
    resetForm(formId) {
        document.getElementById(formId).reset();
        // Clear hidden fields
        const hiddenFields = document.querySelectorAll(`#${formId} input[type="hidden"]`);
        hiddenFields.forEach(field => field.value = '');
        
        // Reset modal titles
        if (formId === 'patient-form') {
            document.getElementById('patient-modal-title').textContent = 'Add New Patient';
        } else if (formId === 'appointment-form') {
            document.getElementById('appointment-modal-title').textContent = 'Schedule Appointment';
        } else if (formId === 'visit-form') {
            document.getElementById('visit-modal-title').textContent = 'New Patient Visit';
        } else if (formId === 'medication-form') {
            document.getElementById('medication-modal-title').textContent = 'Add Medication';
        } else if (formId === 'staff-form') {
            document.getElementById('staff-modal-title').textContent = 'Add Staff Member';
        }
    }

    // Logout
    logout() {
        if (confirm('Are you sure you want to logout?')) {
            this.currentUser = null;
            localStorage.removeItem('medx_current_user');
            localStorage.removeItem('medx_current_tab'); // Clear saved tab preference
            this.showScreen('login-screen');
            document.getElementById('login-form').reset();
            this.showNotification('Logged out successfully!', 'success');
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Global functions for onclick handlers
function showModal(modalId) {
    app.showModal(modalId);
}

function hideModal(modalId) {
    app.hideModal(modalId);
}

function logout() {
    app.logout();
}

function fillDemo(role) {
    const credentials = {
        doctor: { username: 'doctor1', password: 'password123', role: 'doctor' },
        nurse: { username: 'nurse1', password: 'password123', role: 'nurse' },
        admin: { username: 'admin', password: 'password123', role: 'admin' }
    };

    const cred = credentials[role];
    if (cred) {
        document.getElementById('username').value = cred.username;
        document.getElementById('password').value = cred.password;
        document.getElementById('role').value = cred.role;
    }
}

// Add CSS for notifications dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
    }

    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app'); // Debug log
    const app = new MedicalApp();
    window.app = app; // Make app globally accessible for debugging
});

// Global functions for HTML onclick events
function toggleSpecializationField() {
    const roleField = document.getElementById('staff-role');
    const specializationField = document.getElementById('staff-specialization');
    const specializationLabel = specializationField.previousElementSibling;
    
    if (roleField.value === 'doctor') {
        specializationField.placeholder = 'e.g. Cardiology, Neurology, Pediatrics';
        specializationLabel.textContent = 'Medical Specialization';
    } else if (roleField.value === 'nurse') {
        specializationField.placeholder = 'e.g. Emergency, ICU, Pediatrics';
        specializationLabel.textContent = 'Department/Unit';
    } else {
        specializationField.placeholder = 'e.g. Cardiology, Emergency, Pediatrics';
        specializationLabel.textContent = 'Specialization/Department';
    }
}


/* =========================
   Added Interactivity Features
========================= */

// Tab Navigation
document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
        button.classList.add('active');
        document.getElementById(`${button.dataset.tab}-tab`).style.display = 'block';
    });
});

// Modal Controls
function showModal(id) {
    document.getElementById(id).style.display = 'block';
}
function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}
window.addEventListener('click', e => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Demo Login Auto-fill
function fillDemo(role) {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const roleField = document.getElementById('role');
    if (role === 'doctor') {
        usernameField.value = 'doctor1';
        passwordField.value = 'password123';
    } else if (role === 'nurse') {
        usernameField.value = 'nurse1';
        passwordField.value = 'password123';
    } else if (role === 'admin') {
        usernameField.value = 'admin';
        passwordField.value = 'password123';
    }
    roleField.value = role;
}

// Live Search for Patients
const patientSearch = document.getElementById('patient-search');
if (patientSearch) {
    patientSearch.addEventListener('input', e => {
        const searchText = e.target.value.toLowerCase();
        document.querySelectorAll('#patients-grid .patient-card').forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(searchText) ? 'block' : 'none';
        });
    });
}

// Logout Function
function logout() {
    document.getElementById('dashboard-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}

// Live Date-Time Update
function updateDateTime() {
    const dtElem = document.getElementById('current-date-time');
    if (dtElem) {
        dtElem.textContent = new Date().toLocaleString();
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();


// MedX Icon Click - Return to Homepage/Dashboard
const medxIcon = document.querySelector('.logo, #medx-icon, .medx-icon');
if (medxIcon) {
    medxIcon.style.cursor = 'pointer';
    medxIcon.addEventListener('click', () => {
        // Show dashboard screen
        document.getElementById('dashboard-screen').style.display = 'block';
        // Hide login or other screens if visible
        const loginScreen = document.getElementById('login-screen');
        if (loginScreen) loginScreen.style.display = 'none';
    });
}
