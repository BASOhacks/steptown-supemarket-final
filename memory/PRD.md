# Step Town Supermarket Website - Product Requirements Document

**Date Created:** January 29, 2025  
**Last Updated:** January 29, 2025  
**Version:** 1.0

---

## Original Problem Statement

Build a ready-to-deploy website for Step Town Supermarket - a modern all-in-one food and lifestyle hub located in Runda-Ruyenzi, Rwanda. The business combines supermarket, bakery, coffee shop, butcher, fast food, and catering services. Key differentiator: Free 2 Toyota Land Cruisers for a full day with catering bookings.

---

## User Personas

1. **Local Families** - Regular shoppers needing groceries and fresh products
2. **Event Planners** - Looking for professional catering services for weddings, parties
3. **Professionals & Workers** - Need quick meals, coffee, and convenience
4. **Wedding Clients** - Seeking catering with premium transport benefits
5. **Institutions/Churches** - Bulk ordering and event catering needs

---

## Core Requirements (Static)

### Functional Requirements
- ✅ Bilingual support (Kinyarwanda/English)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ All 6 services clearly presented
- ✅ Catering promotion prominently displayed
- ✅ Delivery form for order requests
- ✅ Contact integration (phone + Instagram)
- ✅ Smooth navigation and section scrolling

### Non-Functional Requirements
- Professional, modern, vibrant design
- Clean layouts with proper spacing
- No dark gradients or prohibited color combinations
- Fast loading times
- Accessible and user-friendly

---

## Architecture & Tech Stack

### Frontend
- React 19.0.0
- Tailwind CSS for styling
- Shadcn UI components
- Context API for language management
- Lucide React for icons

### Design System
- Primary Color: Sky Blue (#4A90E2) - matches building
- Clean white backgrounds
- Vibrant accent colors for different services
- No dark gradients, no purple/pink combinations
- Smooth transitions and hover effects

---

## What's Been Implemented (Phase 1 - January 29, 2025)

### ✅ Completed Features

1. **Language System**
   - Bilingual toggle (Kinyarwanda/English)
   - Complete translations for all content
   - Persistent language context

2. **Header & Navigation**
   - Fixed header with logo
   - Smooth scroll navigation
   - Mobile-responsive menu
   - Language toggle button

3. **Hero Section**
   - Building image integration
   - Compelling headline in both languages
   - Location display
   - CTA buttons (Shop Now, Order Delivery)

4. **Services Section**
   - 6 service cards with unique icons and colors
   - Supermarket, Bakery, Coffee Shop, Butcher, Fast Food, Catering
   - Hover animations and visual effects
   - Equal prominence for all services

5. **Catering Promotion Section**
   - Highlighted Land Cruiser offer
   - "Terms & Conditions Apply" notice
   - "More Information" button (calls primary phone)
   - "Book Now" button (scrolls to contact)
   - Professional visual presentation

6. **Delivery Section**
   - Full delivery form with validation
   - Fields: Name, Phone, Address, Order Details, Time Slot
   - Real delivery image integration
   - Success toast notification
   - Bilingual form labels

7. **Gallery Section**
   - 3 real images from the business
   - Hover effects with image zoom
   - Professional presentation

8. **Contact Section**
   - 3 phone numbers with click-to-call
   - Location display
   - Opening hours
   - Instagram integration with link
   - Professional card layouts

9. **Footer**
   - Complete site information
   - Quick links navigation
   - Services list
   - Contact details
   - Social media links

---

## Current Status: FRONTEND COMPLETE ✅

The website is fully functional as a **frontend-only application** with:
- All sections working perfectly
- Bilingual support operational
- Forms functional (frontend validation + mock submission)
- Navigation smooth and responsive
- Professional design matching requirements
- Real images integrated from customer assets

---

## Mock Data Implementation

**Mock Data File:** `/app/frontend/src/data/mockData.js`

Contains:
- Bilingual translations (Kinyarwanda/English)
- Phone numbers array
- Instagram URL
- Image URLs from customer assets
- Services configuration
- Time slots for delivery

**Note:** Delivery form submissions are currently mocked - form data is logged to console and success message is shown. Backend integration will handle actual order storage.

---

## Prioritized Backlog

### P0 Features (Core, Not Yet Implemented)
- None - All core features completed for Phase 1

### P1 Features (Important Enhancements)
1. **Backend Development**
   - Database models for delivery orders
   - API endpoints for form submissions
   - Contact inquiry tracking
   - Admin dashboard for order management

2. **Email Notifications**
   - Send email confirmation on delivery orders
   - Notify admin of new orders

3. **WhatsApp Integration**
   - Quick order via WhatsApp button
   - Direct chat integration

### P2 Features (Nice to Have)
1. Image gallery expansion with more photos
2. Customer testimonials section
3. Blog/News section for announcements
4. Online ordering system with cart
5. Real-time order tracking
6. Google Maps integration for location
7. Photo gallery from actual events catered

---

## Next Tasks

### Immediate Next Steps:
1. ✅ Complete frontend implementation - **DONE**
2. User feedback and design refinements (if needed)
3. Backend development planning
4. Database schema design
5. API endpoint implementation

### Future Phases:
- Phase 2: Backend API + Database integration
- Phase 3: Admin dashboard
- Phase 4: Advanced features (WhatsApp, email, payments)
- Phase 5: Testing & deployment

---

## Contact Information

**Phone Numbers:**
- 0780382589
- 0784002471
- 0780880349

**Instagram:** @step_town_supermarket  
**Location:** Runda - Ruyenzi, Rwanda

---

## Notes

- Design follows all provided guidelines (no dark gradients, proper color usage)
- All images are real business photos provided by customer
- Bilingual implementation covers entire website
- Responsive design works across all devices
- Ready for backend integration when approved
