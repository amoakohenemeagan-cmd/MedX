# MedX - Medical Appointment System

A comprehensive, modern web-based medical appointment management system designed for healthcare facilities to manage patient appointments, visits, medications, and staff.

## Features

### 🏥 Multi-Role Authentication
- **Doctors**: Access patient records, view appointments, manage visits
- **Nurses**: Record patient vitals, manage visits, handle appointments
- **Administrators**: Full system access including staff management

### 👥 Patient Management
- Complete patient registration and profile management
- Search and filter patients
- Emergency contact information
- Patient medical history tracking

### 📅 Appointment Scheduling
- Easy appointment booking interface
- Multiple filtering options (date, doctor, status)
- Real-time appointment status updates
- Appointment conflict prevention

### 🏥 Visit Management
- Comprehensive visit recording
- Vital signs tracking (blood pressure, heart rate, temperature, weight, height, oxygen saturation)
- Chief complaint and symptom documentation
- Diagnosis and treatment plan recording
- Detailed visit history

### 💊 Medication Management
- Prescription tracking per patient
- Dosage and frequency management
- Start and end date tracking
- Prescriber information
- Medication instructions

### 👨‍⚕️ Staff Management (Admin Only)
- Doctor and nurse registration
- Role-based access control
- Staff profile management
- License and specialization tracking

## Demo Accounts

The system comes with pre-configured demo accounts for testing:

| Role | Username | Password |
|------|----------|----------|
| Doctor | doctor1 | password123 |
| Nurse | nurse1 | password123 |
| Admin | admin | password123 |

## Getting Started

### Installation

1. Clone or download the project files
2. Ensure you have the following structure:
   ```
   MedX/
   ├── index.html
   ├── styles/
   │   └── main.css
   └── js/
       └── app.js
   ```

### Running the Application

1. Open `index.html` in a modern web browser
2. Use one of the demo accounts to log in
3. Explore the different features based on your role

### Browser Requirements

- Modern web browser with JavaScript enabled
- Local storage support
- Recommended: Chrome, Firefox, Safari, or Edge (latest versions)

## System Architecture

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript ES6+**: Application logic and interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

### Data Storage
- **Local Storage**: All data is stored locally in the browser
- **JSON Format**: Structured data management
- **Real-time Updates**: Immediate data synchronization

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Print-friendly layouts

## Usage Guide

### For Doctors
1. **Dashboard**: View today's appointments and patient statistics
2. **Patients**: Access complete patient database
3. **Appointments**: Review and manage your appointments
4. **Visits**: Document patient visits and medical findings
5. **Medications**: Prescribe and manage patient medications

### For Nurses
1. **Patient Vitals**: Record comprehensive vital signs during visits
2. **Appointment Management**: Schedule and update patient appointments
3. **Visit Documentation**: Assist with visit recording and patient care
4. **Medication Tracking**: Monitor patient medication compliance

### For Administrators
1. **Staff Management**: Add, edit, and remove healthcare staff
2. **System Overview**: Complete access to all system functions
3. **Data Management**: Oversee all patient and appointment data
4. **User Administration**: Manage user accounts and permissions

## Key Features in Detail

### Patient Registration
- Complete demographic information
- Medical history tracking
- Emergency contact management
- Insurance information (planned)

### Appointment System
- Conflict detection
- Recurring appointment support (planned)
- Email/SMS reminders (planned)
- Waitlist management (planned)

### Visit Documentation
- Structured data entry
- Medical coding support (planned)
- Photo and document attachments (planned)
- Visit templates (planned)

### Medication Management
- Drug interaction checking (planned)
- Allergy alerts (planned)
- Prescription printing (planned)
- Refill management (planned)

### Reporting & Analytics
- Patient statistics
- Appointment analytics
- Revenue tracking (planned)
- Performance metrics (planned)

## Security Features

- Role-based access control
- Session management
- Data validation
- Secure local storage
- Audit trail (planned)

## Customization

### Adding New Roles
Modify the `getDefaultStaff()` function in `js/app.js` to add new user roles.

### Extending Patient Fields
Update the patient form in `index.html` and corresponding JavaScript functions.

### Custom Styling
Modify `styles/main.css` to match your organization's branding.

### Additional Features
The modular architecture allows easy addition of new features and modules.

## Browser Compatibility

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight application (~500KB total)
- Fast local data access
- Optimized for low-bandwidth environments
- Minimal server requirements (static hosting)

## Future Enhancements

### Planned Features
- [ ] Cloud data synchronization
- [ ] PDF report generation
- [ ] Email/SMS notifications
- [ ] Advanced search and filtering
- [ ] Data export/import
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Offline functionality
- [ ] Integration with external systems
- [ ] Advanced reporting dashboard

### Technical Improvements
- [ ] Progressive Web App (PWA) support
- [ ] Enhanced mobile experience
- [ ] Accessibility improvements (WCAG compliance)
- [ ] Performance optimizations
- [ ] Automated testing suite

## Support

For technical support or feature requests, please refer to the project documentation or contact your system administrator.

## License

This project is intended for educational and demonstration purposes. Please ensure compliance with healthcare regulations (HIPAA, etc.) before using in a production environment.

## Version History

- **v1.0.0** - Initial release with core functionality
  - Patient management
  - Appointment scheduling
  - Visit documentation
  - Medication tracking
  - Staff management
  - Role-based authentication

---

**Note**: This is a demonstration application. For production use in healthcare environments, ensure compliance with relevant regulations and implement appropriate security measures.
