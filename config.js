// ============================================
// FuturON Preschool - Configuration
// ============================================

const SHEET_ID = '1GUxeW2dhHY7Lnb9Mf42tqiBFCnu4ITd321-U-AiT1ik';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2XGLoCzql55LhC0iaT7Z8HwizlLXkQJueJ9LtbcmNYUG2N1MxuJ1LLKFUmE9C6zsU/exec';
const STUDENTS = []; // Auto-detected from sheet tabs
const SCHOOL = {
    name: 'FuturON Preschool Jammalamadugu',
    address: 'Near SBI Bank, Tadipatri Road, Jammalamadugu Town, Kadapa District, Andhra Pradesh - 516434',
    class: 'LKG CLASS',
    month: ''
};
const WHO_WATER_STANDARDS = {
    PLAYGROUP: { ageRange: '2-3 years', dailyLitres: 1.3, schoolLitres: 0.65, schoolBottles: 1.5, schoolHours: '9:00 AM - 3:30 PM' },
    NURSERY:   { ageRange: '3-4 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2, schoolHours: '9:00 AM - 3:30 PM' },
    LKG:       { ageRange: '4-5 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2, schoolHours: '9:00 AM - 3:30 PM' },
    UKG:       { ageRange: '5-6 years', dailyLitres: 1.7, schoolLitres: 0.85, schoolBottles: 2, schoolHours: '9:00 AM - 3:30 PM' }
};
const CURRENT_CLASS = 'LKG';
const PARENT_INFO = {};

// App state
let studentsData = {};