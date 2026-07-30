// ============================================
// FuturON Preschool - Configuration (LKG CLASS)
// ============================================

// Google Sheets data source
const SHEET_ID = '1GUxeW2dhHY7Lnb9Mf42tqiBFCnu4ITd321-U-AiT1ik';
const APPS_SCRIPT_URL = ''; // TODO: Deploy Apps Script on your LKG Google Sheet and paste the URL here

// Student names (auto-detected from Google Sheet tabs - this is a fallback)
const STUDENTS = []; // Will be populated automatically from sheet tab names

// School information
const SCHOOL = {
    name: 'FuturON Preschool Jammalamadugu',
    address: 'Near SBI Bank, Tadipatri Road, Jammalamadugu Town, Kadapa District, Andhra Pradesh - 516434',
    class: 'LKG CLASS',
    month: '' // Dynamically detected from sheet data
};

// WHO/IOM Health Standards - Daily Water Intake by Age Group
const WHO_WATER_STANDARDS = {
    PLAYGROUP: { ageRange: '2-3 years', dailyLitres: 1.3, schoolLitres: 0.65, schoolBottles: 1.5, schoolHours: '9:00 AM - 3:30 PM', description: 'WHO/IOM recommends ~1.3L/day for ages 2-3. School target (50% of daily): ~650ml (approx. 1.5 bottles of 450ml)' },
    NURSERY:   { ageRange: '3-4 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2,   schoolHours: '9:00 AM - 3:30 PM', description: 'WHO/IOM recommends ~1.7L/day for ages 3-4. School target (50% of daily): ~850ml (approx. 2 bottles of 450ml)' },
    LKG:       { ageRange: '4-5 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2,   schoolHours: '9:00 AM - 3:30 PM', description: 'WHO/IOM recommends ~1.7L/day for ages 4-5. School target (50% of daily): ~850ml (approx. 2 bottles of 450ml)' },
    UKG:       { ageRange: '5-6 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2,   schoolHours: '9:00 AM - 3:30 PM', description: 'WHO/IOM recommends ~1.7L/day for ages 5-6. School target (50% of daily): ~850ml (approx. 2 bottles of 450ml)' }
};

// Current class for this dashboard
const CURRENT_CLASS = 'LKG';

// Parent contact information (will be populated once student names are known)
const PARENT_INFO = {};

// App state
let studentsData = {};
